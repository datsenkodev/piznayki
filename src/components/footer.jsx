import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo-big.svg';
import facebook from 'public/images/icons/facebook.svg';
import instagram from 'public/images/icons/instagram.svg';
import phone from 'public/images/icons/phone.svg';
import mail from 'public/images/icons/mail.svg';
import Vacancy from './vacancyModal';
import Modal from './modal';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-logo'>
          <Link href='/'>
            <Image src={logo} alt='Пізнайки' width={367} />
          </Link>
          <h2 className='footer-text'>
            Приватний заклад дошкільної освіти «Центр розвитку дитини «Пізнайки-Розвивайки» <br />
            м. Вишгород
          </h2>
        </div>
        <div className='flex flex-col justify-between gap-4'>
          <div className='flex flex-col items-center gap-4 order-2 lg:order-0 lg:flex-row'>
            <div className='footer-socials'>
              <Link href='https://www.facebook.com/Piznayki/' target='_blank'>
                <Image src={facebook} alt='Фейсбук школи' />
                <span>Facebook</span>
              </Link>
              <Link href='https://www.instagram.com/piznayki/' target='_blank'>
                <Image src={instagram} alt='Інстаграм школи' />
                <span>Instagram</span>
              </Link>
            </div>
            <div className='footer-contacts'>
              <Link href='tel:+380973383431'>
                <span>
                  <Image src={phone} alt='Контактний номер телефону' />
                </span>
                <span>+38 097 338 34 31</span>
              </Link>
              <Link href='mailto:piznayko123@gmail.com'>
                <span>
                  <Image src={mail} alt='Контактна адреса пошти' />
                </span>
                <span>piznayko123@gmail.com</span>
              </Link>
            </div>
          </div>
          <nav className='footer-nav'>
            <ul className='footer-list'>
              <li>
                <Link href={'/'} className='footer-link'>
                  Головна
                </Link>
              </li>
              <li>
                <Link href={'/about'} className='footer-link'>
                  Про нас
                </Link>
              </li>
              <li>
                <Modal trigger={<button className='footer-link'>Вакансії</button>}>
                  <Vacancy />
                </Modal>
              </li>
              <li>
                <Link href={'/contacts'} className='footer-link'>
                  Контакти
                </Link>
              </li>
              <li>
                <Link href={'/kindergarten'} className='footer-link'>
                  Дитячий садок
                </Link>
              </li>
              <li>
                <Link href={'/primary-school'} className='footer-link'>
                  Початкова школа
                </Link>
              </li>
              <li>
                <Link href={'/middle-school'} className='footer-link'>
                  Середня школа
                </Link>
              </li>
              <li>
                <Link href={'/tutor-center'} className='footer-link'>
                  Репетиторський центр
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
