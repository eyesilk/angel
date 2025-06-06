import { useEffect } from "react";

export const useScrollTo = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);
};
