'use client';

import { useRef, useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Kids from '@components/kids';

import pin from 'public/images/icons/pin.svg';

import heroBig from 'public/images/tutor/hero-big.png';

export default function TutorCenter() {
  const sliderRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);

  let isDraggingSlider = false;
  let isDraggingThumb = false;
  let startX = 0;
  let scrollLeft = 0;

  // Thumb dragging logic
  const handleMouseDownThumb = (e) => {
    isDraggingThumb = true;
    startX = e.clientX || e.touches[0].clientX;
    scrollLeft = parseInt(thumbRef.current.style.left, 10) || 0;
    document.body.style.userSelect = 'none';
    thumbRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const handleMouseMoveThumb = (e) => {
    if (!isDraggingThumb) return;

    const clientX = e.clientX || e.touches[0].clientX;
    const deltaX = clientX - startX;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    const newLeft = Math.min(
      Math.max(0, scrollLeft + deltaX),
      scrollbar.clientWidth - thumb.offsetWidth,
    );

    thumb.style.left = `${newLeft}px`;

    const slider = sliderRef.current;
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = (newLeft / (scrollbar.clientWidth - thumb.offsetWidth)) * scrollWidth;
  };

  const handleMouseUpThumb = () => {
    isDraggingThumb = false;
    document.body.style.userSelect = '';
    thumbRef.current.style.cursor = 'grab';
  };

  // Update thumb position based on slider scroll
  const updateThumbPosition = () => {
    const slider = sliderRef.current;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    const scrollLeft = slider.scrollLeft;
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const thumbWidth = (slider.clientWidth / slider.scrollWidth) * scrollbar.clientWidth;

    thumb.style.width = `${thumbWidth}px`;
    thumb.style.left = `${(scrollLeft / scrollWidth) * (scrollbar.clientWidth - thumbWidth)}px`;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const thumb = thumbRef.current;

    // Initialize thumb position
    updateThumbPosition();

    // Add event listeners for thumb dragging (mouse)
    thumb.addEventListener('mousedown', handleMouseDownThumb);
    document.addEventListener('mousemove', handleMouseMoveThumb);
    document.addEventListener('mouseup', handleMouseUpThumb);

    // Add event listeners for thumb dragging (touch)
    thumb.addEventListener('touchstart', handleMouseDownThumb);
    document.addEventListener('touchmove', handleMouseMoveThumb);
    document.addEventListener('touchend', handleMouseUpThumb);

    // Add event listeners for slider scroll
    slider.addEventListener('scroll', updateThumbPosition);

    return () => {
      thumb.removeEventListener('mousedown', handleMouseDownThumb);
      document.removeEventListener('mousemove', handleMouseMoveThumb);
      document.removeEventListener('mouseup', handleMouseUpThumb);

      thumb.removeEventListener('touchstart', handleMouseDownThumb);
      document.removeEventListener('touchmove', handleMouseMoveThumb);
      document.removeEventListener('touchend', handleMouseUpThumb);

      slider.removeEventListener('scroll', updateThumbPosition);
    };
  }, []);

  return (
    <main className='tutor'>
      <section className='hero-page'>
        <div className='container'>
          <Image src={heroBig} alt='Декор' aria-hidden className='absolute' quality={100} />
          <div className='hero-text__container'>
            <h1 className='page-heading'>Репетиторський центр</h1>
            <Link
              href='https://maps.app.goo.gl/abcbjiNBwBBtyMoLA'
              target='_blank'
              className='page-location'>
              <Image src={pin} alt='точка на мапі' />
              <span>Проспект Шевченка 2д</span>
            </Link>
            <p className='page-subtitle'>
              Ми прагнемо надати якісну, індивідуальну освіту та забезпечити повноцінний розвиток
              кожної особистості, формуємо знання та цінності, які стануть фундаментом для
              майбутнього успіху кожного здобувача освіти
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-4'>
              <button className='accent-button'>Анкета для вступу</button>
              <Link className='page-anchor' href={'#page-content'}>
                Детальніше про центр
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='page-content' id='page-content'>
        <div className='container'>
          <div className='flex items-center 880:items-stretch flex-col 880:flex-row content-between gap-8 880:gap-10 lg:gap-40 mb-20 880:mb-36'>
            <div className='max-w-[80%] 880:max-w-[420px]'>
              <h2 className='leading-[120%] text-center 880:text-left'>
                <span>PRESCHOOL</span>
              </h2>
              <p className='page-content__subtitle'>
                Період переходу від садочка до школи є стресовим і для дитини, і для батьків. Для
                того, щоб цей процес був максимально комфортним та легким, в мережі освітніх
                закладів ПІЗНАЙКИ діє PRESCHOOL - підготовка дитини до шкільного життя.
              </p>
              <p className='page-content__subtitle'>
                Наша програма PreSchool розрахована на дітей 4-6 років, які вже переросли формат
                дитячого садка, а для школи ще замаленькі.
              </p>
            </div>

            <ul className='tutor-list blue-list'>
              <li>Уміння читати, писати й лічити</li>
              <li>Здатність вирішувати логічні задачки</li>
              <li>Уміння самоорганізовуватися, планувати свій час</li>
              <li>Здатність фокусувати увагу, формулювати свої думки, слухати й розуміти інших</li>
              <li>
                Підвищення комунікабельності, здатності взаємодіяти з іншими людьми, бути частиною
                колективу.
              </li>
            </ul>
          </div>
          <div className='flex items-center 880:items-stretch flex-col 880:flex-row content-between gap-8 880:gap-10 lg:gap-40 mb-20 880:mb-36'>
            <h2 className='max-w-[80%] 880:max-w-[420px] leading-[120%] text-center 880:text-left'>
              Репетитор для <span className='text-[#EF6936]'>учнів 1-4 класів</span>
            </h2>

            <ul className='tutor-list orange-list'>
              <li>Уміння читати, писати й лічити</li>
              <li>Здатність вирішувати логічні задачки</li>
              <li>Уміння самоорганізовуватися, планувати свій час</li>
              <li>Здатність фокусувати увагу, формулювати свої думки, слухати й розуміти інших</li>
            </ul>
          </div>
        </div>
        <div className='container'>
          <h2 className='max-w-[80%] 880:max-w-[420px] mx-auto 880:mx-0  leading-[120%] text-center 880:text-left'>
            Репетитор для учнів <span>5-11 класів</span>
          </h2>
        </div>
        <div className='container__right-sided'>
          <div className='slider slider-light' ref={sliderRef}>
            <div className='slider__container'>
              <div className='advice-item bg-[#727EFC]'>
                <h4 className='relative font-bold text-white text-xl xs:text-[2rem]'>
                  Англійська мова
                </h4>
                <ul className='tutor-cards-list'>
                  <li>Поліпшить успішність в школі</li>
                  <li>Допоможе підготуватися до іспитів і олімпіад</li>
                  <li>Розвине здатність вільно говорити, читати і писати англійською мовою</li>
                </ul>
              </div>
              <div className='advice-item bg-[#FFB400]'>
                <h4 className='relative font-bold text-white text-xl xs:text-[2rem]'>
                  Українська мова
                </h4>
                <ul className='tutor-cards-list'>
                  <li>Поліпшить успішність в школі</li>
                  <li>Допоможе підготуватися до іспитів і олімпіад</li>
                  <li>Розвине здатність вільно говорити, читати і писати українською мовою</li>
                </ul>
              </div>
              <div className='advice-item bg-[#EF6936]'>
                <h4 className='relative font-bold text-white text-xl xs:text-[2rem]'>Математика</h4>
                <ul className='tutor-cards-list'>
                  <li>Поліпшить успішність в школі</li>
                  <li>Усуне прогалини в знаннях</li>
                  <li>Відродить інтерес до математики в цілому</li>
                  <li>Дозволить придбати глибокі знання, які не дають в школі</li>
                  <li>Допоможе швидко і без стресу підготуватися до іспитів і олімпіад</li>
                </ul>
              </div>
              <div className='advice-item bg-[#3EA397]'>
                <h4 className='relative font-bold text-white text-xl xs:text-[2rem]'>
                  Природничі дисципліни
                </h4>
                <ul className='tutor-cards-list'>
                  <li>Поліпшить успішність в школі</li>
                  <li>Усуне прогалини в знаннях</li>
                  <li>Відродить інтерес до дисципліни в цілому</li>
                  <li>Дозволить придбати глибокі знання, які не дають в школі</li>
                  <li>Допоможе швидко і без стресу підготуватися до іспитів і олімпіад</li>
                </ul>
              </div>
              <div className='advice-item bg-[#1A1E4E]'>
                <h4 className='relative text-white text-xl xs:text-[1.5rem]'>
                  Курс захоплюючої інформатики
                  <p className='font-bold block text-white'>"КіберХаб"</p>
                </h4>
                <ul className='tutor-cards-list'>
                  <li>З інформаційними навичками діти зануряться у кібер майбутнє</li>
                  <li>Ознайомляться з поняттями інформаційної безпеки</li>
                  <li>Заняття 2 рази на тиждень. Графік по домовленності.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='container relative'>
          <div className='custom-scrollbar' ref={scrollbarRef}>
            <div className='custom-thumb' ref={thumbRef}></div>
          </div>
        </div>
      </section>
      <Kids />
    </main>
  );
}
