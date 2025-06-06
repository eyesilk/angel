import { RefObject, useEffect } from 'react';

export const useModalOutside = (
  modalRef: RefObject<HTMLElement | null>,
  setIsModalOpen: () => void,
): void => {
  useEffect(() => {
    const onOutsideClick = (e: MouseEvent): void => {
        if (e.target && modalRef.current && !modalRef.current?.contains(e.target as Node)) {
          setIsModalOpen();
        }
      };
    

    document.addEventListener('mousedown', onOutsideClick);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
    };
  }, []);
};
