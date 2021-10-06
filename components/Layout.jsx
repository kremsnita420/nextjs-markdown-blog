import Head from 'next/head'
import Header from './Header'
import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<meta
					property='og:image'
					content='/images/posts/img5.jpg'
					key='ogimage'
				/>
				+{' '}
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
			</Head>

			<Header />
			<Search />

			<main className='container mx-auto my-7'>{children}</main>
		</div>
	)
}

Layout.defaultProps = {
	title: 'Welcome to Dev Space',
	keywords: 'development, coding, programming',
	description: 'The best info and news in development',
}
