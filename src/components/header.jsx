'use client';

import { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/images/logo.png';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHeaderOpen, setIsHeaderOpen] = useState(false);

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
                <Link href='/'>Головна</Link>
              </li>
              <li>
                <Link href='/kindergarten'>Дитячий садок</Link>
              </li>
              <li className='relative'>
                <p
                  className={`header-dropdown ${isDropdownOpen ? 'active' : ''}`}
                  onClick={toggleDropdown}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      toggleDropdown();
                    }
                  }}>
                  Школи
                </p>
                <div className='dropdown-list'>
                  <Link href='/middle-school'>Середня школа</Link>
                  <Link href='/primary-school'>Початкова школа</Link>
                </div>
              </li>
              <li>
                <Link href='/about-us'>Про нас</Link>
              </li>
              <li>
                <Link href='/vacancy'>Вакансії</Link>
              </li>
              <li>
                <Link href='/contacts'>Контакти</Link>
              </li>
            </ul>
          </nav>
          <button className='accent-button'>Анкета для вступу</button>
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
