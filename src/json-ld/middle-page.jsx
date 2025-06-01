export function generateMiddleSchoolJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://piznayko.info/middle-school',
		url: 'https://piznayko.info/middle-school',
		name: 'Середня школа «Пізнайки»',
		description:
			'Приватна середня школа у Вишгороді з поглибленим вивченням предметів, сучасними підходами до навчання та менторською підтримкою учнів.',
		inLanguage: 'uk',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://piznayko.info/#website'
		},
		mainEntity: {
			'@type': 'MiddleSchool',
			'@id': 'https://piznayko.info/#middle-school',
			name: 'Середня школа «Пізнайки»',
			alternateName: 'Приватна школа Пізнайки (середні класи)',
			url: 'https://piznayko.info/middle-school',
			description:
				'Середня школа з поглибленим навчанням, менторською підтримкою, невеликими класами та індивідуальним підходом. 5–9 класи.',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'Вул. Кургузова 1А, 3 корпус',
				addressLocality: 'Вишгород',
				addressRegion: 'Київська область',
				postalCode: '07301',
				addressCountry: 'UA'
			},
			telephone: '+38 097 338 34 31',
			email: 'piznayko123@gmail.com',
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+38 097 338 34 31',
				contactType: 'customer support',
				areaServed: 'UA',
				availableLanguage: ['uk', 'ru']
			},
			educationalProgram: {
				'@type': 'EducationalOccupationalProgram',
				name: 'Програма середньої школи (5–9 класи)',
				description:
					'Розширене навчання з математики, мови, природничих наук, творчості, критичного мислення, англійської. Формування академічної самостійності учнів.',
				educationalLevel: ['MiddleSchool']
			},
			foundingDate: '2023',
			parentOrganization: {
				'@type': 'EducationalOrganization',
				'@id': 'https://piznayko.info/#organization',
				name: 'Мережа освітніх закладів «Пізнайки-Розвивайки»'
			},
			sameAs: [
				'https://www.facebook.com/Piznayki',
				'https://www.instagram.com/piznayki/'
			]
		}
	}
}
