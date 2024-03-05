import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Scroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    setIsScrolled(scrollPos > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-component ${isScrolled ? 'show' : ''}`}>
      <FontAwesomeIcon icon={faAngleUp} className="scroll-top-icon" onClick={scrollToTop} />
    </div>
  );
};

export default Scroll;
