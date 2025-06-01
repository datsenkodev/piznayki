import { AboutClient } from './AboutClient'
import { generateAboutJsonLd } from '@json-ld/about-page'

export const metadata = {
	title: 'Про нас | Пізнайки',
	description:
		'Історія розвитку мережі освітніх закладів «Пізнайки» у місті Вишгород: садочок, початкова школа, середня школа та репетиторський центр.',
	keywords:
		'Пізнайки, про нас, історія, школа, садок, навчання, Вишгород, розвиток, дошкільнята, приватна школа',
	openGraph: {
		title: 'Про нас | Пізнайки',
		description:
			'Як з’явились і розвивались заклади Пізнайки: від садочка до школи і репетиторського центру у Вишгороді.',
		url: 'https://piznayko.info/about-us',
		images: [
			{
				url: 'https://piznayko.info/images/logo-big.svg',
				width: 367,
				height: 164,
				alt: 'Про нас - освітні заклади Пізнайки'
			}
		],
		type: 'article'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Про нас | Пізнайки',
		description:
			'Історія розвитку освітніх закладів «Пізнайки» у Вишгороді — від садочка до школи й далі.'
	}
}

export default function About() {
	const aboutJsonLd = generateAboutJsonLd()
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(aboutJsonLd)
				}}
			/>
			<AboutClient />
		</>
	)
}
