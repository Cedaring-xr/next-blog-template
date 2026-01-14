import { getPostsMeta, getPostByName } from '@/lib/posts'
import React from 'react'
import { notFound } from 'next/navigation'
import getFormattedDate from '@/lib/getFormmatedDate'
import Link from 'next/link'
import 'highlight.js/styles/github-dark.css'

export const revalidate = 60 // Revalidate every hour

type Props = {
	params: {
		postId: string
	}
}

// creates SSG components instead if SSR when building
export async function generateStaticParams() {
	const posts = await getPostsMeta()

	if (!posts) {
		return []
	}

	return posts.map((post) => ({
		postId: post.id
	}))
}

export async function generateMetadata({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`) //automatically de-duped

	if (!post) {
		return {
			title: 'Post Not Found'
		}
	}

	return {
		title: post.meta.title
	}
}

export default async function Post({ params: { postId } }: Props) {
	const post = await getPostByName(`${postId}.mdx`) //automatically de-duped

	if (!post) notFound()

	const { meta, content } = post

	const publishDate = getFormattedDate(meta.date)

	const tags = meta.tags.map((tag, i) => (
		<Link key={i} href={`/tags/${tag}`}>
			{tag}
		</Link>
	))

	const readTime = meta.readTime

	return (
		<>
			<h2 className="text-3xl mt-10 mb-0">{meta.title}</h2>
			<p className="mt-0 text-sm mb-0">{publishDate}</p>
			<p className="mt-0 text-sm">Estimated Read time: {readTime}</p>
			<article>{content}</article>
			<section>
				<h3>Related: </h3>
				<div className="flex flex-row gap-4">{tags}</div>
			</section>
			<p className="mb-10">
				<Link href="/">Return to Homepage</Link>
			</p>
		</>
	)
}
