'use client';

import { memo } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Slider from '@components/Slider';
import Modal from '@components/modal';
import Application from '@components/applicationModal';
import Kids from '@components/kids';

import twemoji from 'twemoji';

import pin from 'public/images/icons/pin.svg';

import slider1 from 'public/images/primary/primary1.jpg';
import slider2 from 'public/images/primary/primary2.jpg';
import slider3 from 'public/images/primary/primary3.jpg';
import slider4 from 'public/images/primary/primary4.jpg';
import slider5 from 'public/images/primary/primary5.jpg';

import heroBig from 'public/images/primary/hero-big.png';
import hero1 from 'public/images/primary/hero1.png';
import hero2 from 'public/images/primary/hero2.png';
import hero3 from 'public/images/primary/hero3.png';

export default function PrimarySchool() {
  return (
    <main className='primary-school'>
      <section className='hero-page'>
        <div className='container'>
          <Image src={heroBig} alt='Декор' aria-hidden className='absolute' quality={100} />
          <Image src={hero1} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero2} alt='Декор' aria-hidden className='float' />
          <Image src={hero3} alt='Декор' aria-hidden className='float' quality={100} />
          <div className='hero-text__container'>
            <h1 className='page-heading'>Початкова школа</h1>
            <Link
              href='https://maps.app.goo.gl/ndxYNYx95x4MznDD6'
              target='_blank'
              className='page-location'>
              <Image src={pin} alt='точка на мапі' />
              <span>Вул.Симоненка,4в (внутрішній двір)</span>
            </Link>
            <Link
              href='https://maps.app.goo.gl/Earvfa3BebRj6u8e7'
              target='_blank'
              className='page-location'>
              <Image src={pin} alt='точка на мапі' />
              <span>Проспект Шевченка, 6а (вхід зі сторони проспекту)</span>
            </Link>
            <p className='page-subtitle'>Повне забезпечення дітей канцелярією та підручниками</p>
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-4'>
              <Modal trigger={<button className='accent-button'>Анкета для вступу</button>}>
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
        </Slider>
      </section>
      <section className='page-content' id='page-content'>
        <div className='container'>
          <div className='flex items-center 880:items-stretch flex-col 880:flex-row content-between gap-4 mb-14 880:mb-36'>
            <h2 className='max-w-[80%] 880:max-w-[490px] leading-[120%] text-center 880:text-left'>
              Запрошуємо до нашої <span>початкової школи</span>
            </h2>
            <div className='invite-container'>
              <p className='row-item accent-bg'>
                <Twemoji emoji='👧' />
                <span>Набір учнів 0-4 класів протягом всього навчального року</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='🎒' />
                <span>Наповнюваність класу 10-15 учнів</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='🕗' />
                <span>Графік : 08:00 до 18:30</span>
              </p>
            </div>
          </div>
          <div className='invite-container'>
            <p className='row-item accent-bg'>
              <Twemoji emoji='👧' />
              <span>В школі організовано:</span>
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
                <Twemoji emoji='🏫' />
                <span>«Офлайн» навчання</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='🍴' />
                <span>Два-чотириразове харчування (за потребою)</span>
              </p>
            </div>
            <div className='invite-container'>
              <p className='row-item'>
                <Twemoji emoji='🎉' />
                <span>Святкування дня народження та тематичні вечірки</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='🧑🏻' />
                <span>Індивідуальні консультації</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='☀️' />
                <span>На канікулах у школі працює міський оздоровчий табір</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='♟' />
                <span>Організована робота гуртків та секцій</span>
              </p>
              <p className='row-item'>
                <Twemoji emoji='💬' />
                <span>
                  Консультації логопеда, дефектолога, корекційного педагога та дитячого психолога
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Kids />
    </main>
  );
}

const Twemoji = memo(({ emoji }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: twemoji.parse(emoji, {
        base: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/',
        folder: 'svg',
        ext: '.svg',
      }),
    }}
  />
));
