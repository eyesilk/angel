import { Dispatch, RefObject, SetStateAction, useEffect } from 'react';

export const usePopupOutside = (
  popupRef: RefObject<HTMLElement | null>,
  btnRef: RefObject<HTMLButtonElement | null>,
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>,
): void => {
  const onOutsideClick = (e: MouseEvent): void => {
    if (
      e.target &&
      popupRef.current &&
      !popupRef.current?.contains(e.target as Node) &&
      btnRef &&
      !btnRef.current?.contains(e.target as Node)
    ) {
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onOutsideClick);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
    };
  }, []);
};
