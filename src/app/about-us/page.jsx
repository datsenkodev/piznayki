import Image from 'next/image';

import Kids from '@/components/kids';

import license from 'public/images/about-license.jpg';
import image from 'public/images/about-image.jpg';
import Modal from '@/components/modal';

export default function About() {
  return (
    <main className='about-page'>
      <div className='container'>
        <section className='about-content'>
          <div className='rounded-2xl overflow-hidden'>
            <Image src={image} alt='Компанія року 2024' style={{ width: '100%' }} quality={100} />
          </div>
          <h2>
            Історія розвитку мережі <span>освітніх закладів «Пізнайки»</span>
          </h2>
          <p className='about-text'>
            Спочатку було лише велике бажання створити казковий та розвивальний простір для діток
            дошкільного віку у новому житловому комлексі, куди водночас приїхало багато молодих
            батьків з дітьми. Так у березні 2019 року відкрився дитячий садок «Пізнайки-Розвивайки».
          </p>
          <p className='about-text'>
            А в червні 2021 року з садочку випускався перший випуск дошкільняток. Вони - майбутні
            школярі! На випускному балу серед батьків майнула думка про потребу у початковій школі.
            Їм уявлялася школа, про яку мріяли самі, коли були ще дітьми. Школа, в якій із
            задоволенням вчитимуться всі наші маленькі друзі.
          </p>
          <p className='about-text'>
            Тому уже у вересні 2021 року відкрилася перша початкова школа. З того часу дитячий садок
            «Пізнайки -Розвивайки» щороку випускає 10-12 діток, більшість з яких вступає до власної
            початкової школи або до інших освітніх закладів міста Вишгорода.
          </p>

          <h2>
            <span>Головним</span> принципом...
          </h2>
          <p className='about-text'>
            Освітніх закладів є якісна та доступна освіта, комфортне цілоденне перебування дитини та
            всебічний розвиток особистості здобувача освіти.
          </p>
          <p className='about-text'>
            Навчання, догляд, розвиток, дозвілля та турбота - основна концепція роботи кожного
            освітнього закладу мережі «Пізнайки»! Все паралельно і нерозривно!
          </p>
          <p className='about-text'>
            Для комфортного переходу дитини від садочку до школи уже кілька років функціонує
            нульовий клас. Так звана «PreSchool» – це нова сучасна модель підготовки дітей до школи,
            яка поширюється у провідних навчальних закладах України і в країнах Європи.
          </p>
          <p className='about-text'>
            Це дозволяє сформувати особистісну, інтелектуальну, психологічну готовність дитини до
            школи згідно до вимог новітніх технологій за сучасною методикою. Ми розробили спеціальну
            програму та розклад дня, які передбачають творчий та диференційований підхід в роботі з
            дітьми.
          </p>

          <h2>
            В 2024 році вже був <span>перший випуск учнів</span> четвертого класу
          </h2>
          <p className='about-text'>
            І тоді ж закладено фундамент приватної середньої школи мережі «Пізнайки», яка розпочала
            свою роботу у червні 2025 року.{' '}
          </p>

          <h2>
            Також разом <span>з основною навчальною діяльністю...</span>
          </h2>
          <p className='about-text'>
            У структурі закладів працює чотири репетиторських центри, в тому числі один для діток з
            особливими освітніми потребами. Ось так ми швидко рухаємося уперед і не збираються на
            цьому зупинятися!
          </p>
        </section>
        <aside className='about-aside'>
          <iframe
            src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPiznayki&tabs=timeline&width=320&height=844&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=false&appId'
            width='320'
            height='844'
            style={{ border: 'none', overflow: 'hidden' }}
            scrolling='no'
            frameBorder='0'
            allowFullScreen={true}
            allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'></iframe>
          <Modal
            dataClass='big-modal'
            trigger={
              <Image
                src={license}
                alt='Подяка за непохитну відданість справі'
                className='cursor-pointer'
              />
            }>
            <Image
              src={license}
              alt='Подяка за непохитну відданість справі'
              style={{ width: '100%' }}
              quality={100}
            />
          </Modal>
        </aside>
      </div>
      <Kids />
    </main>
  );
}
