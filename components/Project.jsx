import NextLink from 'next/link'
import Image from 'next/image'

export default function Project({ project }) {
	return (
		<div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
			<Image
				src={project.frontmatter.cover_image}
				alt={project.frontmatter.excerpt}
				width={420}
				height={500}
				className='object-cover mb-4 rounded-md'
			/>

			<div className='flex justify-between items-center'>
				<span className='font-light text-gray-600'>
					{project.frontmatter.date}
				</span>
				<div>{project.frontmatter.category}</div>
			</div>

			<div className='mt-2'>
				<NextLink href={`/projects/${project.slug}`}>
					<a className='text-2xl text-gray-700 font-bold hover:underline'>
						{project.frontmatter.title}
					</a>
				</NextLink>
				<p className='mt-2 text-gray-600'>
					{project.frontmatter.excerpt}
				</p>
			</div>
		</div>
	)
}
