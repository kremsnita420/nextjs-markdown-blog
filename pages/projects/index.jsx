import fs from 'fs'
import path from 'path'
import NextLink from 'next/link'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import Project from '@/components/Project'

export default function ProjectsPage({ projects }) {
	console.log(projects)
	return (
		<Layout title='My Projects Page' className='height'>
			<h1 className='text-5xl border-b-4 pb-5 font-bold ml-2'>
				Projects
			</h1>

			<div className='bg-white shadow-md rounded-lg px-3 py-6 mt-6'>
				<h3 className='text-2xl mb-5'>My Best Projects</h3>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
					{projects.map((project, index) => (
						<Project key={index} project={project} />
					))}
				</div>

				<NextLink href='/projects'>
					<a
						className='block text-center border border-gray-500 
				text-gray-800 rounded-md py-4 my-5 transition duration-500 
				ease select-none hover:text-white hover:bg-gray-900 
				focus:outline-none focus:shadow-outline w-full'
					>
						All Projects
					</a>
				</NextLink>
			</div>
		</Layout>
	)
}

// fetch projects from .md file
export async function getStaticProps() {
	const files = fs.readdirSync(path.join('markdown-projects'))

	const projects = files.map((filename) => {
		//create slug
		const slug = filename.replace('.md', '')

		//pars .md content into an object
		const markownWithMeta = fs.readFileSync(
			path.join('markdown-projects', filename),
			'utf-8'
		)

		const { data: frontmatter } = matter(markownWithMeta)

		return {
			slug,
			frontmatter,
		}
	})

	return {
		props: {
			projects,
		},
	}
}
