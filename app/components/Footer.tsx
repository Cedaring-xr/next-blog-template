import React from 'react'
import { FaLaptop, FaGithub, FaCode } from 'react-icons/fa'
import Link from 'next/dist/client/link'

const Footer = () => {
	return (
		<div className="w-full h-[30px] flex flex-row justify-between items-center bg-stone-900 bottom-0 fixed px-4 md:px-12 text-xs md:text-base">
			<span className="text-white">created by: Matt Ray</span>
			<span className="text-white flex flex-row text-2xl gap-4">
				<Link href="https://github.com/Cedaring-xr" target="_blank">
					<FaGithub className="text-purple-400 cursor-pointer" />
				</Link>
				<Link href="https://www.radiantpine.com" target="_blank">
					<FaLaptop className="text-amber-400 cursor-pointer" />
				</Link>
				<Link href="https://mattraydev.com" target="_blank">
					<FaCode className="text-teal-400 cursor-pointer" />
				</Link>
			</span>
		</div>
	)
}
export default Footer
