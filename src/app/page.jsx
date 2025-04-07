'use client';

import { useEffect, useRef } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import hero from 'public/images/hero.png';
import kids from 'public/images/hero-kids.png';
import hero1 from 'public/images/icons/hero1.png';
import hero2 from 'public/images/icons/hero2.png';
import hero3 from 'public/images/icons/hero3.png';
import hero4 from 'public/images/icons/hero4.png';

import arrowRight from 'public/images/icons/arrow-right.svg';

import triangle from 'public/images/icons/triangle.svg';
import puzzleYellow from 'public/images/icons/puzzle-yellow.svg';
import puzzleOrange from 'public/images/icons/puzzle-orange.svg';
import puzzlePiece from 'public/images/icons/puzzle-piece.svg';
import circle from 'public/images/icons/circle-yellow.svg';

import messageImage1 from 'public/images/message1.png';
import messageImage2 from 'public/images/message2.png';
import messageImage3 from 'public/images/message3.png';
import messageImage4 from 'public/images/message4.png';
import messageImage5 from 'public/images/message5.png';

import slider1 from 'public/images/tutor/tutor5.jpg';
import slider2 from 'public/images/tutor/tutor9.jpg';
import slider3 from 'public/images/primary/primary6.jpg';
import slider4 from 'public/images/kinder/kindergarten8.jpg';
import slider5 from 'public/images/tutor/tutor4.jpg';
import slider6 from 'public/images/kinder/kindergarten1.jpg';
import slider7 from 'public/images/kinder/kindergarten2.jpg';
import slider8 from 'public/images/tutor/tutor13.jpg';

import aboutDecor from 'public/images/about-decor.svg';

import puzzleTurqoise from 'public/images/icons/puzzle-turqoise.svg';

import advantageImage1 from 'public/images/icons/advantage1.svg';
import advantageImage2 from 'public/images/icons/advantage2.svg';
import advantageImage3 from 'public/images/icons/advantage3.svg';
import advantageImage4 from 'public/images/icons/advantage4.svg';
import advantageImage5 from 'public/images/icons/advantage5.svg';

import waves from 'public/images/waves.svg';

