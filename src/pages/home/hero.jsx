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

export default function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <h1 className='max-w-[450px] uppercase text-center md:text-left'>
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
  );
}
