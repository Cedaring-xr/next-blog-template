import React from 'react'
import { FaSearch } from 'react-icons/fa'

type Props = {}

export default function Searchbar({}: Props) {
	return (
		<>
			<div className="relative h-[50px]">
				<input
					type="text"
					placeholder="search"
					className="border-2 border-black rounded-lg text-xl pl-2 outline-none text-black"
				/>
				<div className="absolute right-0 top-[6px] bg-slate-800 h-[32px] w-[42px] px-2 py-1 rounded-r-lg border-2 border-black">
					<FaSearch className="text-xl" />
				</div>
			</div>
		</>
	)
}
