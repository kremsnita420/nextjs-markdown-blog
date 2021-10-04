import Layout from '@/components/Layout'
export default function AboutPage() {
	return (
		<Layout title='About DevSpace' className='height'>
			<h1 className='text-5xl border-b-4 pb-5 font-bold ml-2'>About</h1>

			<div className='bg-white shadow-md rounded-lg px-10 py-6 mt-6'>
				<h3 className='text-2xl mb-5'>DevSpace Blog</h3>

				<p className='mb-5 h-96'>
					This is a blog build with Next.js, Tailwind and Markdown.
				</p>

				<p>
					<span className='font-bold'>Version 1.0.0</span>
				</p>
			</div>
		</Layout>
	)
}
