import fs from 'fs'
import path from 'path'
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

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
					{projects.map((project, index) => (
						<Project key={index} project={project} />
					))}
				</div>
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
