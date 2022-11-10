import { useEffect, useState } from 'react';

export default function useNumber() {
  const [isMobile, setIsMobile] = useState(null);

  const calculateIsMobile = () => {
    if (window.innerWidth <= 768) return setIsMobile(true);

    setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener('resize', calculateIsMobile);

    calculateIsMobile();

    return window.removeEventListener('resize', setIsMobile);
  }, [isMobile]);

  return isMobile;
}
