// revalidation url = https://<your-site-name>/api/revalidate?secret=<token>
// local revalidation = http://localhost:3000/api/revalidate?path=/&secret=process.env.MY_SECRET_TOKEN

import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
		return res.status(401).json({ message: 'invalid token' })
	}

	try {
		const path = req.query.path as string
		await res.revalidate(path)
		return res.json({ revalidted: true })
	} catch (error) {
		console.log(error)
	}
}
