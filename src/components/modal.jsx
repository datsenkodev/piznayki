'use client';

import { useState, useEffect, useRef } from 'react';

function ModalContent({ isOpen, onClose, children, dataClass }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const body = document.body;
      const scrollY = window.scrollY;
      body.style.top = `-${scrollY}px`;
      body.style.position = 'fixed';

      document.documentElement.style.scrollBehavior = 'auto';

      modalRef.current?.showModal();
    } else {
      const body = document.body;
      const scrollY = Math.abs(parseInt(document.body.style.top || '0', 10));
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, scrollY);

      document.documentElement.style.scrollBehavior = 'smooth';

      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose();
      }
    };

    modalRef.current?.addEventListener('click', handleClickOutside);
    return () => {
      modalRef.current?.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <dialog ref={modalRef} className={`modal ${dataClass ? dataClass : ''}`} onCancel={onClose}>
      <button className='close-btn' onClick={onClose}>
        <span></span>
        <span></span>
      </button>
      {children}
    </dialog>
  );
}

export function Modal({ trigger, children, dataClass }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div onClick={openModal} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
        {trigger}
      </div>
      <ModalContent dataClass={dataClass} isOpen={isModalOpen} onClose={closeModal}>
        {children}
      </ModalContent>
    </>
  );
}
