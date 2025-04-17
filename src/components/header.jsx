'use client';

import { useState, useRef, useEffect } from 'react';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo.png';

import { Modal } from './modal';
import Application from './applicationModal';
import Vacancy from './vacancyModal';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

  const dropdownRef = useRef(null);
  const headerRef = useRef(null);

  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleHeader = () => {
    setIsHeaderOpen(!isHeaderOpen);
  };

  const closeHeader = () => {
    setIsHeaderOpen(false);
  };

  useEffect(() => {
    const handleCloseDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleCloseHeader = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsHeaderOpen(false);
      }
    };

    document.addEventListener('click', handleCloseDropdown);
    document.addEventListener('click', handleCloseHeader);

    return () => {
      document.removeEventListener('click', handleCloseDropdown);
      document.removeEventListener('click', handleCloseHeader);
    };
  }, []);

  return (
    <header className='header' ref={headerRef}>
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
                <Link
                  href='/'
                  className={`header-link ${pathname == '/' ? 'active' : ''}`}
                  onClick={() => {
                    closeHeader();
                  }}>
                  <span>Головна</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className={`header-link ${pathname == '/about-us' ? 'active' : ''}`}
                  onClick={() => {
                    closeHeader();
                  }}>
                  <span>Про нас</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/kindergarten'
                  className={`header-link ${pathname == '/kindergarten' ? 'active' : ''}`}
                  onClick={() => {
                    closeHeader();
                  }}>
                  <span>Дитячий садок</span>
                </Link>
              </li>
              <li className='relative' ref={dropdownRef}>
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
                    className={`header-link ${pathname == '/middle-school' ? 'active' : ''}`}
                    onClick={() => {
                      closeHeader();
                      setIsDropdownOpen(false);
                    }}>
                    <span>Середня школа</span>
                  </Link>
                  <Link
                    href='/primary-school'
                    className={`header-link ${pathname == '/primary-school' ? 'active' : ''}`}
                    onClick={() => {
                      closeHeader();
                      setIsDropdownOpen(false);
                    }}>
                    <span>Початкова школа</span>
                  </Link>
                </div>
              </li>
              <li className='block lg:hidden'>
                <Link
                  href={'/tutor-center'}
                  className={`header-link ${pathname == '/tutor-center' ? 'active' : ''}`}
                  onClick={() => {
                    closeHeader();
                  }}>
                  <span>Репетиторський центр</span>
                </Link>
              </li>
              <li>
                <Modal trigger={<button className='header-link'>Вакансії</button>}>
                  <Vacancy />
                </Modal>
              </li>
              <li>
                <Link
                  href='/contacts'
                  className={`header-link ${pathname == '/contacts' ? 'active' : ''}`}
                  onClick={() => {
                    closeHeader();
                  }}>
                  <span>Контакти</span>
                </Link>
              </li>
            </ul>
          </nav>
          <Modal trigger={<button className='accent-button'>Анкета для вступу</button>}>
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
