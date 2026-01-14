import { getPostsMeta } from '@/lib/posts'
import HomePageWrapper from './components/HomePageWrapper'

export const revalidate = 60 // Revalidate every hour

export default async function Home() {
	const posts = await getPostsMeta()

	if (!posts) {
		return <p className="mt-10 text-center">Sorry, no posts available.</p>
	}

	return <HomePageWrapper posts={posts} />
}
