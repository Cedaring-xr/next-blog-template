import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import Posts from './components/Posts'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main className="px-6 mx-auto">
			<p className="mt-12 mb-12 text-3xl text-center dark:text-white">
				Hello and Welcome!
				<span className="whitespace-nowrap">
					I am <span className="font-bold">Matt</span>.
				</span>
			</p>
			<Posts />
		</main>
	)
}
