import Navbar from './components/Navbar'
import './globals.css'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
	title: 'Matt Ray Blog',
	description: 'Created by Matt Ray'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="dark:bg-slate-800">
				<Navbar />
				<MyProfilePic />
				{children}
			</body>
		</html>
	)
}
