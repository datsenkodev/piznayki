'use client'

import { motion as m } from 'motion/react'

import { memo } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Slider from '@components/Slider'
import { Modal } from '@components/modal'
import Application from '@components/applicationModal'
import Faq from '@pages/school/faq'
import Kids from '@components/kids'

import twemoji from 'twemoji'

import pin from 'public/images/icons/pin.svg'

import heroBig from 'public/images/middle/hero-big.png'
import hero1 from 'public/images/middle/hero1.png'
import hero2 from 'public/images/middle/hero2.png'
import hero3 from 'public/images/middle/hero3.png'
import hero4 from 'public/images/middle/hero4.png'

import slider1 from 'public/images/middle/middle1.jpg'
import slider2 from 'public/images/middle/middle2.jpg'
import slider3 from 'public/images/middle/middle3.jpg'
import slider4 from 'public/images/middle/middle4.jpg'
import slider5 from 'public/images/middle/middle5.jpg'
import slider6 from 'public/images/middle/middle6.jpg'

export default function MiddleSchoolClient() {
	return (
		<m.main
			className='middle-school'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			<section className='hero-page'>
				<div className='container'>
					<Image
						src={heroBig}
						alt='Декор'
						aria-hidden
						className='absolute'
						quality={100}
					/>
					<Image
						src={hero1}
						alt='Декор'
						aria-hidden
						className='float'
						quality={100}
					/>
					<Image src={hero2} alt='Декор' aria-hidden className='float' />
					<Image
						src={hero3}
						alt='Декор'
						aria-hidden
						className='float'
						quality={100}
					/>
					<Image
						src={hero4}
						alt='Декор'
						aria-hidden
						className='float'
						quality={100}
					/>
					<div className='hero-text__container'>
						<h1 className='page-heading'>Середня школа</h1>
						<Link
							href='https://maps.app.goo.gl/ru5vmDAGDppx9g918'
							target='_blank'
							className='page-location'
						>
							<Image src={pin} alt='точка на мапі' />
							<span>Вул. Шкільна 73а</span>
						</Link>
						<p className='page-subtitle'>
							Здобуття освіти разом з нами - мрія кожного!
						</p>
						<div className='flex flex-col md:flex-row items-center md:items-stretch gap-4'>
							<Modal
								trigger={
									<button className='accent-button'>Анкета для вступу</button>
								}
							>
								<Application />
							</Modal>
							<Link className='page-anchor' href={'#page-content'}>
								Детальніше про школу
							</Link>
						</div>
					</div>
				</div>
				<Slider>
					<div className='slider__item'>
						<Image src={slider1} alt='Щасливі діти' />
					</div>
					<div className='slider__item'>
						<Image src={slider2} alt='Щасливі діти' />
					</div>
					<div className='slider__item'>
						<Image src={slider3} alt='Щасливі діти' />
					</div>
					<div className='slider__item'>
						<Image src={slider4} alt='Щасливі діти' />
					</div>
					<div className='slider__item'>
						<Image src={slider5} alt='Щасливі діти' />
					</div>
					<div className='slider__item'>
						<Image src={slider6} alt='Щасливі діти' />
					</div>
				</Slider>
			</section>
			<section className='page-content' id='page-content'>
				<div className='container'>
					<div className='flex items-center 880:items-stretch flex-col 880:flex-row content-between gap-4 mb-14 880:mb-36'>
						<h2 className='max-w-[80%] 880:max-w-[490px] leading-[120%] text-center 880:text-left'>
							Запрошуємо до нашої <span>середньої школи</span>
						</h2>
						<div className='invite-container'>
							<p className='row-item accent-bg'>
								<Twemoji emoji='👧' />
								<span>
									Набір учнів у 5-6 класів протягом всього навчального року
								</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🎒' />
								<span>У класі до 10 дітей</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🕗' />
								<span>Графік : 08:00 до 18:00</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='📖' />
								<span>Гурткова робота</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🍴' />
								<span>Дворазове харчування</span>
							</p>
						</div>
					</div>
					<div className='invite-container'>
						<p className='row-item accent-bg'>
							<Twemoji emoji='👧' />
							<span>Організація навчально-виховної діяльності:</span>
						</p>
					</div>
					<div className='flex gap-4 mt-4 flex-col md:flex-row'>
						<div className='invite-container'>
							<p className='row-item'>
								<Twemoji emoji='🎒' />
								<span>Працюємо за програмою НУШ</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🇺🇸' />
								<span>Щодня англійська мова</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='✍🏻' />
								<span>Без домашніх завдань</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🎉' />
								<span>Святкування дня народження та тематичні вечірки</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🤩' />
								<span>
									Індивідульний підхід до кожного учня з урахуванням його
									здібностей і таланту
								</span>
							</p>
						</div>
						<div className='invite-container'>
							<p className='row-item'>
								<Twemoji emoji='📄' />
								<span>Документи про освіту державного зразку</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='💻' />
								<span>Поглиблене вивчення англійської мови та інформатики</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🏫' />
								<span>«Офлайн» навчання</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🧑🏻‍🏫‍' />
								<span>Куратор поруч з учнем протягом усього робочого дня</span>
							</p>
							<p className='row-item'>
								<Twemoji emoji='🔎' />
								<span>
									Регулярний контроль знань, поточний та семестровий контроль
									успішності
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
			<Faq />
			<Kids />
		</m.main>
	)
}

const Twemoji = memo(({ emoji }) => (
	<span
		dangerouslySetInnerHTML={{
			__html: twemoji.parse(emoji, {
				base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
				folder: 'svg',
				ext: '.svg'
			})
		}}
	/>
))
