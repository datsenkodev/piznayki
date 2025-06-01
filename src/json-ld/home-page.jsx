export function generateHomeJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': 'https://piznayko.info/#website',
		url: 'https://piznayko.info/',
		name: 'Пізнайки',
		description:
			'Мережа освітніх закладів для дітей: дитячий садок, підготовка до школи, гуртки та розвиваючі програми у Вишгороді.',
		inLanguage: 'uk',
		publisher: {
			'@id': 'https://piznayko.info/#organization'
		},
		potentialAction: {
			'@type': 'SearchAction',
			target: 'https://piznayko.info/search?q={search_term_string}',
			'query-input': 'required name=search_term_string'
		},
		mainEntity: {
			'@type': 'EducationalOrganization',
			'@id': 'https://piznayko.info/#organization',
			name: 'Мережа освітніх закладів «Пізнайки-Розвивайки»',
			legalName: 'Мережа освітніх закладів «Пізнайки-Розвивайки»',
			url: 'https://piznayko.info/',
			logo: {
				'@type': 'ImageObject',
				url: 'https://piznayko.info/images/logo-big.svg'
			},
			description:
				'Дитячий садочок, програми підготовки до школи, англійська мова, логіка, гуртки та розвиток дітей у Вишгороді.',
			address: [
				{
					'@type': 'PostalAddress',
					streetAddress: 'Вул. Кургузова 1А, 3 корпус, офіс 569',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.583848,
						longitude: 30.474535
					}
				},
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
					streetAddress: 'Проспект Шевченка, 6а',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.58086491651105,
						longitude: 30.490707567044723
					}
				},
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
					streetAddress: 'Проспект Шевченка 2д',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.581024012433616,
						longitude: 30.48932290892126
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
				},
				{
					'@type': 'PostalAddress',
					streetAddress: 'Вулиця Шкільна 73а',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.58291163246434,
						longitude: 30.48712822665436
					}
				},
				{
					'@type': 'PostalAddress',
					streetAddress: 'Проспект Шевченка 7а',
					addressLocality: 'Місто Вишгород',
					addressRegion: 'Київська область',
					addressCountry: 'Україна',
					geo: {
						'@type': 'GeoCoordinates',
						latitude: 50.582112768494895,
						longitude: 30.489649756091083
					}
				}
			],
			contactPoint: {
				'@type': 'ContactPoint',
				telephone: '+38 097 338 34 31',
				contactType: 'customer support',
				areaServed: 'UA',
				availableLanguage: ['uk', 'ru']
			},
			email: 'piznayko123@gmail.com',
			sameAs: [
				'https://www.facebook.com/Piznayki',
				'https://www.instagram.com/piznayki/'
			]
		}
	}
}
