import Image from 'next/image';
import Link from 'next/link';

import kidsFullScreen from 'public/images/kids.jpg';
import kids from 'public/images/hero-kids.png';
import triangle from 'public/images/icons/triangle.svg';
import puzzleYellow from 'public/images/icons/puzzle-yellow.svg';
import puzzleOrange from 'public/images/icons/puzzle-orange.svg';
import puzzlePiece from 'public/images/icons/puzzle-piece.svg';
import circle from 'public/images/icons/circle-yellow.svg';
import Modal from './modal';
import Application from './applicationModal';

export default function Kids() {
  return (
    <>
      <section className='full-image'>
        <Image
          src={kidsFullScreen}
          alt='Щасливі діти в школі'
          aria-hidden
          quality={100}
          fill
          style={{ objectPosition: '50% 40%', objectFit: 'cover' }}
        />
      </section>
      <section className='kids'>
        <div className='container'>
          <div className='message-text'>
            <Image aria-hidden src={triangle} alt='Трикутник' className='float' />
            <Image aria-hidden src={puzzleYellow} alt='Жовтий пазл' className='float' />
            <Image aria-hidden src={puzzleOrange} alt='Помаранчевий пазл' className='float' />
            <Image aria-hidden src={puzzlePiece} alt='Оранжевий шматочок пазлу' className='float' />
            <Image aria-hidden src={circle} alt='Жовте коло' className='float' />
            <Image aria-hidden src={circle} alt='Жовте коло' className='float' />

            <Image src={kids} alt='Дітки' />
            <h2 className='big-heading'>1000+ діток</h2>
            <h3>
              Вже побували у нас,<span> залишайте заявку і Ви!</span>
            </h3>
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-[0.625rem] md:gap-4 mt-12 relative z-1'>
              <Modal trigger={<button className='accent-button'>Анкета для вступу</button>}>
                <Application />
              </Modal>
              <Link href='tel:+380973383431' className='btn-outlined'>
                <span className='text-[#7f7f90] font-normal block text-[1rem]'>
                  Або телефонуйте за номером:
                </span>
                <span className='underline-effect'>+38 097 338 34 31</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
