export function generateContactJsonLd() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'ContactPage',
		'@id': `https://piznayko.info/contacts`,
		url: `https://piznayko.info/contacts`,
		name: "Зв'язатися з нами",
		description: "Зв'яжіться з нами, щоб отримати актуальну інформацію",
		inLanguage: 'uk',
		isPartOf: {
			'@id': `https://piznayko.info/#website`
		},
		about: {
			'@id': `https://piznayko.info/#organization`
		},
		mainEntity: {
			'@type': 'Organization',
			'@id': `https://piznayko.info/#organization`,
			name: "Зв'язатися з нами",
			description: "Зв'яжіться з нами, щоб отримати актуальну інформацію",
			url: 'https://piznayko.info/',
			logo: `https://piznayko.info/images/logo-big.svg`,
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
				contactType: "Контакт для зв'язку",
				areaServed: 'Ukraine',
				availableLanguage: ['Russian', 'Ukrainian']
			},
			email: 'piznayko123@gmail.com',
			legalName: 'Мережа освітніх закладів «Пізнайки-Розвивайки»'
		}
	}

	return jsonLd
}
