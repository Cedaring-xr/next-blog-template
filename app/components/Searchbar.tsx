'use client'

import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {
	searchQuery: string
	setSearchQuery: (query: string) => void
}

export default function Searchbar({ searchQuery, setSearchQuery }: Props) {
	return (
		<>
			<div className="relative h-[50px]">
				<input
					type="text"
					placeholder="Search by title or date..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="border-2 border-black rounded-lg text-xl pl-4 pr-14 py-2 outline-none text-black w-full h-[50px]"
				/>
				<div className="absolute right-0 top-0 bg-slate-800 h-[50px] w-[50px] flex items-center justify-center rounded-r-lg border-2 border-l-0 border-black">
					<FaSearch className="text-xl text-white" />
				</div>
			</div>
		</>
	)
}
