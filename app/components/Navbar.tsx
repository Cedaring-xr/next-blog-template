import React from 'react'
import Link from 'next/link'
import Searchbar from './Searchbar'

type Props = {}

export default function Navbar({}: Props) {
	return (
		<nav className="header-gradient p-4 sticky top-0 drop-shadow-xl z-10 sans-font">
			<div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link href="/" className="text-white/90 no-underline hover:text-white">
						Matt Ray Developer Blog
					</Link>
				</h1>
				<div className="flex flex-row text-white justify-center gap-2 text-3xl">
					<Searchbar />
				</div>
			</div>
		</nav>
	)
}
