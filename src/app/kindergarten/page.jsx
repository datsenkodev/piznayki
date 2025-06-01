import { KindergartenClient } from './KindergartenClient'
import { generateKindergartenJsonLd } from '@json-ld/kindergarten-page'

export const metadata = {
	title: 'Дитячий садок | Пізнайки',
	description:
		'Дитячий садок мережі освітніх закладів «Пізнайки» у Вишгороді — комфортне, безпечне та розвивальне середовище для дошкільнят.',
	keywords:
		'садок, дошкільнята, розвиток, Вишгород, Пізнайки, освіта, дитячий садок, навчання, комфорт',
	openGraph: {
		url: 'https://piznayko.info/kindergarten',
		title: 'Дитячий садок | Пізнайки',
		description:
			'Дитячий садок мережі освітніх закладів «Пізнайки» у Вишгороді — комфортне, безпечне та розвивальне середовище для дошкільнят.',
		type: 'website',
		images: [
			{
				url: 'https://piznayko.info/images/logo-big.svg',
				width: 367,
				height: 164,
				alt: 'Дитячий садок - мережа освітніх закладів Пізнайки'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Дитячий садок | Пізнайки',
		description:
			'Дитячий садок мережі освітніх закладів «Пізнайки» у Вишгороді — комфортне, безпечне та розвивальне середовище для дошкільнят.'
	}
}

export default function Kindergarten() {
	const KindergartenJsonLd = generateKindergartenJsonLd()
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(KindergartenJsonLd)
				}}
			/>
			<KindergartenClient />
		</>
	)
}
