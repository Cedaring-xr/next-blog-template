'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'

type Props = {}

export default function Navbar({}: Props) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const urlSearchQuery = searchParams.get('search') || ''
	const [inputValue, setInputValue] = useState(urlSearchQuery)

	// Sync input with URL when URL changes (e.g., browser back/forward)
	useEffect(() => {
		setInputValue(urlSearchQuery)
	}, [urlSearchQuery])

	const handleSearch = (value: string) => {
		setInputValue(value)
		const params = new URLSearchParams(searchParams.toString())
		if (value) {
			params.set('search', value)
		} else {
			params.delete('search')
		}
		router.replace(`${pathname}?${params.toString()}`)
	}

	const handleClearInput = () => {
		setInputValue('')
		// Don't update URL params - keep search results
	}

	return (
		<nav className="header-gradient p-2 sticky top-0 drop-shadow-xl z-10 sans-font">
			<div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row items-center gap-4">
				<Image
					src="/images/RadiantPineLogo1.png"
					alt="LLC logo"
					width={40}
					height={30}
					priority
					className="mr-10 mb-0"
				/>

				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link href="/" className="text-white/90 no-underline hover:text-white">
						<span className="bold text-4xl text-emerald-400">Radiant Pine</span>
						<br></br> Development Blog
					</Link>
				</h1>

				<div className="relative h-[38px] w-full sm:w-[300px]">
					<input
						type="text"
						placeholder="Search by title or date..."
						value={inputValue}
						onChange={(e) => handleSearch(e.target.value)}
						className="border-2 border-black rounded-lg text-base pl-3 pr-12 py-1 outline-none text-black w-full h-[38px]"
					/>
					<button
						onClick={handleClearInput}
						className="absolute right-0 top-0 bg-slate-800 h-[38px] w-[38px] flex items-center justify-center rounded-r-lg border-2 border-l-0 border-black cursor-pointer hover:bg-slate-700 active:scale-95 transition-all duration-150 ease-in-out"
						aria-label="Clear search input"
					>
						<FaSearch className="text-base text-white" />
					</button>
				</div>
			</div>
		</nav>
	)
}
