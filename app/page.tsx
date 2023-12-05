import { Inter } from 'next/font/google'
import Posts from './components/Posts'
import MyProfilePic from './components/MyProfilePic'

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 86400

export default function Home() {
	return (
		<div className="mx-auto">
			<MyProfilePic />
			<p className="mt-12 mb-12 text-3xl text-center dark:text-white">
				Hello and Welcome!
				<span className="whitespace-nowrap">
					I'm <span className="font-bold">Matt</span>.
				</span>
			</p>
			<Posts />
		</div>
	)
}
