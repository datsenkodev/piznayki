import Footer from '@components/footer'
import Header from '@components/header'
import '@sass/main.scss'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	weight: ['400', '500', '600', '700']
})

export const metadata = {
	title: {
		default: 'Пізнайки - освітні заклади для дітей у місті Вишгороді',
		template: '%s | Пізнайки'
	},
	description:
		'Освітній заклад для дітей та підлітків. Ми забезпечуємо якісну освіту, розвиток та комфортне середовище для навчання.',
	keywords:
		'школа, діти, дитяча, підлітки, Вишгород, Україна, Київ, освітній, освіта, навчання, розвиток, комфорт, заклад, садок, Вишгороді',
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png'
	},
	openGraph: {
		type: 'website',
		locale: 'uk_UA',
		url: 'https://piznayko.info/',
		siteName: 'Пізнайки',
		title: 'Пізнайки - освітні заклади для дітей у місті Вишгороді',
		description:
			'Освітній заклад для дітей та підлітків. Ми забезпечуємо якісну освіту, розвиток та комфортне середовище для навчання.'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Пізнайки',
		description:
			'Освітній заклад для дітей та підлітків. Ми забезпечуємо якісну освіту, розвиток та комфортне середовище для навчання.'
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='uk'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content={metadata.description} />
				<meta name='keywords' content={metadata.keywords} />
				<meta name='author' content={metadata.author} />
				<meta name='robots' content='index, follow' />
				<link rel='icon' href={metadata.icons.icon} />
				<link rel='apple-touch-icon' href={metadata.icons.apple} />
				<title>{metadata.title}</title>

				{/* Open Graph Meta Tags for Social Media */}
				<meta property='og:title' content={metadata.title} />
				<meta property='og:description' content={metadata.description} />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://piznayko.info/' />
				{/* <meta property='og:image' content='/public/images/logo-big.svg' /> */}

				{/* Twitter Card Meta Tags */}
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:title' content={metadata.title} />
				<meta name='twitter:description' content={metadata.description} />
				{/* <meta name='twitter:image' content='/public/images/logo-big.svg' /> */}

				{/* Structured Data for SEO */}
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'EducationalOrganization',
						name: 'Пізнайки',
						url: 'https://yourwebsite.com',
						logo: 'https://yourwebsite.com/logo.png',
						description: metadata.description,
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Вишгород',
							addressCountry: 'Україна'
						}
					})}
				</script>
				{/* 404 Page Image  */}
				<a href='https://storyset.com/web'>Web illustrations by Storyset</a>
			</head>
			<body className={montserrat.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
