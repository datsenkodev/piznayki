export function generatePrimarySchoolJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://piznayko.info/primary-school',
		url: 'https://piznayko.info/primary-school',
		name: 'Початкова школа «Пізнайки»',
		description:
			'Приватна початкова школа у Вишгороді: малі класи, індивідуальний підхід, сучасні методики навчання. Підтримка, розвиток і турбота для кожної дитини.',
		inLanguage: 'uk',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://piznayko.info/#website'
		},
		mainEntity: {
			'@type': 'ElementarySchool',
			'@id': 'https://piznayko.info/#primary-school',
			name: 'Початкова школа «Пізнайки»',
			alternateName: 'Приватна школа Пізнайки',
			url: 'https://piznayko.info/primary-school',
			description:
				'Навчання у міні-класах (до 10 дітей), повний день, домашня атмосфера, інтегровані предмети, англійська, логіка, творчість та емоційний розвиток.',
			address: [
				{
					'@type': 'PostalAddress',
					streetAddress: 'Вул.Симоненка, 4в (внутрішній двір)',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.58177980001313,
						longitude: 30.483049682555844
					}
				},
				{
					'@type': 'PostalAddress',
					streetAddress: 'Проспект Шевченка 6а',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.58086491651105,
						longitude: 30.490707567044723
					}
				}
			],
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
				name: 'Індивідуалізоване навчання 1–4 клас',
				description:
					'Програма навчання початкової школи з розширеними курсами розвитку, STEM-напрямом, англійською, творчістю та інтегрованими предметами.',
				educationalLevel: ['Primary']
			},
			foundingDate: '2020',
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
