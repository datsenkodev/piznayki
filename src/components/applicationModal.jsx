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

  const [toast, setToast] = useState({ message: '', type: '', visible: false });

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

  const showToast = (message, type) => {
    setToast({ message, type, visible: true });
    setTimeout(() => {
      setToast({ message: '', type: '', visible: false });
    }, 3000);
  };

  const validateInputs = () => {
    if (!userName.trim()) {
      showToast('Ім’я не може бути порожнім!', 'error');
      return false;
    }
    if (!phoneNumber.trim()) {
      showToast('Номер телефону не може бути порожнім!', 'error');
      return false;
    }
    if (!/^\+?\d+$/.test(phoneNumber)) {
      showToast('Номер телефону має містити лише цифри або "+"!', 'error');
      return false;
    }
    return true;
  };

  async function send(e) {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      await sendEmail({ modalType: 'Анкета', selected, userName, phoneNumber, additional });
      showToast('Заявка успішно відправлена!', 'success');
      setUserName('');
      setPhoneNumber('');
      setAdditional('');
    } catch (error) {
      console.error('Error sending email:', error);
      showToast('Не вдалося відправити заявку. Спробуйте ще раз.', 'error');
    }
  }
  return (
    <div className='flex gap-13'>
      {toast.visible && <div className={`toast ${toast.type}`}>{toast.message}</div>}
      <div className='rounded-lg overflow-hidden hidden md:block'>
        <Image
          src={application}
          alt='Щасливі діти на траві'
          style={{ height: '100%', objectFit: 'cover' }}
          quality={100}
        />
      </div>
      <div className='max-w-full'>
        <h3 className='border-b border-gray-300 mb-4 sm:mb-8 pb-4 sm:pb-8 text-[clamp(1.5rem,_1.3333rem_+_0.7407vw,_2rem)]'>
          <span>Заявка на навчання дитини</span>
        </h3>
        <p className='mb-2'>Що вас цікавить?</p>
        <ul className='flex flex-wrap justify-center gap-1 p-1 bg-[#eee] rounded-md text-center'>
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
        <p className='mb-2 mt-4 sm:mt-8 pt-4 sm:pt-8  border-t border-gray-300'>
          Залиште свої контакти - ми вам зателефонуємо!
        </p>
        <form onSubmit={send}>
          <div className='flex gap-1 mb-1 flex-col xs:flex-row '>
            <div className='relative h-[3.5rem] xs:flex-1/2'>
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
            <div className='relative h-[3.5rem] xs:flex-1/2'>
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
          <div className='relative h-[4.5rem]  xs:h-[3.5rem]'>
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
          <div className='flex flex-wrap justify-center 880:justify-start items-center gap-2 mt-4 sm:mt-8 pt-4 sm:pt-8 border-t border-gray-300'>
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
