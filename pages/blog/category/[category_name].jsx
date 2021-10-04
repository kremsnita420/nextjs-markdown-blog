import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { getPosts } from '@/lib/posts'
import CategoryList from '@/components/CategoryList'

export default function CategoryBlogPage({ posts, categoryName, categories }) {
	return (
		<Layout>
			<div className='flex justify-between'>
				<div className='w-full mr-10'>
					<h1 className='text-5xl border-b-4 p-5 font-bold'>
						Posts in {categoryName}
					</h1>

					<div className='w-full'>
						<CategoryList categories={categories} />
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{posts.map((post, index) => (
							<Post key={index} post={post} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('markdown-posts'))

	const categories = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join('markdown-posts', filename),
			'utf-8'
		)

		const { data: frontmatter } = matter(markdownWithMeta)

		return frontmatter.category.toLowerCase()
	})

	const paths = categories.map((category) => ({
		params: { category_name: category },
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { category_name } }) {
	const posts = getPosts()

	/*get categories for sidebar */
	const categories = posts.map((post) => post.frontmatter.category)

	/*remove duplicate categories */
	const uniqueCategories = [...new Set(categories)]

	/* filter post by category */
	const categoryPosts = posts.filter(
		(post) => post.frontmatter.category.toLowerCase() === category_name
	)

	return {
		props: {
			posts: categoryPosts,
			categoryName: category_name,
			categories: uniqueCategories,
		},
	}
}
