import Image from 'next/image';

import sun from 'public/images/sun.png';

export default function Principles() {
  return (
    <section className='faq'>
      <div className='container'>
        <h2 className='max-w-full md:max-w-[520px] leading-[120%] flex-0 text-center md:text-left'>
          <span className='block uppercase'>Основні принципи</span>
          навчання у закладах «Пізнайки-Розвивайки»
        </h2>
        <div className='principles'>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              {' '}
              <span>Формування </span>
              високого рівня освіченості
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              <span>Розвиток </span>
              самостійності
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              <span>Формування </span>
              незалежності
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              <span>Виховання </span>
              відповідальності
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              <span>Формування </span>
              обов’язковості, <span>навчання </span> брати на себе відповідальність
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              <span>Стимулювання </span>
              творчості
            </h3>
          </div>
          <div>
            <Image src={sun} alt='сонце' aria-hidden width={24} />
            <h3>
              {' '}
              <span>Розвиток </span>
              фантазії
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
