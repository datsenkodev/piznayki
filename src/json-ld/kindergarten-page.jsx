export function generateKindergartenJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://piznayko.info/kindergarten',
		url: 'https://piznayko.info/kindergarten',
		name: 'Дитячий садочок «Пізнайки»',
		description:
			'Приватний дитячий садочок у Вишгороді від мережі освітніх закладів «Пізнайки-Розвивайки». Турбота, розвиток і навчання в ігровій формі для дітей від 2 до 6 років.',
		inLanguage: 'uk',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://piznayko.info/#website',
			url: 'https://piznayko.info/',
			name: 'Пізнайки'
		},
		mainEntity: {
			'@type': 'Preschool',
			'@id': 'https://piznayko.info/#kindergarten',
			name: 'Дитячий садочок «Пізнайки»',
			alternateName: 'Пізнайки садок',
			url: 'https://piznayko.info/kindergarten',
			description:
				'Приватний садочок для дітей від 2 до 6 років у Вишгороді. Граючись — навчаємось!',
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
				name: 'Програма розвитку для дітей 2–6 років',
				description:
					'Інтегровані заняття з мовлення, логіки, творчості, англійської, музики та моторики. Комфортна адаптація, ігрове середовище, турбота та розвиток.',
				educationalLevel: ['Preschool']
			},
			foundingDate: '2019',
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
