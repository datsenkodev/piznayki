'use client';

import { useState, useEffect, useRef } from 'react';

function ModalContent({ isOpen, onClose, children, dataClass }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
      console.log('should add');
      document.body.classList.add('no-scroll');
    } else {
      modalRef.current?.close();
      console.log('should remove');
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        console.log('should remove');
        onClose();
        document.body.classList.remove('no-scroll');
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

export default function Modal({ trigger, children, dataClass }) {
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
