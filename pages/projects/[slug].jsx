import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import Image from 'next/image'
import marked from 'marked'
import matter from 'gray-matter'
import Layout from '@/components/Layout'

export default function ProjectPage({
	frontmatter: { title, cover_image, stack },
	content,
	slug,
}) {
	return (
		<Layout title={title}>
			<Link href='/projects'>Go Back</Link>

			<div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
				<div className='flex justify-between items-center mt-4'>
					<h1 className='text-5xl mb-7'>{title}</h1>
				</div>

				<Image
					className='object-cover'
					src={cover_image}
					alt='cover'
					width={1300}
					height={700}
				/>
			</div>

			<div className='blog-text mt-2'>
				<div
					dangerouslySetInnerHTML={{ __html: marked(content) }}
				></div>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('markdown-projects'))

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('markdown-projects', slug + '.md'),
		'utf-8'
	)

	const { data: frontmatter, content } = matter(markdownWithMeta)

	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	}
}
