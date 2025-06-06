import { useEffect } from 'react';

export const useDisableScroll = (isPopupOpen: boolean): void => {
  useEffect(() => {
    if (isPopupOpen && window.innerWidth <= 810) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);
};
