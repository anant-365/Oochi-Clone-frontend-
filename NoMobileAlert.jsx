import React, { useEffect } from 'react';

const NoMobileAlert = () => {
  useEffect(() => {
    const checkMobile = () => {
      const viewportWidth = window.innerWidth;
      const mobileThreshold = 768;

      if (viewportWidth < mobileThreshold) {
        alert("This site is not responsive and optimized for mobile devices. Please use a desktop browser for the best experience.");
      }
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return null;
};

export default NoMobileAlert;
