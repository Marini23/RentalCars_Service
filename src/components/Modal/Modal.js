import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ isClose, children, isOpen }) => {
  useEffect(() => {
    const isCloseEscape = e => {
      if (e.code === 'Escape') {
        isClose();
      }
    };
    window.addEventListener('keydown', isCloseEscape);

    return () => {
      window.removeEventListener('keydown', isCloseEscape);
    };
  }, [isClose]);

  return isOpen && modalRoot
    ? createPortal(
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={isClose} // Close modal when clicking outside
        >
          <div
            style={{
              background: '#fff', // White background for the modal content
              padding: '40px',
              borderRadius: '24px',
            }}
          >
            {children}
          </div>
        </div>,
        modalRoot
      )
    : null;
};
