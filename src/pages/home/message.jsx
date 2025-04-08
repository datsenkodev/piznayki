'use client';
import { useEffect } from 'react';
import Image from 'next/image';

import triangle from 'public/images/icons/triangle.svg';
import puzzleYellow from 'public/images/icons/puzzle-yellow.svg';
import puzzleOrange from 'public/images/icons/puzzle-orange.svg';
import puzzlePiece from 'public/images/icons/puzzle-piece.svg';
import circle from 'public/images/icons/circle-yellow.svg';

import messageImage1 from 'public/images/message1.png';
import messageImage2 from 'public/images/message2.png';
import messageImage3 from 'public/images/message3.png';
import messageImage4 from 'public/images/message4.png';
import messageImage5 from 'public/images/message5.png';

export default function Message() {
  useEffect(() => {
    const section = document.querySelector('.message');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('in-view');
        } else {
          section.classList.remove('in-view');
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className='message'>
      <div className='container'>
        <div className='message-images'>
          <Image src={messageImage1} alt='Зображення дитини' className='message-image' />
          <Image src={messageImage2} alt='Зображення дитини' className='message-image' />
          <Image src={messageImage3} alt='Зображення дитини' className='message-image' />
          <Image src={messageImage4} alt='Зображення дитини' className='message-image' />
          <Image src={messageImage5} alt='Зображення дитини' className='message-image' />
        </div>
        <div className='message-text'>
          <Image aria-hidden src={triangle} alt='Трикутник' className='float' />
          <Image aria-hidden src={puzzleYellow} alt='Жовтий пазл' className='float' />
          <Image aria-hidden src={puzzleOrange} alt='Помаранчевий пазл' className='float' />
          <Image aria-hidden src={puzzlePiece} alt='Оранжевий шматочок пазлу' className='float' />
          <Image aria-hidden src={circle} alt='Жовте коло' className='float' />
          <h3>
            Любов не через <span>долю гаманця,</span> а через частинку маленького
          </h3>
          <h2 className='big-heading'>Сердечка</h2>
        </div>
      </div>
    </section>
  );
}
