'use client';

import { motion as m } from 'motion/react';

import { useEffect } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Slider from '@components/Slider';
import { Modal } from '@components/modal';
import Application from '@components/applicationModal';
import Advices from '@home/advices';
import Kids from '@components/kids';

import pin from 'public/images/icons/pin.svg';

import slider1 from 'public/images/kinder/kindergarten1.jpg';
import slider2 from 'public/images/kinder/kindergarten2.jpg';
import slider3 from 'public/images/kinder/kindergarten3.jpg';
import slider4 from 'public/images/kinder/kindergarten4.jpg';
import slider5 from 'public/images/kinder/kindergarten5.jpg';
import slider6 from 'public/images/kinder/kindergarten6.jpg';
import slider7 from 'public/images/kinder/kindergarten8.jpg';

import hero1 from 'public/images/kinder/hero1.png';
import hero2 from 'public/images/kinder/hero2.png';
import hero3 from 'public/images/kinder/hero3.png';
import hero4 from 'public/images/kinder/hero4.png';
import hero5 from 'public/images/kinder/hero5.png';
import hero6 from 'public/images/kinder/hero6.png';

import kids from 'public/images/kinder/kids.png';

import puzzleYellow from 'public/images/icons/puzzle-yellow.svg';
import puzzleOrange from 'public/images/icons/puzzle-orange.svg';
import puzzlePiece from 'public/images/icons/puzzle-piece.svg';
import circle from 'public/images/icons/circle-yellow.svg';

import toy from 'public/images/kinder/toy.png';

import details1 from 'public/images/kinder/details1.png';
import details2 from 'public/images/kinder/details2.png';
import details3 from 'public/images/kinder/details3.png';

