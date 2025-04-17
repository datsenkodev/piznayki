'use client';

import { motion as m } from 'motion/react';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Kids from '@components/kids';
import Map from '@contacts/map';

import pin from 'public/images/icons/pin.svg';
import phone from 'public/images/icons/phone-grey.svg';
import mail from 'public/images/icons/mail-grey.svg';

export default function Contacts() {
  const [selectedMarker, setSelectedMarker] = useState('1');

  const handleMarkerChange = (newKey) => {
    setSelectedMarker(newKey);
  };

  return (
    <m.main
      className='contacts-page'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <Map markerKey={selectedMarker} />
      <div className='container pointer-events-none'>
        <ul className='contacts-list'>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('1')}>
              <input
                type='radio'
                id='first_location'
                name='drone'
                value='first_location'
                defaultChecked
              />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>Дитячий садок «Пізнайки»</span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Вул. Кургузова 1А, 3 корпус, офіс 569
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('2')}>
              <input type='radio' id='second_location' name='drone' value='second_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Приватна початкова школа «Piznayki School» №1
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Вул.Симоненка, 4в (внутрішній двір)
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('3')}>
              <input type='radio' id='third_location' name='drone' value='third_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Приватна початкова школа «Piznayki School» №2
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Проспект Шевченка, 6а
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('4')}>
              <input type='radio' id='fourth_location' name='drone' value='fourth_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Репетиторський центр для 1-11 класів «Piznayki»
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Проспект Шевченка, 7а (0 поверх)
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('5')}>
              <input type='radio' id='fifth_location' name='drone' value='fifth_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>Центр підготовки до школи</span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Проспект Шевченка 2д
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('6')}>
              <input type='radio' id='sixth_location' name='drone' value='sixth_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Репетитор для учнів 1-4 класів
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Проспект Шевченка 6а
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('7')}>
              <input type='radio' id='seventh_location' name='drone' value='seventh_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Приватна середня школа, Репетиторський центр для 5-11 класів
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Вулиця Шкільна 73а
              </span>
            </label>
          </li>
          <li>
            <label className='custom-radio' tabIndex={0} onClick={() => handleMarkerChange('8')}>
              <input type='radio' id='eight_location' name='drone' value='eight_location' />
              <span className='radio'></span>
              <span className='text-[1rem] xs:text-xl font-bold'>
                Репетиторський центр для дітей з особливими освітніми потребами
              </span>
              <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                <Image src={pin} alt='Точка геолокації' />
                Проспект Шевченка 7а
              </span>
            </label>
          </li>
        </ul>
      </div>
      <section className='contacts-panel'>
        <div className='container'>
          <Link href={'tel:+380973383431'} className='contacts-panel__link'>
            <Image src={phone} alt='зателефонувати' />
            <div className='flex flex-col gap-1'>
              <span>Наш номер телефону:</span>
              <h3 className='underline-effect'>+38 097 338 34 31</h3>
            </div>
          </Link>
          <Link href={'mailto:piznayko123@gmail.com'} className='contacts-panel__link'>
            <Image src={mail} alt='написати на пошту' />
            <div className='flex flex-col gap-1'>
              <span>Наша пошта:</span>
              <h3 className='underline-effect'>piznayko123@gmail.com</h3>
            </div>
          </Link>
        </div>
      </section>
      <Kids />
    </m.main>
  );
}
