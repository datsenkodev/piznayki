'use client';

import { useEffect } from 'react';

export default function Faq() {
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
    <section className='faq'>
      <div className='container'>
        <h2 className='max-w-full md:max-w-[490px] lowercase leading-[120%] text-center md:text-left'>
          <span className='block uppercase'>Вiдповiдi</span>
          на найчастiшi запитання
        </h2>
        <div className='questions'>
          <button className='accordeon'>
            <h3>Чи є у Школи ліцензія?</h3>
            <div className='panel'>
              <p className='acc-text'>
                Так, Школа «Пізнайки» є ліцензованою. Школа надає учням документи державного зразка:
                після 4 класу - Свідоцтво про завершення початкової школи, після 9 класу - Свідоцтво
                про здобуття базової середньої освіти та після 11 класу - Свідоцтво про здобуття
                повної загальної середньої освіти.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>За якою програмою організоване навчання у школі?</h3>
            <div className='panel'>
              <p className='acc-text'>
                У нашій школі організоване навчання за програмою НУШ, з поглибленим вивченням
                англійської мови та інформаційних технологій. Реформування українських шкіл
                розпочалося в 2021 році згідно реформи шкільництва Міністерства освіти і науки.
                Школи НУШ - це освітній простір, де дітям приємно навчатись, і де діти отримують не
                тільки знання, а й розвивають емоційний інтелект та знають як застосувати вміння та
                навички у реальному житті.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Режим роботи у школі</h3>
            <div className='panel'>
              <p className='acc-text'>
                Школа працює з 8:00 до 18:00. З 9:00 до 13:00 (14:00) у дітей уроки згідно розкладу.
                13:00-15:00 час відпочинку та дозвілля. 15:00-17:00 - час виконання домашніх
                завдань. 17:00-18:00 - гурткова робота та ігрова діяльність (якщо дитина не відвідує
                гурток).
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Яке харчування у школі</h3>
            <div className='panel'>
              <p className='acc-text'>
                У школі організоване чотириразове харчування. За бажанням чи потребою дитини можна
                замовляти двохразове чи одноразове харчування.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Ключові компетентності, які формуються у школі</h3>
            <div className='panel'>
              <ul className='acc-text list-disc ml-5'>
                <li>Спілкування українською та англійською мовою</li>
                <li>Математична грамотність</li>
                <li>Компетентності в природничих науках і технологіях</li>
                <li>Інформаційно-цифрова компетентність</li>
                <li>Уміння вчитися впродовж життя</li>
                <li>Соціальні і громадянські компетентності</li>
                <li>Підприємливість</li>
                <li>Загальнокультурна грамотність</li>
                <li>Екологічна грамотність і повага до здорового способу  життя</li>
              </ul>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Які предмети мають поглиблене вивчення у школі?</h3>
            <div className='panel'>
              <p className='acc-text'>
                Поглиблене вивчення мають інформатика, англійської мова, математика. На вивчення цих
                дисциплін виділено вдвічі більше годин ніж за Базовим стандартом.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Яка кількість дітей у класах</h3>
            <div className='panel'>
              <p className='acc-text'>
                У класах працює від 10 до 15 дітей. Така наповнюваність класів дозволяє педагогу
                приділяти достатньо уваги кожному вихованцю, що дає можливість розкрити потенціал
                кожної дитини.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Завдяки чому можлива індивідуальна траєкторія розвитку кожного учня</h3>
            <div className='panel'>
              <p className='acc-text'>
                У школі організоване персоналізоване навчання. Згідно цього у вересні, після того,
                як діти трохи освоїлися, ми проводимо зріз знань, навичок й умінь здобувачів освіти.
                За результатами складається персоналізована програма, з урахуванням психологічних
                особливостей, де кожна дитина, у рамках загальної програми навчання, може отримувати
                індивідуальні консультації та покращувати свої інтелектуальні здібності.
              </p>
            </div>
          </button>

          <button className='accordeon'>
            <h3>Яке організоване дозвілля у школі</h3>
            <div className='panel'>
              <p className='acc-text'>
                На базі школи діють гуртки за різними напрямками: валяння, живопис, хортинг,
                комп’ютерна грамотність, шахи. Відповідно до вподобань кожна дитина може розвивати
                інтелектуальні та творчі здібності.
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
