import React from 'react'
import Link from 'next/link'
import getFormattedDate from '@/lib/getFormmatedDate'

type Props = {
	post: BlogPost
}

export default function ListItem({ post }: Props) {
	const { id, title, date } = post

	const formmatedDate = getFormattedDate(date)

	return (
		<li className="mt-4 text-2xl dark:text-white/90">
			<Link className="underline hover:to-black/70 dark:hover:text-white" href={`/posts/${id}`}>
				{title}
			</Link>
			<br />
			<p className="text-sm mt-1">{formmatedDate}</p>
		</li>
	)
}
