'use client'

import React from 'react'
import { useSearchParams } from 'next/navigation'
import MyProfilePic from './MyProfilePic'
import PostsWithSearch from './PostsWithSearch'

type Props = {
	posts: Meta[]
}

export default function HomePageWrapper({ posts }: Props) {
	const searchParams = useSearchParams()
	const searchQuery = searchParams.get('search') || ''

	return (
		<>
			{/* Profile and intro section */}
			<div className="mx-auto flex flex-col lg:flex-row mt-8 relative lg:-left-[150px] lg:w-[1000px]">
				<div className="w-1/2">
					<MyProfilePic />
				</div>
				<div className="lg:w-1/2">
					<p className="mt-12 mb-12 text-2xl text-center dark:text-white">
						This is a blog for Radiant Pine LLC. I am a web developer and QA automation engineer that is
						expanding into doing freelance work. I write about various topics related to web development,
						improving websites, testing, and working with CMS platforms.
					</p>
				</div>
			</div>

			{/* Posts section with search */}
			<PostsWithSearch posts={posts} searchQuery={searchQuery} />
		</>
	)
}
