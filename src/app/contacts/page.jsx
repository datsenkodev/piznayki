import { ContactsClient } from './ContactsClient'
import { generateContactJsonLd } from '@json-ld/contact-page'

export const metadata = {
	title: 'Контакти | Пізнайки',
	description:
		'Контактна інформація мережі освітніх закладів «Пізнайки» у Вишгороді: адреси, телефони, email, карта та графік роботи.',
	keywords:
		'Пізнайки, контакти, зв’язок, адреса, телефон, email, Вишгород, освітні заклади, школа, садок',
	openGraph: {
		title: 'Контакти | Пізнайки',
		description:
			'Зв’яжіться з мережею освітніх закладів «Пізнайки» у Вишгороді: телефони, адреси, карта і години роботи.',
		url: 'https://piznayko.info/contacts',
		images: [
			{
				url: 'https://piznayko.info/images/logo-big.svg',
				width: 367,
				height: 164,
				alt: 'Контактна інформація мережі освітніх закладів Пізнайки'
			}
		],
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Контакти | Пізнайки',
		description:
			'Контактна інформація мережі освітніх закладів «Пізнайки» у Вишгороді: телефони, адреси, email та карта.',
		images: ['https://piznayko.info/images/logo-big.svg']
	}
}

export default function Contacts() {
	const contactJsonLd = generateContactJsonLd()

	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
			/>
			<ContactsClient />
		</>
	)
}
