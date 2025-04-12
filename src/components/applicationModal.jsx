'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { sendEmail } from 'lib/resend';

import application from 'public/images/application.png';

export default function Application() {
  const [selected, setSelected] = useState('Дитячий садок');

  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [additional, setAdditional] = useState('');

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleChangePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleChangeAdditional = (e) => {
    setAdditional(e.target.value);
  };

  const handleSelect = (item) => {
    setSelected(item);
  };

  function send() {
    sendEmail({ userName, phoneNumber, additional });
  }

  return (
    <div className='flex gap-13'>
      <div className='rounded-lg overflow-hidden'>
        <Image src={application} alt='Щасливі діти на траві' />
      </div>
      <div>
        <h3 className='border-b border-gray-300 pb-8 mb-8 text-[2rem]'>
          <span>Заявка на навчання дитини</span>
        </h3>
        <p className='mb-2'>Що вас цікавить?</p>
        <ul className='flex gap-1 p-1 bg-[#eee] rounded-md text-center '>
          {['Дитячий садок', 'Початкова школа', 'Середня школа', 'Репетиторський центр'].map(
            (item) => (
              <li
                key={item}
                className={`application-select ${selected === item ? 'selected' : ''}`}
                onClick={() => handleSelect(item)}>
                {item.split(' ').map((word, index) => (
                  <span key={index}>
                    {word}
                    <br />
                  </span>
                ))}
              </li>
            ),
          )}
        </ul>
        <p className='mb-2 mt-8 pt-8 border-t border-gray-300'>
          Залиште свої контакти — ми вам зателефонуємо!
        </p>
        <form action={send}>
          <div className='flex gap-1 mb-1'>
            <div className='relative h-[3.5rem] flex-1/2'>
              <input
                type='text'
                id='name'
                className='form-input'
                placeholder=' '
                value={userName}
                onChange={handleChangeUserName}
              />
              <label htmlFor='name' className='form-label'>
                Ваше ім’я
              </label>
            </div>
            <div className='relative h-[3.5rem] flex-1/2'>
              <input
                type='text'
                id='tel'
                className='form-input'
                placeholder=' '
                value={phoneNumber}
                onChange={handleChangePhoneNumber}
              />
              <label htmlFor='name' className='form-label'>
                Номер телефону
              </label>
            </div>
          </div>
          <div className='relative min-h-[3.5rem] flex-1/2'>
            <input
              type='text'
              id='name'
              className='form-input'
              placeholder=' '
              value={additional}
              onChange={handleChangeAdditional}
            />
            <label htmlFor='name' className='form-label'>
              Є додаткове питання? Напишіть його нам!
            </label>
          </div>
          <div className='flex gap-2 mt-8 pt-8 border-t border-gray-300'>
            <button className='accent-button' type='submit'>
              Відправити заявку
            </button>

            <Link href={'/contacts'} className='btn-outlined'>
              <span className='underline-effect text-[1.125rem] font-medium'>Наші контакти</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
