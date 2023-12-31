import React from 'react'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormmatedDate'

type Props = {
	post: Meta
}

export default function ListItem({ post }: Props) {
	const { id, title, date, readTime } = post

	const formmatedDate = getFormattedDate(date)

	return (
		<li className="mt-4 text-2xl dark:text-white/90">
			<Link className="hover:to-black/70 dark:hover:text-white" href={`/posts/${id}`}>
				{title}
			</Link>
			<br />
			<p className="text-sm mt-1 mb-0">{formmatedDate}</p>
			<p className="text-sm mt-0">Estimated Read Time: {readTime}</p>
		</li>
	)
}
