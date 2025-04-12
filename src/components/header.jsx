'use client';

import { useState } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo.png';

import Modal from './modal';
import Application from './applicationModal';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };
  return (
    <header className='header'>
      <div className='container header-container relative'>
        <div className='logo flex-[0_0_135px]'>
          <Link href='/'>
            <Image src={logo} alt='Пізнайки' width={135} />
          </Link>
        </div>
        <div className={`header-menu ${isHeaderOpen ? 'active' : ''}`}>
          <nav className='nav'>
            <ul className='nav-list'>
              <li>
                <Link href='/' className={`header-link ${pathname == '/' ? 'active' : ''}`}>
                  <span>Головна</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/kindergarten'
                  className={`header-link ${pathname == '/kindergarten' ? 'active' : ''}`}>
                  <span>Дитячий садок</span>
                </Link>
              </li>
              <li className='relative'>
                <p
                  className={`header-dropdown ${
                    isDropdownOpen ? 'dropdown-active' : ''
                  } header-link ${
                    pathname == '/middle-school' || pathname == '/primary-school' ? 'active' : ''
                  }`}
                  onClick={toggleDropdown}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      toggleDropdown();
                    }
                  }}>
                  <span>Школи</span>
                </p>
                <div className='dropdown-list'>
                  <Link
                    href='/middle-school'
                    className={`header-link ${pathname == '/middle-school' ? 'active' : ''}`}>
                    <span>Середня школа</span>
                  </Link>
                  <Link
                    href='/primary-school'
                    className={`header-link ${pathname == '/primary-school' ? 'active' : ''}`}>
                    <span>Початкова школа</span>
                  </Link>
                </div>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className={`header-link ${pathname == '/about-us' ? 'active' : ''}`}>
                  <span>Про нас</span>
                </Link>
              </li>
              <li>
                <Link href='/' className='header-link'>
                  Вакансії
                </Link>
              </li>
              <li>
                <Link
                  href='/contacts'
                  className={`header-link ${pathname == '/contacts' ? 'active' : ''}`}>
                  <span>Контакти</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Modal
            // dataClass='big-modal'
            trigger={<button className='accent-button'>Анкета для вступу</button>}>
            <Application />
          </Modal>
        </div>
        <div className={`nav-btn ${isHeaderOpen ? 'active' : ''}`} onClick={toggleHeader}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
