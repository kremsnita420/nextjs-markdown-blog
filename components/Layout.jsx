import Head from 'next/head'
import Header from './Header'
import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='keywords' content={keywords} />
				<meta name='description' conetnt={description} />
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

			<Header />
		</div>
	)
}

Layout.defaultProps = {
	title: 'Welcome to Dev Space',
	keywords: 'development, coding, programming',
	description: 'The best info and news in development',
}
