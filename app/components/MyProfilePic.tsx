import React from 'react'
import Image from 'next/image'

const Profile = () => {
	return (
		<div id="profile-container" className="relative h-[265px] p-0 ml-0">
			<div className="polygon absolute bg-neutral-600 top-[28px] left-[28px]"></div>
			<div className="polygon absolute bg-stone-900 flex flex-col justify-center align-middle">
				<h2 className="text-white py-2 px-4 z-10 text-3xl mb-0 pt-0">Hello and Welcome!</h2>
				<h3 className="text-white py-2 px-8 z-10 text-xl pt-0">My name is Matt</h3>
			</div>

			<div
				id="profile-circle-two"
				className="w-[140px] h-[140px] bg-slate-100 rounded-full absolute left-[230px] top-[120px]"
			></div>
			<div
				id="profile-circle-one"
				className="w-[125px] h-[125px]  bg-transparent rounded-full absolute left-[237px] top-[127px] border-[5px] border-stone-900 overflow-hidden"
			>
				<Image
					src="/images/self.png"
					width={200}
					height={200}
					alt="self"
					priority
					className="rounded-full mt-0"
				/>
			</div>
		</div>
	)
}

export default Profile
