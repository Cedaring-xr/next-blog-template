import React from 'react'
import { getPostsMeta } from '@/lib/posts'
import PostsWithSearch from './PostsWithSearch'

type Props = {}

export default async function Posts({}: Props) {
	const posts = await getPostsMeta()

	if (!posts) {
		return <p className="mt-10 text-center">Sorry, no posts available.</p>
	}

	return <PostsWithSearch posts={posts} />
}
