export function generateAboutJsonLd() {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'AboutPage',
		'@id': 'https://piznayko.info/about-us',
		url: 'https://piznayko.info/about-us',
		name: 'Про нас',
		description:
			'Інформація про мережу освітніх закладів «Пізнайки-Розвивайки» – сучасні освітні простори для розвитку та навчання дітей.',
		inLanguage: 'uk',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://piznayko.info/#website',
			url: 'https://piznayko.info/',
			name: 'Пізнайки',
			publisher: {
				'@id': 'https://piznayko.info/#organization'
			}
		},
		about: {
			'@id': 'https://piznayko.info/#organization'
		},
		mainEntity: {
			'@type': 'EducationalOrganization',
			'@id': 'https://piznayko.info/#organization',
			name: 'Мережа освітніх закладів «Пізнайки-Розвивайки»',
			alternateName: 'Пізнайки',
			url: 'https://piznayko.info/',
			description:
				'Мережа приватних освітніх закладів для дітей дошкільного та молодшого шкільного віку. Інтерактивне навчання, творчий розвиток і турбота про дитину.',
			logo: {
				'@type': 'ImageObject',
				url: 'https://piznayko.info/images/logo-big.svg',
				contentUrl: 'https://piznayko.info/images/logo-big.svg',
				caption: 'Логотип Пізнайки'
			},
			founder: {
				'@type': 'Person',
				name: 'Тетяна Процун',
				jobTitle: 'Засновник'
			},
			foundingDate: '2019',
			address: {
				'@type': 'PostalAddress',
				streetAddress: 'вул. Симоненка Василя, будинок 4-В, офiс 1006',
				addressLocality: 'Вишгород',
				addressRegion: 'Київська область',
				postalCode: '07301',
				addressCountry: 'UA'
			},
			contactPoint: [
				{
					'@type': 'ContactPoint',
					telephone: '+38 097 338 34 31',
					contactType: 'customer support',
					areaServed: 'UA',
					availableLanguage: ['uk', 'ru']
				}
			],
			email: 'piznayko123@gmail.com',
			sameAs: [
				'https://www.facebook.com/Piznayki',
				'https://www.instagram.com/piznayki/'
			],
			legalName: 'Мережа освітніх закладів «Пізнайки-Розвивайки»',
			educationalProgram: {
				'@type': 'EducationalOccupationalProgram',
				name: 'Ранній розвиток, підготовка до школи, англійська мова, логіка, творчість',
				educationalLevel: ['Preschool', 'Primary'],
				description:
					'Програми розвитку дітей різного віку з інтегрованим підходом до навчання та виховання.'
			}
		}
	}

	return jsonLd
}
