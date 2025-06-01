import { MiddleSchoolClient } from './MiddleSchoolClient'
import { generateMiddleSchoolJsonLd } from '@json-ld/middle-page'

export const metadata = {
	title: 'Середня школа | Пізнайки',
	description:
		'Приватна середня школа мережі освітніх закладів «Пізнайки» у Вишгороді: сучасні підходи, професійні викладачі, турбота про кожну дитину.',
	keywords:
		'Пізнайки, середня школа, приватна школа, навчання, Вишгород, освіта, сучасна школа, підлітки, 5-9 клас, інноваційна освіта',
	openGraph: {
		title: 'Середня школа | Пізнайки',
		description:
			'Дізнайтесь більше про приватну середню школу «Пізнайки» у Вишгороді: навчальна програма, підхід до дітей, середовище для розвитку.',
		url: 'https://piznayko.info/middle-school',
		images: [
			{
				url: 'https://piznayko.info/images/logo-big.svg',
				width: 367,
				height: 164,
				alt: 'Середня школа Пізнайки у Вишгороді'
			}
		],
		type: 'article'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Середня школа | Пізнайки',
		description:
			'Приватна середня школа «Пізнайки» у Вишгороді — місце, де дитина розвивається, навчається та відчуває підтримку.',
		images: ['https://piznayko.info/images/logo-big.svg']
	}
}

export default function MiddleSchool() {
	const MiddleSchoolJsonLd = generateMiddleSchoolJsonLd()
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(MiddleSchoolJsonLd)
				}}
			/>
			<MiddleSchoolClient />
		</>
	)
}
