import Posts from './components/Posts'
import MyProfilePic from './components/MyProfilePic'

export const revalidate = 86400

export default function Home() {
	return (
		<>
			<div className="mx-auto flex flex-col lg:flex-row mt-8 relative lg:-left-[150px] lg:w-[1000px]">
				<div className="w-1/2">
					<MyProfilePic />
				</div>
				<div className="lg:w-1/2">
					<p className="mt-12 mb-12 text-3xl text-center dark:text-white">
						<span className="">
							I am a web developer and QA Automation Engineer. I write about working with features of AWS
							and some testing frameworks and methodologies
						</span>
					</p>
				</div>
			</div>
			<Posts />
		</>
	)
}
