import { MiddleSchoolClient } from './MiddleSchoolClient'
import { generatePrimarySchoolJsonLd } from '@json-ld/primary-page'

export const metadata = {
	title: 'Початкова школа | Пізнайки',
	description:
		'Приватна початкова школа «Пізнайки» у Вишгороді: турботливі вчителі, інтерактивне навчання та комфортне середовище для розвитку дитини.',
	keywords:
		'Пізнайки, початкова школа, приватна школа, освіта, навчання, Вишгород, молодші класи, сучасна освіта, 1-4 клас',
	openGraph: {
		title: 'Початкова школа | Пізнайки',
		description:
			'Дізнайтесь більше про початкову школу «Пізнайки» у Вишгороді: навчальний процес, підхід до дітей, розвивальне середовище.',
		url: 'https://piznayko.info/primary-school',
		images: [
			{
				url: 'https://piznayko.info/images/logo-big.svg',
				width: 367,
				height: 164,
				alt: 'Початкова школа Пізнайки у Вишгороді'
			}
		],
		type: 'article'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Початкова школа | Пізнайки',
		description:
			'Приватна початкова школа «Пізнайки» у Вишгороді — місце, де дітям цікаво вчитися і зручно рости.',
		images: ['https://piznayko.info/images/logo-big.svg']
	}
}

export default function PrimarySchool() {
	const primarySchoolJsonLd = generatePrimarySchoolJsonLd()
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(primarySchoolJsonLd)
				}}
			/>
			<MiddleSchoolClient />
		</>
	)
}
