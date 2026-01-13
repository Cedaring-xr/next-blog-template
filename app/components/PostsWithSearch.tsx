'use client'

import React, { useMemo } from 'react'
import ListItem from './ListItem'

type Props = {
	posts: Meta[]
	searchQuery: string
}

export default function PostsWithSearch({ posts, searchQuery }: Props) {
	const filteredPosts = useMemo(() => {
		if (!searchQuery.trim()) {
			return posts
		}

		const query = searchQuery.toLowerCase().trim()

		return posts.filter((post) => {
			// Search by title words
			const titleMatch = post.title.toLowerCase().includes(query)

			// Search by date (supports formats like "2024", "2024-01", "january", etc.)
			const dateMatch = post.date.toLowerCase().includes(query)

			return titleMatch || dateMatch
		})
	}, [posts, searchQuery])

	return (
		<section className="mt-6 mx-auto mb-24 max-w-2xl serif-font">
			<h2 className="text-4xl font-bold dark:text-white/90">Recent Blog Posts</h2>

			{filteredPosts.length === 0 ? (
				<p className="mt-10 text-center text-lg dark:text-white/70">
					No posts found matching "{searchQuery}"
				</p>
			) : (
				<ul className="w-full list-none p-0">
					{filteredPosts.map((post) => (
						<ListItem key={post.id} post={post} />
					))}
				</ul>
			)}
		</section>
	)
}
