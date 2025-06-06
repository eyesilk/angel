import { useEffect } from 'react';

export const useRemoveScroll = (isPopupOpen: boolean): void => {
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isPopupOpen]);
};
