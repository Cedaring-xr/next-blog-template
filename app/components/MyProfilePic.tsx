import React from 'react'
import Image from 'next/image'

type Props = {}

export default function MyProfilePic({}: Props) {
	return (
		<section className="w-full mx-auto">
			<Image
				src="/images/self.png"
				width={200}
				height={200}
				alt="self"
				priority
				className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
			/>
		</section>
	)
}
