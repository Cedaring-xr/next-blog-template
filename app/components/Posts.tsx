import React from 'react'
// import { getSortedPostsData } from '@/lib/posts'
import { getPostsMeta } from '@/lib/posts'
import ListItem from './ListItem'

type Props = {}

export default async function Posts({}: Props) {
	const posts = await getPostsMeta()

	if (!posts) {
		return <p className="mt-10 text-center">Sorry, no posts available.</p>
	}

	return (
		<section className="mt-6 mx-auto mb-24 max-w-2xl serif-font">
			<h2 className="text-4xl font-bold dark:text-white/90">Recent Blog Posts</h2>
			<ul className="w-full list-none p-0">
				{posts.map((post) => (
					<ListItem key={post.id} post={post} />
				))}
			</ul>
		</section>
	)
}