export default function Home() {
  const sliderRef = useRef(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    isDragging = false;
    sliderRef.current.style.cursor = 'grab';
  };

  useEffect(() => {
    const section = document.querySelector('.message');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className='hero'>
        <div className='container'>
          <h1 className='max-w-[450px] text-center md:text-left'>
            Разом створюємо <span>майбутнє для наших дітей</span>
          </h1>

          <div className='flex items-center flex-col gap-4 my-8 xs:flex-row md:mt-13 md:mb-26 relative z-1'>
            <p className='p-4 bg-[#f2f2ff] rounded-3xl'>
              <span className='font-semibold'>Більше 1000 діток</span> <br /> вже побували в нас
            </p>
            <Image src={kids} alt='Наші учні' height={80} />
          </div>

          <div className='hero-image'>
            <Image src={hero} alt='Наші учні' width={850} priority />
            <Image aria-hidden src={triangle} alt='Трикутник' className='float' />
            <Image aria-hidden src={puzzleYellow} alt='Жовтий пазл' className='float' />
            <Image aria-hidden src={puzzleOrange} alt='Помаранчевий пазл' className='float' />
          </div>

          <div className='max-w-[60rem] self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 z-1 relative'>
            <Link
              href={'/'}
              className='flex items-center gap-4 py-6 px-5 bg-[var(--accentOrangeColor)] rounded-3xl duration-300 hover:shadow-[1px_1px_10px_var(--accentOrangeColor)] '>
              <div className='hero-icon'>
                <Image src={hero1} alt='Дитячий садок' />
              </div>

              <h2 className='font-bold text-xl text-white'>
                Дитячий <br />
                садок
              </h2>

              <div className='w-10 h-10 ml-auto'>
                <Image src={arrowRight} alt='Стрілка' />
              </div>
            </Link>
            <Link
              href={'/'}
              className='flex items-center gap-4 py-6 px-5 bg-[var(--accentTurquoiseColor)] rounded-3xl duration-300 hover:shadow-[1px_1px_10px_var(--accentTurquoiseColor)] '>
              <div className='hero-icon'>
                <Image src={hero2} alt='Середня школа' />
              </div>

              <h2 className='font-bold text-xl text-white'>
                Середня <br /> школа
              </h2>

              <div className='w-10 h-10 ml-auto'>
                <Image src={arrowRight} alt='Стрілка' />
              </div>
            </Link>
            <Link
              href={'/'}
              className='flex items-center gap-4 py-6 px-5 bg-[var(--accentYellowColor)] rounded-3xl duration-300 hover:shadow-[1px_1px_10px_var(--accentYellowColor)] '>
              <div className='hero-icon'>
                <Image src={hero3} alt='Початкова школа' />
              </div>

              <h2 className='font-bold text-xl text-white'>
                Початкова <br />
                школа
              </h2>

              <div className='w-10 h-10 ml-auto'>
                <Image src={arrowRight} alt='Стрілка' />
              </div>
            </Link>
            <Link
              href={'/'}
              className='flex items-center gap-4 py-6 px-5 bg-[var(--accentPurpleColor)] rounded-3xl  duration-300  hover:shadow-[1px_1px_10px_var(--accentPurpleColor)] '>
              <div className='hero-icon'>
                <Image src={hero4} alt='Репетиторський центр' />
              </div>

              <h2 className='font-bold text-xl text-white break-all'>
                Репетиторський <br />
                центр
              </h2>

              <div className='w-10 h-10 ml-auto'>
                <Image src={arrowRight} alt='Стрілка' />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='message'>
        <div className='container'>
          <div className='message-images'>
            <Image src={messageImage1} alt='Зображення дитини' className='message-image' />
            <Image src={messageImage2} alt='Зображення дитини' className='message-image' />
            <Image src={messageImage3} alt='Зображення дитини' className='message-image' />
            <Image src={messageImage4} alt='Зображення дитини' className='message-image' />
            <Image src={messageImage5} alt='Зображення дитини' className='message-image' />
          </div>
          <div className='message-text'>
            <Image aria-hidden src={triangle} alt='Трикутник' className='float' />
            <Image aria-hidden src={puzzleYellow} alt='Жовтий пазл' className='float' />
            <Image aria-hidden src={puzzleOrange} alt='Помаранчевий пазл' className='float' />
            <Image aria-hidden src={puzzlePiece} alt='Оранжевий шматочок пазлу' className='float' />
            <Image aria-hidden src={circle} alt='Жовте коло' className='float' />
            <h3>
              Любов не через <span>долю гаманця,</span> а через частинку маленького
            </h3>
            <h2 className='big-heading'>Сердечка</h2>
          </div>
        </div>
      </section>
      <section className='about'>
        <div className='container'>
          <div className='flex justify-between gap-4 flex-wrap'>
            <p className='text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white leading-[0.88]'>
              Давайте <span className='font-bold block'>знайомитись</span>
            </p>
            <p className='max-w-115 text-[var(--whiteLightColor)] font-bold text-xl xs:text-2xl'>
              Сьогодні «Пізнайки» – це велика сім’я, де навчається біля двох сотень дітей та працює
              28 працівників.
            </p>
          </div>
        </div>
        <div className='container__wider'>
          <div
            className='slider'
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>
            <div className='slider__container'>
              <div className='slider__item'>
                <Image src={slider1} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider2} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider3} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider4} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider5} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider6} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider7} alt='Щасливі діти' className='' />
              </div>
              <div className='slider__item'>
                <Image src={slider8} alt='Щасливі діти' className='' />
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <Image
            src={aboutDecor}
            alt='Декор'
            aria-hidden
            className='float top-10 right-10 z-0 scale-40 md:scale-100'
          />
          <div className='flex flex-col gap-7 max-w-[515px] mt-12 relative z-1'>
            <h3 className='text-[2rem] text-white font-bold xs:text-[1.75rem]'>
              До складу мережі закладів “Пізнайки” входить:
            </h3>
            <ul className='check-list'>
              <li>Сучасний ліцензований дитячий садок</li>
              <li>Початкова школа</li>
              <li>Середня школа для учнів 5-11 класів</li>
              <li>
                Освітній позашкільний заклад
                <span>
                  (гуртки та студії, колективні заняття та індивідуальні консультації сімейного та
                  дитячого психолога, логопеда, дефектолога, корекційного педагога, тощо)
                </span>
              </li>
              <li>Репетиторський центр для учнів 0-11 класів</li>
            </ul>
          </div>

          <div className='advantages'>
            <div className='relative flex gap-20'>
              <div className='advantages__decor'>
                <Image
                  src={puzzleTurqoise}
                  alt='Декор'
                  aria-hidden
                  className='float top-[50%] left-8'
                />
                <Image
                  src={puzzleYellow}
                  alt='Декор'
                  aria-hidden
                  className='float rotate-180 right-[-10%]'
                />
              </div>
              <p className='text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white leading-[0.88] max-w-[670px]'>
                У нас <span className='font-bold'>багато переваг</span>
              </p>
            </div>
            <div className='advantages-lists'>
              <ul className='flex flex-row gap-[6px] flex-wrap justify-center md:gap-[0.75rem]'>
                <li className='text-center bg-[#f2f2ff] flex-[1_0_30%] p-3 rounded-3xl flex flex-col items-center gap-2  md:py-5 md:px-4'>
                  <span className='text-[clamp(1.75rem,_1.1234rem_+_2.7848vw,_3.125rem)] text-[var(--accentColor)] font-bold'>
                    6
                  </span>
                  <span>Років працюємо у м. Вишгород</span>
                </li>
                <li className='text-center bg-[#f2f2ff] flex-[1_0_30%] p-3 rounded-3xl flex flex-col items-center gap-2  md:py-5 md:px-4'>
                  <span className='text-[clamp(1.75rem,_1.1234rem_+_2.7848vw,_3.125rem)] text-[var(--accentColor)] font-bold'>
                    1000+
                  </span>
                  <span>Дітей навчалися у нас на різних напрямках</span>
                </li>
                <li className='text-center bg-[#f2f2ff] flex-[1_0_30%] p-3 rounded-3xl flex flex-col items-center gap-2  md:py-5 md:px-4'>
                  <span className='text-[clamp(1.75rem,_1.1234rem_+_2.7848vw,_3.125rem)] text-[var(--accentColor)] font-bold'>
                    30+
                  </span>
                  <span>Працівників у штаті</span>
                </li>
              </ul>
              <ul className='flex flex-wrap gap-8 advantages-list justify-start md:max-lg:justify-center'>
                <li>
                  <p>
                    <Image src={advantageImage1} alt='Безпечне середовище' />
                  </p>
                  <h3>Безпечне середовище</h3>
                  <span>Обладнане укриття, закрита територія, фізична та психологічна безпека</span>
                </li>
                <li>
                  <p>
                    <Image src={advantageImage2} alt='Енергетична автономність' />
                  </p>
                  <h3>Енергетична автономність</h3>
                  <span>
                    Незалежна система опалення, електричні генератори, резервне освітлення
                  </span>
                </li>
                <li>
                  <p>
                    <Image src={advantageImage3} alt='Корисне харчування' />
                  </p>
                  <h3>Корисне харчування</h3>
                  <span>Збалансоване меню, затверджене дієтологом, звичайне та вегетаріанське</span>
                </li>
                <li>
                  <p>
                    <Image src={advantageImage4} alt='Продуктивне навчання' />
                  </p>
                  <h3>Продуктивне навчання</h3>
                  <span>STEAME-проєкти, інтегровані курси, case-study, виїзні практикуми</span>
                </li>
                <li>
                  <p>
                    <Image src={advantageImage5} alt='Розвиток креативності' />
                  </p>
                  <h3>Розвиток креативності</h3>
                  <span>
                    Студії за вибором, квести, концерти, міжнародні конкурси, шкільний театр
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className='mt-36'>
            <p className='relative text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white leading-[0.88] max-w-[720px]'>
              Дiтки i Батьки<span className='font-bold block'>в захватi вiд нас</span>
              <Image src={waves} alt='Хвилі' className='float top-10 -right-40' />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