export default function Kindergarten() {
  useEffect(() => {
    const hoverItems = document.querySelectorAll('.hoverable-item');

    if (hoverItems) {
      document.querySelector('body').addEventListener('pointermove', (ev) => {
        hoverItems.forEach((El) => {
          const rect = El.getBoundingClientRect();
          if (rect) {
            El.style.setProperty('--x', ev.clientX - rect.left);
            El.style.setProperty('--y', ev.clientY - rect.top);
          }
        });
      });
    } else {
      console.warn('No elements with the class "hoverable-item" found');
    }
  }, []);

  useEffect(() => {
    const acc = document.querySelectorAll('.accordeon');

    if (acc.length) {
      acc.forEach((item) => {
        item.addEventListener('click', function () {
          this.classList.toggle('active');
          let panel = this.querySelector('.panel');
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          }
        });
      });
    }

    return () => {
      acc.forEach((item) => {
        item.removeEventListener('click', function () {
          this.classList.toggle('active');
        });
      });
    };
  }, []);

  return (
    <m.main
      className='kindergarten'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}>
      <section className='hero-page'>
        <div className='container'>
          <Image src={hero1} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero2} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero3} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero4} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero5} alt='Декор' aria-hidden className='float' quality={100} />
          <Image src={hero6} alt='Декор' aria-hidden className='float' quality={100} />
          <div className='hero-text__container'>
            <h1 className='page-heading'>Дитячий садок</h1>
            <Link
              href='https://maps.app.goo.gl/4HTd2A7BedTbtuEt8'
              target='_blank'
              className='page-location'>
              <Image src={pin} alt='точка на мапі' />
              <span>Вул. Кургузова 1А, Корпус 3</span>
            </Link>
            <p className='page-subtitle'>
              Відкритий у 2019р в новому житловому комплексі ЖК «Ярославичі-1» міста Вишгород.
            </p>
            <div className='flex flex-col md:flex-row items-center md:items-stretch gap-4'>
              <Modal trigger={<button className='accent-button'>Анкета для вступу</button>}>
                <Application />
              </Modal>
              <Link className='page-anchor' href={'#page-content'}>
                Детальніше про садок
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
          <div className='slider__item'>
            <Image src={slider7} alt='Щасливі діти' />
          </div>
        </Slider>
      </section>
      <section className='page-content' id='page-content'>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='text-center md:text-left self-center max-w-full xs:max-w-[90%] 880:max-w-[590px]'>
              <h2 className='leading-[120%] text-center md:text-left'>
                Садок відповідає <span>високим вимогам суспільства</span>
              </h2>
              <p className='my-6 sm:mt-10 sm:mb-7 text-2xl'>
                Та стандартам Міністерства освіти та науки України, про що свідчить{' '}
                <Link
                  href={'https://koda.gov.ua/normdoc/pro-vidachu-licenzii-na-provadzhennya-os-32/'}
                  target='_blank'
                  className='text-[var(--accentColor)] hover:underline'>
                  ліцензія на освітню діяльність №707 від 06.12.2019р.
                </Link>
              </p>
              <p className='text-2xl'>
                Садок працює за{' '}
                <Link
                  href={'https://mon.gov.ua/osvita-2/doshkilna-osvita-2/programi-rozvitku-ditey'}
                  target='_blank'
                  className='text-[var(--accentColor)] hover:underline'>
                  освітньою програмою «Дитина».
                </Link>
              </p>
            </div>
            <div className='relative'>
              <Image src={kids} alt='Щасливі дітки' className='md:scale-140 relative md:left-28' />
              <span className='kinder-circle blue'></span>
              <span className='kinder-circle yellow'></span>
              <span className='kinder-circle orange'></span>
            </div>
          </div>
        </div>
      </section>
      <section className='kinder-services'>
        <div className='container'>
          <Image aria-hidden src={puzzleYellow} alt='Жовтий пазл' className='float' />
          <Image aria-hidden src={puzzleOrange} alt='Помаранчевий пазл' className='float' />
          <Image aria-hidden src={puzzlePiece} alt='Оранжевий шматочок пазлу' className='float' />
          <Image aria-hidden src={circle} alt='Жовте коло' className='float' />
          <p className='accent-bg break-word text-center max-w-full mx-auto md:mx-0 py-4 px-5 rounded-[3.125rem] w-max mb-5'>
            Усе включено до місячного абонементу
          </p>
          <h2 className='max-w-[80%] mx-auto md:mx-0 880:max-w-[680px] leading-[120%] text-center md:text-left'>
            Серед додаткових послуг <span>організоване навчання:</span>
          </h2>
          <ul className='kinder-services__list'>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Англійська мова</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Хореографія</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Карате</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Підготовка до школи</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Музичний розвиток</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Сенсорний розвиток</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Мнемотехніка</span>
            </li>
            <li className='hoverable-item'>
              <span className='hoverable-item__inset'>Артикуляційна гімнастика</span>
            </li>
          </ul>
        </div>
      </section>
      <section className='kinder-details'>
        <div className='container'>
          <div className='flex flex-col md:flex-row gap-4 justify-between items-center md:items-end'>
            <p className='text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white text-center md:text-left leading-[0.88]'>
              Подробиці <span className='font-bold block'>роботи садка:</span>
            </p>
            <div className='flex gap-4 max-w-[360px] items-center'>
              <p className='flex-[0_0_auto]'>
                <Image src={toy} alt='дитяча іграшка медведик' width={37} height={37} />
              </p>

              <span className='text-white text-xl'>
                Працює чотири вікових mini-групи (12 дітей у кожній)
              </span>
            </div>
          </div>
          <ul className='kinder-details__list'>
            <li>
              <p>
                Група <br /> раннього віку
              </p>
              <span>Діти 2-3 року життя</span>
            </li>
            <li>
              <p>
                Група <br /> молодшого віку
              </p>
              <span>Діти 3-4 року життя</span>
            </li>
            <li>
              <p>
                Група <br /> середнього віку
              </p>
              <span>Діти 4-5 року життя</span>
            </li>
            <li>
              <p>
                Група <br /> старшого віку
              </p>
              <span>Діти 5-6 року життя</span>
            </li>
          </ul>
          <ul className='kinder-benefits-list'>
            <li>
              <Image src={details1} alt='Ліс біля садочку' quality={100} />
              <div>
                <h3>Прогулянкова площадка</h3>
                <p>Знаходиться поруч з хвойним лісом</p>
              </div>
            </li>
            <li>
              <Image src={details2} alt='Чудова їжа' quality={100} />
              <div>
                <h3>Чотириразове власне харчування</h3>
              </div>
            </li>
            <li>
              <Image src={details3} alt={`Інтер'єр приміщення садочку`} quality={100} />
              <div>
                <h3>У приміщеннях зроблений сучасний ремонт</h3>
                <p>
                  Cвітлі пастельні кольори; підлога ламінат з автономним опаленням; підключена
                  система охорони та відео нагляду; усі меблі виготовлені по індивідуальному
                  замовленню та з матеріалів, що мають сертифікати відповідності
                </p>
              </div>
            </li>
          </ul>
          <p className='text-[clamp(2.5rem,_1.3608rem_+_5.0633vw,_5rem)] text-white leading-[0.88]'>
            Графіки <span className='font-bold block'>відвідування</span>
          </p>
          <ul className='kinder-schedule-list'>
            <li>
              <h3>08:00-18:30</h3>
              <span>Повний день</span>
            </li>
            <li>
              <h3>08:00-12:00</h3>
              <span>Половина дня</span>
            </li>
            <li>
              <h3>Разове відвідування</h3>
              <span>
                Погодинне відвідування коштує <strong>5% місячного абонементу</strong>
              </span>
              <span>
                Поденне відвідування коштує <strong>10% місячного абонементу</strong>
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className='faq'>
        <div className='container'>
          <h2 className='max-w-[500px] lowercase leading-[120%] text-center md:text-left'>
            <span className='block uppercase break-all 880:break-keep'>Найпоширеніші</span>
            запитання про садочок?
          </h2>
          <div className='questions'>
            <button className='accordeon'>
              <h3>Чи має садок ліцензію?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  Так, наш заклад дошкільної освіти має ліцензію МОН на здійснення освітньої
                  діяльності з 2019 року.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>З якого віку приймаєте дітей до садочка?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  До закладу приймаємо діток від 1,9-2-х років, але все індивідуально.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>За якою освітньою програмою працює ваш заклад?</h3>
              <div className='panel'>
                <p className='acc-text'>Навчання дітей здійснюється за програмою "Дитина".</p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Які ключові компетенції формуються у дітей в садочку?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  На етапі дошкільної освіти ми формуємо такі компетентності: здоров'язбережувальну,
                  комунікативну, ігрову, сенсорно-пізнавальну, природничо-екологічну,
                  художньо-продуктивну, мовленнєву та соціальну.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Як проходить адаптація?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  Все досить індивідуально. Є діти, які швидко звикають, їм подобається в садочку і
                  вони з першого дня готові залишитись на повний день. Є діти, яким потрібно більше
                  часу. Для таких дітлахів розробляємо індивідуальні програми поступової адаптації з
                  почасовим чи поденним відвідуванням. Педагоги та нянечки працюють з дітками при
                  перших знайомствах індивідуально, що дозволяє зробити процес адаптації комфортним
                  та веселим.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Яка наповнюваність дітей у групах?</h3>
              <div className='panel'>
                <p className='acc-text'>В одній віковій групі навчається до 12 діток.</p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Скільки вікових груп у садку?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  В садочку навчаються діти у трьох вікових групах. З пʼяти років дітей переводять з
                  садочку у нульовий клас початкової школи, який ми називаємо Preschool. <br />
                  Тут дітки проходять усю програму базового компоненту дошкільної освіти, щодня
                  займаються з вчителем з підготовки до школи, щодня мають заняття з вивчення
                  іноземної мови. Також мають змогу відвідувати спортивні секції та творчі студії
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Як організоване харчування у дошкільному закладі?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  В садочку повноцінне 4 -х разове харчування: сніданок, обід, полуденок та вечеря.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Чи маєте майданчик для відпочинку на вулиці?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  Діти двічі на день ходять на прогулянку на власний дитячий майданчик, що
                  розташований у парковій зоні неподалік.
                </p>
              </div>
            </button>

            <button className='accordeon'>
              <h3>Яке дозвілля у дітей в садочку?</h3>
              <div className='panel'>
                <p className='acc-text'>
                  Крім цікавих занять наші діти відвідують гуртки, майстер-класи, дискотеки, дні
                  народження, пікніки, естафети, тематичні дні та веселі сезонні свята.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <Advices />
      <Kids />
    </m.main>
  );
}
