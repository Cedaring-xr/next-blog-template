import { GetPostData, getSortedPostsData } from '@/lib/posts'
import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormmatedDate'
import Link from 'next/link'

// creates SSG components instead if SSR when building
export function generateStaticParams() {
	const posts = getSortedPostsData() //automatically de-duped

	return posts.map((post) => ({
		postId: post.id
	}))
}

export function generateMetadata({ params }: { params: { postId: string } }) {
	const posts = getSortedPostsData() //automatically de-duped
	const { postId } = params
	const post = posts.find((post) => post.id === postId)

	if (!post) {
		return {
			title: 'Post Not Found'
		}
	}

	return {
		title: post.title
	}
}

export default async function Post({ params }: { params: { postId: string } }) {
	const posts = getSortedPostsData() //automatically de-duped
	const { postId } = params

	// returns 404 page if the id's dont match
	if (!posts.find((post) => post.id === postId)) {
		notFound()
	}

	const { title, date, contentHtml } = await GetPostData(postId)
	const publishDate = getFormattedDate(date)

	return (
		<main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
			<h1 className="text-3xl mt-4 mb-0">{title}</h1>
			<p className="mt-0">{publishDate}</p>
			<article>
				{/* dangerouslySetInnerHTML is simillar to DOM.innerHTML, use this instead of creating a selector to grab the element */}
				<section dangerouslySetInnerHTML={{ __html: contentHtml }} />
				<p>
					<Link href="/">Back to Homepage</Link>
				</p>
			</article>
		</main>
	)
}
