import Link from 'next/link'

export default function Pagination({ currentPage, numPages }) {
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = `/blog/page/${currentPage - 1}`
	const nextPage = `/blog/page/${currentPage + 1}`

	if (numPages === 1) return <></>
	return (
		<div>
			<div className='mt-6 flex justify-center items-center'>
				<ul className='flex pl-0 list-none my-2'>
					{!isFirst && (
						<Link href={prevPage} passHref>
							<li
								className='relative block py-2 px-3 leading-tight bg-white 
                            border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 
                            cursor-pointer'
							>
								Previous
							</li>
						</Link>
					)}

					{/*display page number*/}
					{Array.from({ length: numPages }, (_, i) => (
						<Link key={i} passHref href={`/blog/page/${i + 1}`}>
							<li
								className='relative block py-2 px-3 leading-tight bg-white 
                            border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 
                            cursor-pointer'
							>
								{i + 1}
							</li>
						</Link>
					))}
					{!isLast && (
						<Link passHref href={nextPage}>
							<li
								className='relative block py-2 px-3 leading-tight bg-white 
                            border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 
                            cursor-pointer'
							>
								Next
							</li>
						</Link>
					)}
				</ul>
			</div>
			<p className='flex justify-center items-center'>
				page {currentPage}/{numPages}
			</p>
		</div>
	)
}
