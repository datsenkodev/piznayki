'use client';

import { useRef, useEffect } from 'react';

export default function Slider({ children, darkerScrollbar }) {
  const sliderRef = useRef(null);
  const scrollbarRef = useRef(null);
  const thumbRef = useRef(null);

  let isDraggingThumb = false;
  let isDraggingSlider = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDownThumb = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);

    isDraggingThumb = true;
    startX = clientX;
    scrollLeft = parseInt(thumbRef.current.style.left, 10) || 0;

    document.body.style.userSelect = 'none';
    thumbRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const handleMouseDownSlider = (e) => {
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);

    isDraggingSlider = true;
    startX = clientX;
    scrollLeft = sliderRef.current.scrollLeft;

    document.body.style.userSelect = 'none';
    e.preventDefault();
  };

  const handleMouseMoveThumb = (e) => {
    if (!isDraggingThumb) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - startX;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    const newLeft = Math.min(
      Math.max(0, scrollLeft + deltaX),
      scrollbar.clientWidth - thumb.offsetWidth,
    );

    thumb.style.left = `${newLeft}px`;

    const slider = sliderRef.current;
    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    slider.scrollLeft = (newLeft / (scrollbar.clientWidth - thumb.offsetWidth)) * scrollWidth;

    e.preventDefault();
  };

  const handleMouseMoveSlider = (e) => {
    if (!isDraggingSlider) return;

    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const deltaX = clientX - startX;

    sliderRef.current.scrollLeft = scrollLeft - deltaX;

    e.preventDefault();
  };

  const handleMouseUp = () => {
    isDraggingThumb = false;
    isDraggingSlider = false;
    document.body.style.userSelect = '';
    if (thumbRef.current) {
      thumbRef.current.style.cursor = 'grab';
    }
  };

  const updateThumbPosition = () => {
    const slider = sliderRef.current;
    const scrollbar = scrollbarRef.current;
    const thumb = thumbRef.current;

    if (!slider || !scrollbar || !thumb) return;

    const scrollWidth = slider.scrollWidth - slider.clientWidth;
    const scrollbarWidth = scrollbar.clientWidth - thumb.offsetWidth;

    const thumbWidth = (slider.clientWidth / slider.scrollWidth) * scrollbar.clientWidth;

    thumb.style.width = `${thumbWidth}px`;

    const thumbLeft = (slider.scrollLeft / scrollWidth) * scrollbarWidth;
    thumb.style.left = `${thumbLeft}px`;
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const thumb = thumbRef.current;

    let isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;

    if (isLargeScreen) {
      updateThumbPosition();

      // Add event listeners for thumb dragging
      thumb.addEventListener('mousedown', handleMouseDownThumb);
      document.addEventListener('mousemove', handleMouseMoveThumb, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);

      // Add event listeners for slider dragging
      slider.addEventListener('mousedown', handleMouseDownSlider);
      document.addEventListener('mousemove', handleMouseMoveSlider, { passive: false });
      document.addEventListener('mouseup', handleMouseUp);

      // Add touch events for both thumb and slider
      thumb.addEventListener('touchstart', handleMouseDownThumb);
      document.addEventListener('touchmove', handleMouseMoveThumb, { passive: false });
      document.addEventListener('touchend', handleMouseUp);

      slider.addEventListener('touchstart', handleMouseDownSlider);
      document.addEventListener('touchmove', handleMouseMoveSlider, { passive: false });
      document.addEventListener('touchend', handleMouseUp);

      // Sync thumb position with slider scroll
      slider.addEventListener('scroll', updateThumbPosition);

      // Recalculate thumb width on window resize
      const handleResize = () => {
        updateThumbPosition();
      };

      window.addEventListener('resize', handleResize);

      return () => {
        thumb.removeEventListener('mousedown', handleMouseDownThumb);
        document.removeEventListener('mousemove', handleMouseMoveThumb);
        document.removeEventListener('mouseup', handleMouseUp);

        slider.removeEventListener('mousedown', handleMouseDownSlider);
        document.removeEventListener('mousemove', handleMouseMoveSlider);
        document.removeEventListener('mouseup', handleMouseUp);

        thumb.removeEventListener('touchstart', handleMouseDownThumb);
        document.removeEventListener('touchmove', handleMouseMoveThumb);
        document.removeEventListener('touchend', handleMouseUp);

        slider.removeEventListener('touchstart', handleMouseDownSlider);
        document.removeEventListener('touchmove', handleMouseMoveSlider);
        document.removeEventListener('touchend', handleMouseUp);

        slider.removeEventListener('scroll', updateThumbPosition);

        window.removeEventListener('resize', handleResize);
      };
    } else {
      console.log(thumbRef);

      if (thumb) {
        thumb.style.width = '';
        thumb.style.left = '';
      }
      if (slider) {
        slider.style.scrollBehavior = '';
      }
    }
  }, []);

  return (
    <>
      <div className='container__right-sided'>
        <div className={`slider ${darkerScrollbar ? 'darker-scrollbar' : ''}`} ref={sliderRef}>
          <div className='slider__container'>{children}</div>
        </div>
      </div>
      <div className='container relative'>
        <div
          className={`custom-scrollbar ${darkerScrollbar ? 'darker-scrollbar' : ''}`}
          ref={scrollbarRef}>
          <div className='custom-thumb' ref={thumbRef}></div>
        </div>
      </div>
    </>
  );
}
