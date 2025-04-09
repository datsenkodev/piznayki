'use client';

import { useState, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Kids from '@components/kids';

import pin from 'public/images/icons/pin.svg';

export default function Contacts() {
  return (
    <main>
      <section className='map'>
        map
        <div className='container'>
          <ul className='bg-white p-7 md:px-10 md:py-11'>
            <li>
              <label>
                <input
                  type='radio'
                  id='first_location'
                  name='drone'
                  value='first_location'
                  checked
                />
                <span className='text-[1rem] xs:text-xl font-bold'>Дитячий садок «Пізнайки»n</span>
                <span className='flex gap-1 text-xs md:text-[1rem] text-[#646464]'>
                  <Image src={pin} />
                  Вул. Кургузова 1А, 3 корпус, офіс 569
                </span>
              </label>
            </li>
          </ul>
        </div>
      </section>
      <Kids />
    </main>
  );
}
