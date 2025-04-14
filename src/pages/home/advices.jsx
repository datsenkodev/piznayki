import Image from 'next/image';
import Link from 'next/link';

import adviceArrow from 'public/images/icons/arrow-right-bottom.svg';
import advice1 from 'public/images/advices/advice1.jpg';
import advice2 from 'public/images/advices/advice2.png';
import advice3 from 'public/images/advices/advice3.png';
import advice4 from 'public/images/advices/advice4.jpg';
import advice5 from 'public/images/advices/advice5.png';
import advice6 from 'public/images/advices/advice6.png';
import advice7 from 'public/images/advices/advice7.png';
import advice8 from 'public/images/advices/advice8.png';
import advice9 from 'public/images/advices/advice9.png';
import Slider from '@/components/Slider';

export default function Advices() {
  return (
    <section className='advices'>
      <div className='container'>
        <h2 className='max-w-[490px] lowercase leading-[120%] text-center md:text-left'>
          <span className='block uppercase'>Поради</span>для батькiв
        </h2>
      </div>
      <Slider>
        <Link
          className='advice-item bg-[#727EFC]'
          href={
            'https://www.instagram.com/p/DIE07AAo3iH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Як батькам навчити дитину виявляти любов
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice1} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#FFB400]'
          href={
            'https://www.instagram.com/p/DIMRdQAoRTZ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Як розмовляти з дитиною, щоб вона вас слухала
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice2} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#EF6936]'
          href={
            'https://www.instagram.com/p/DIHDBD5okss/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Як розвинути моральні якості дитини
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice3} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#3EA397]'
          href={
            'https://www.instagram.com/p/DHiw34foruY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Навчаємо дитину робити правильний вибір
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice4} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#727EFC]'
          href={
            'https://www.instagram.com/p/DIY7JyfowiP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Як підвищити самооцінку та зміцнити впевненість у собі
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice5} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#FFB400]'
          href={
            'https://www.instagram.com/p/DHUZyCAoG0A/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Дисциплінуємо дитину- поради батькам
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice6} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#EF6936]'
          href={
            'https://www.instagram.com/p/DIY6k93ohb5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            8 порад для розвитку дитячої самостійності
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice7} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#3EA397]'
          href={
            'https://www.instagram.com/p/DHY75n_IrwR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Навчаємо дитину наполегливості й цілеспрямованості
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice8} alt='Щасливі діти' width={293} />
        </Link>
        <Link
          className='advice-item bg-[#727EFC]'
          href={
            'https://www.instagram.com/p/DH57OZqoJyo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
          }
          target='_blank'>
          <h4 className='relative font-bold text-white text-xl xs:text-[1.5rem]'>
            Необхідні навички для дитячого садочка
            <Image
              src={adviceArrow}
              alt='Посилання на пораду'
              className='absolute bottom-0 right-0'
            />
          </h4>
          <Image src={advice9} alt='Щасливі діти' width={293} />
        </Link>
      </Slider>
      <div className='container flex flex-col gap-5 md:flex-row md:gap-6'>
        <p className='max-w-[280px] mt-10 md:my-[3.5rem_10rem]'>
          Більше корисної інформації ви можете знайти на нашій сторінці Instagram та Facebook
        </p>
        <div className='social-buttons my-[1.25rem_5rem] md:my-[3.5rem_10rem]'>
          <Link href='https://www.facebook.com/Piznayki/' className='fb' target='_blank'>
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M33.6654 17.0007C33.6654 7.80065 26.1987 0.333984 16.9987 0.333984C7.7987 0.333984 0.332031 7.80065 0.332031 17.0007C0.332031 25.0673 6.06536 31.784 13.6654 33.334V22.0007H10.332V17.0007H13.6654V12.834C13.6654 9.61732 16.282 7.00065 19.4987 7.00065H23.6654V12.0007H20.332C19.4154 12.0007 18.6654 12.7507 18.6654 13.6673V17.0007H23.6654V22.0007H18.6654V33.584C27.082 32.7507 33.6654 25.6507 33.6654 17.0007Z'
                fill='currentColor'
              />
            </svg>
            Facebook
          </Link>
          <Link href='https://www.instagram.com/piznayki/' className='inst' target='_blank'>
            <svg
              width='34'
              height='34'
              viewBox='0 0 34 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M18.713 0.333984C20.588 0.338984 21.5396 0.348984 22.3613 0.372318L22.6846 0.383984C23.058 0.397318 23.4263 0.413984 23.8713 0.433984C25.6446 0.517318 26.8546 0.797318 27.9163 1.20898C29.0163 1.63232 29.943 2.20565 30.8696 3.13065C31.7175 3.96354 32.3733 4.97144 32.7913 6.08398C33.203 7.14565 33.483 8.35565 33.5663 10.1307C33.5863 10.574 33.603 10.9423 33.6163 11.3173L33.6263 11.6407C33.6513 12.4607 33.6613 13.4123 33.6646 15.2873L33.6663 16.5307V18.714C33.6704 19.9297 33.6576 21.1453 33.628 22.3606L33.618 22.684C33.6046 23.059 33.588 23.4273 33.568 23.8707C33.4846 25.6457 33.2013 26.854 32.7913 27.9173C32.3733 29.0299 31.7175 30.0378 30.8696 30.8707C30.0368 31.7185 29.0289 32.3743 27.9163 32.7923C26.8546 33.204 25.6446 33.484 23.8713 33.5673L22.6846 33.6173L22.3613 33.6273C21.5396 33.6506 20.588 33.6623 18.713 33.6657L17.4696 33.6673H15.288C14.0717 33.6716 12.8555 33.6588 11.6396 33.629L11.3163 33.619C10.9207 33.604 10.5251 33.5868 10.1296 33.5673C8.35631 33.484 7.14631 33.204 6.08298 32.7923C4.97103 32.3741 3.96372 31.7183 3.13131 30.8707C2.28289 30.0379 1.62649 29.03 1.20798 27.9173C0.796313 26.8556 0.516312 25.6457 0.432979 23.8707L0.382979 22.684L0.374646 22.3606C0.343923 21.1453 0.330032 19.9297 0.332979 18.714V15.2873C0.328366 14.0717 0.34059 12.856 0.369646 11.6407L0.381313 11.3173C0.394646 10.9423 0.411313 10.574 0.431313 10.1307C0.514646 8.35565 0.794646 7.14732 1.20631 6.08398C1.6258 4.97098 2.28335 3.96304 3.13298 3.13065C3.9649 2.28323 4.97163 1.62744 6.08298 1.20898C7.14631 0.797318 8.35465 0.517318 10.1296 0.433984C10.573 0.413984 10.943 0.397318 11.3163 0.383984L11.6396 0.373984C12.855 0.344372 14.0706 0.331593 15.2863 0.335651L18.713 0.333984ZM16.9996 8.66732C14.7895 8.66732 12.6699 9.54529 11.1071 11.1081C9.54429 12.6709 8.66631 14.7905 8.66631 17.0007C8.66631 19.2108 9.54429 21.3304 11.1071 22.8932C12.6699 24.456 14.7895 25.334 16.9996 25.334C19.2098 25.334 21.3294 24.456 22.8922 22.8932C24.455 21.3304 25.333 19.2108 25.333 17.0007C25.333 14.7905 24.455 12.6709 22.8922 11.1081C21.3294 9.54529 19.2098 8.66732 16.9996 8.66732ZM16.9996 12.0007C17.6563 12.0005 18.3065 12.1298 18.9131 12.3809C19.5198 12.6321 20.0711 13.0003 20.5354 13.4645C20.9998 13.9287 21.3682 14.4799 21.6196 15.0865C21.8709 15.6931 22.0004 16.3432 22.0005 16.9998C22.0006 17.6564 21.8714 18.3066 21.6202 18.9133C21.369 19.52 21.0008 20.0712 20.5366 20.5356C20.0724 21 19.5213 21.3684 18.9147 21.6197C18.3081 21.8711 17.6579 22.0005 17.0013 22.0007C15.6752 22.0007 14.4035 21.4739 13.4658 20.5362C12.5281 19.5985 12.0013 18.3267 12.0013 17.0007C12.0013 15.6746 12.5281 14.4028 13.4658 13.4651C14.4035 12.5274 15.6752 12.0007 17.0013 12.0007M25.7513 6.16732C25.1988 6.16732 24.6689 6.38681 24.2782 6.77751C23.8875 7.16821 23.668 7.69812 23.668 8.25065C23.668 8.80319 23.8875 9.33309 24.2782 9.72379C24.6689 10.1145 25.1988 10.334 25.7513 10.334C26.3038 10.334 26.8338 10.1145 27.2245 9.72379C27.6152 9.33309 27.8346 8.80319 27.8346 8.25065C27.8346 7.69812 27.6152 7.16821 27.2245 6.77751C26.8338 6.38681 26.3038 6.16732 25.7513 6.16732Z'
                fill='currentColor'
              />
            </svg>
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
