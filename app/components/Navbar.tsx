import React from 'react'
import Link from 'next/link'
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from 'react-icons/fa'

type Props = {}

export default function Navbar({}: Props) {
	return (
		<nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
			<div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link href="/" className="text-white/90 no-underline hover:text-white">
						Matt Ray
					</Link>
				</h1>
				<div className="flex flex-row text-white justify-center gap-2 text-3xl">
					<FaYoutube />
					<FaTwitter />
					<FaGithub />
					<FaLaptop />
				</div>
			</div>
		</nav>
	)
}
