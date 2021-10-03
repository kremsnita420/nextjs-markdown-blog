import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

export default function Post({ post, compact }) {
	return (
		<div className='w-full px-5 py-6 bg-white rounded-lg shadow-md mt-6'>
			{!compact && (
				<Image
					className='mb-4 rounded'
					src={post.frontmatter.cover_image}
					alt='post cover'
					height={420}
					width={600}
				/>
			)}

			<div className='flex justify-between items-center'>
				<span className='font-light text-sm text-gray-600'>
					{post.frontmatter.date}
				</span>
				<CategoryLabel>{post.frontmatter.category}</CategoryLabel>
			</div>

			<div className='mt-2'>
				<Link href={`/blog/${post.slug}`}>
					<a className='text-2xl text-gray-700 font-bold hover:underline'>
						{post.frontmatter.title}
					</a>
				</Link>

				<p className='mt-2 text-gray-600'>{post.frontmatter.excerpt}</p>
			</div>

			{!compact && (
				<div className='flex justify-between items-center mt-6'>
					<Link href={`/blog/${post.slug}`}>
						<a className='text-gray-900 font-bold hover:text-blue-600'>
							Read More
						</a>
					</Link>

					<div className='flex items-center'>
						<div className='w-10 h-10  hidden sm:block'>
							<Image
								className=' object-cover rounded-full'
								src={post.frontmatter.author_image}
								alt={post.frontmatter.author}
								width={40}
								height={40}
							/>
						</div>

						<h3 className='text-gray-700 text-sm'>
							{post.frontmatter.author}
						</h3>
					</div>
				</div>
			)}
		</div>
	)
}
