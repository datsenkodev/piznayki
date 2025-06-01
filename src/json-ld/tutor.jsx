export function generateTutorCenterJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		'@id': 'https://piznayko.info/tutor-center',
		url: 'https://piznayko.info/tutor-center',
		name: 'Центр менторства та репетиторства «Пізнайки»',
		description:
			'Менторська підтримка, індивідуальні заняття, допомога з домашніми завданнями та поглиблене вивчення предметів у центрі «Пізнайки» у Вишгороді.',
		inLanguage: 'uk',
		isPartOf: {
			'@type': 'WebSite',
			'@id': 'https://piznayko.info/#website'
		},
		primaryImageOfPage: {
			'@type': 'ImageObject',
			url: 'https://piznayko.info/images/tutor/hero-big.png',
			caption: 'Центр менторства та репетиторства у Вишгороді'
		},
		mainEntity: {
			'@type': 'EducationalOrganization',
			'@id': 'https://piznayko.info/#tutor-center',
			name: 'Центр менторства «Пізнайки»',
			alternateName: 'Репетиторський центр Пізнайки',
			url: 'https://piznayko.info/tutor-center',
			description:
				'Центр індивідуального навчання: репетиторство з математики, української, англійської, логіки, а також допомога з підготовкою до школи й підтримка в навчанні.',
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
			educationalProgram: [
				{
					'@type': 'EducationalOccupationalProgram',
					name: 'Репетиторство та менторинг для школярів',
					description:
						'Персональні заняття для підвищення успішності, заповнення прогалин у знаннях та розвитку навичок самоосвіти.',
					educationalLevel: ['Primary', 'MiddleSchool']
				},
				{
					'@type': 'EducationalOccupationalProgram',
					name: 'Підготовка до школи',
					description:
						'Заняття для дошкільнят: розвиток мовлення, математики, логіки, моторики, уваги.',
					educationalLevel: ['Preschool']
				}
			],
			foundingDate: '2021',
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
