import NextLink from 'next/link'
import Image from 'next/image'

export default function Project({ project }) {
	return (
		<div className='w-full p-5 bg-white rounded-lg shadow-md mt-6'>
			<Image
				src={project.frontmatter.cover_image}
				alt={project.frontmatter.excerpt}
				width={600}
				height={500}
				className='object-cover mb-4 rounded-md'
			/>

			<p className='mt-2 text-gray-600'>
				Stack: {project.frontmatter.stack}
			</p>

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

			<div className='flex justify-between items-center mt-6'>
				<NextLink href={`/projects/${project.slug}`}>
					<a className='buttonSecondary btn-2'>Read More</a>
				</NextLink>
			</div>
		</div>
	)
}
