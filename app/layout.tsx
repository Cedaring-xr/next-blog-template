import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Matt Ray Blog',
	description: 'Created by Matt Ray'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="dark:bg-slate-800">
				<Navbar />
				<div className="w-full bg-stone-950 h-[100px] xs:h-[200px] sm:h-[250px] lg:h-[350px]">
					<div className="sunBackground w-full max-w-[1400px] h-[250px] lg:h-[350px] mx-auto"></div>
				</div>
				<main className="px-4 md:px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">{children}</main>
				<Footer />
			</body>
		</html>
	)
}
