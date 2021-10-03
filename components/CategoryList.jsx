import Link from 'next/link'

export default function CategoryList({ categories }) {
	return (
		<div className='flex justify-center w-full p-2 bg-gray-100 rounded-lg shadow-md mt-4 my-5'>
			<ul className='flex'>
				{categories.map((category, index) => (
					<Link
						key={index}
						passHref
						href={`/blog/category/${category.toLowerCase()}`}
					>
						<li className='p-2 cursor-pointer hover:bg-gray-500'>
							{category}
						</li>
					</Link>
				))}
			</ul>
		</div>
	)
}
