
import { useEffect, useState  } from 'react';

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const moveBall = () => {
    setScrollPosition(window.scrollY);
    setWindowSize(window.innerWidth);
  };

  const handleScroll = () => {
    moveBall();
  };

  const handleResize = () => {
    moveBall();
  };

  useEffect(() => {
    handleScroll(); // Initial check

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const dynamicValue = Math.min(scrollPosition, windowSize);
  const translateYValue = -Math.cos(dynamicValue / 100) * 30;
  const circleStyle = {
    transform: `translateY(${translateYValue}px)`,
    transition: 'transform 0.2s ease-in',
  };
  return (
    <div  className="relative">
      <button className="flex items-center bg-transparent m-10 mx-auto">
        <div className="box">
          <div className="circle" style={circleStyle}></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
