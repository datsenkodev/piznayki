'use client';

import { useState, useEffect, useRef } from 'react';

function ModalContent({ isOpen, onClose, children, dataClass }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal(); // Open the dialog
    } else {
      modalRef.current?.close(); // Close the dialog
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && e.target === modalRef.current) {
        onClose(); // Close the modal if the backdrop is clicked
      }
    };

    modalRef.current?.addEventListener('click', handleClickOutside);
    return () => {
      modalRef.current?.removeEventListener('click', handleClickOutside);
    };
  }, [onClose]);

  return (
    <dialog
      ref={modalRef}
      className={`modal ${dataClass ? dataClass : ''}`}
      onCancel={onClose} // Handle the Escape key to close the modal
    >
      {children}
      <button className='close-btn' onClick={onClose}>
        <span></span>
        <span></span>
      </button>
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
