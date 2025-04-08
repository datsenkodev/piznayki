'use client';

import { useRef, useEffect } from 'react';

import Image from 'next/image';

import puzzleYellow from 'public/images/icons/puzzle-yellow.svg';

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
import feedback1 from 'public/images/feedback1.png';
import feedback2 from 'public/images/feedback2.png';
import feedback3 from 'public/images/feedback3.png';
import feedback4 from 'public/images/feedback4.png';
import feedback5 from 'public/images/feedback5.png';
import feedback6 from 'public/images/feedback6.png';
import feedback7 from 'public/images/feedback7.png';
import feedback8 from 'public/images/feedback8.png';
import feedback9 from 'public/images/feedback9.png';
import stars from 'public/images/icons/5stars.png';

export default function About() {
  const sliderRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);

  let isDraggingSlider = false; // Separate flag for slider dragging
  let isDraggingThumb = false; // Separate flag for thumb dragging
  let startX = 0;
  let scrollLeft = 0;

  // Slider dragging logic
  const handleMouseDownSlider = (e) => {
    isDraggingSlider = true;
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const handleMouseMoveSlider = (e) => {
    if (!isDraggingSlider) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = x - startX;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    updateThumbPosition();
  };

  const handleMouseUpSlider = () => {
    isDraggingSlider = false;
    sliderRef.current.style.cursor = 'grab';
  };

  // Thumb dragging logic
  const handleMouseDownThumb = (e) => {
    isDraggingThumb = true;
    startX = e.clientX;
    scrollLeft = parseInt(thumbRef.current.style.left, 10) || 0;
    document.body.style.userSelect = 'none'; // Prevent text selection
    thumbRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const handleMouseMoveThumb = (e) => {
    if (!isDraggingThumb) return;

    const deltaX = e.clientX - startX;
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
    document.body.style.userSelect = ''; // Re-enable text selection
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

    // Add event listeners for thumb dragging
    thumb.addEventListener('mousedown', handleMouseDownThumb);
    document.addEventListener('mousemove', handleMouseMoveThumb);
    document.addEventListener('mouseup', handleMouseUpThumb);

    // Add event listeners for slider dragging
    slider.addEventListener('mousedown', handleMouseDownSlider);
    slider.addEventListener('mousemove', handleMouseMoveSlider);
    slider.addEventListener('mouseup', handleMouseUpSlider);
    slider.addEventListener('mouseleave', handleMouseUpSlider);

    return () => {
      thumb.removeEventListener('mousedown', handleMouseDownThumb);
      document.removeEventListener('mousemove', handleMouseMoveThumb);
      document.removeEventListener('mouseup', handleMouseUpThumb);

      slider.removeEventListener('mousedown', handleMouseDownSlider);
      slider.removeEventListener('mousemove', handleMouseMoveSlider);
      slider.removeEventListener('mouseup', handleMouseUpSlider);
      slider.removeEventListener('mouseleave', handleMouseUpSlider);
    };
  }, []);

  return (
    <section className='about'>
      <div className='container'>
        <div className='flex justify-between gap-4 flex-wrap'>
          <p className='text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white leading-[0.88]'>
            Давайте <span className='font-bold block'>знайомитись</span>
          </p>
          <p className='max-w-115 text-[var(--whiteLightColor)] font-bold text-xl xs:text-2xl'>
            Сьогодні «Пізнайки» – це велика сім’я, де навчається біля двох сотень дітей та працює 28
            працівників.
          </p>
        </div>
      </div>
      <div className='container__wider'>
        <div className='slider' ref={sliderRef}>
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
      <div className='container relative'>
        <div className='custom-scrollbar' ref={scrollbarRef}>
          <div className='custom-thumb' ref={thumbRef}></div>
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
                <span>Незалежна система опалення, електричні генератори, резервне освітлення</span>
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
            Дiтки i Батьки<span className='font-bold block relative z-1'>в захватi вiд нас</span>
            <Image
              src={waves}
              alt='Хвилі'
              className='float z-0 top-15 left-[60%] xs:top-10 scale-60 md:scale-100 xs:left-[80%] md:left-[100%]'
            />
          </p>
          <div className='feedback-container'>
            <div className='feedback-item item-1'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback1} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Софія</p>
                  <p>Мама Каті</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>2 місяці тому</p>
              </div>
              <p>
                Дитина в цьому році закінчила навчання в цьому ДНЗ і ми задоволені, що обрали в свій
                час Пізнайки! Професійний колектив, індивідуальний підхід. Рекомендую!
              </p>
            </div>
            <div className='feedback-item item-2'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback2} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Софія</p>
                  <p>Мама Назара</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>12 днів тому</p>
              </div>
              <p>
                Дуже вдячні цьому садочку за турботу про нашу дитину! Тут панує атмосфера любові та
                підтримки, вихователі завжди уважні й доброзичливі. Син із задоволенням йде кожного
                ранку до садочка!
              </p>
            </div>
            <div className='feedback-item item-3'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback3} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Андрій</p>
                  <p>Папа Богдана</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>1 місяць тому</p>
              </div>
              <p>
                Наш малюк досить сором’язливий, і ми хвилювалися, як він не адаптується. Але завдяки
                професійним вихователям адаптація пройшла легко! Тут враховують особливості кожної
                дитини, створюючи комфортне середовище для розвитку.
              </p>
            </div>
            <div className='feedback-item item-4'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback4} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Анна</p>
                  <p>Мама Христини</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>6 місяців тому</p>
              </div>
              <p>
                У школі працююють професійні вчителі, які не просто дають знання, а й зацікавлюють
                дітей. Дочка із захопленням вчиться, а ми радіємо її успіхам!
              </p>
            </div>
            <div className='feedback-item item-5'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback5} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Дарина</p>
                  <p>Мама Софії</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>3 місяці тому</p>
              </div>
              <p>
                Ми дуже задоволені вибором цієї школи! Дитина із задоволенням ходить на уроки,
                навчання цікаве, а вчителі завжди підтримують учнів. Завдяки індивідуальному підходу
                кожна дитина розкриває свої здібності. Рекомендуємо!
              </p>
            </div>
            <div className='feedback-item item-6'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback6} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Христина</p>
                  <p>Мама Максима</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>2 місяці тому</p>
              </div>
              <p>
                Ми довго обирали садочок і зупинилися на цьому – і не пошкодували! Дитина
                розвивається, знаходить друзів, весело та цікаво проводить час. Відчувається, що тут
                дійсно дбають про дітей. Дякуємо за вашу працю!
              </p>
            </div>
            <div className='feedback-item item-7 float'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback7} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Олексій</p>
                  <p>Батько Андрія</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>1 місяць тому</p>
              </div>
              <p>
                Наша дитина завершила навчання в цьому садочку, і ми щиро раді, що свого часу обрали
                саме його. Педагоги уважні та професійні, завжди йдуть назустріч. Рекомендуємо з
                упевненістю!
              </p>
            </div>
            <div className='feedback-item item-8 float'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback8} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Даяна</p>
                  <p>Мама Майї</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>5 місяців тому</p>
              </div>
              <p>
                Донька закінчила рік у цьому закладі — залишились тільки позитивні враження!
                Колектив чудовий, до дітей ставляться з турботою та розумінням. Дякуємо за вашу
                працю!
              </p>
            </div>
            <div className='feedback-item item-9 float'>
              <div className='flex item-center gap-4 mb-12'>
                <Image src={feedback9} alt='Фото Софії' />
                <div className='flex flex-col'>
                  <p className='font-bold text-xl'>Марія</p>
                  <p>Мама Кирила</p>
                </div>
              </div>
              <div className='flex gap-[0.625rem] mb-4'>
                <Image src={stars} alt='Оцінка 5 зірочок' />{' '}
                <p className='opacity-50'>4 місяці тому</p>
              </div>
              <p>
                Наш син випустився з групи, і ми дуже вдячні всім вихователям. Тут не лише дають
                знання, а й дарують дітям тепло й підтримку. Радимо всім батькам!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
