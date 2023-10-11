
import { useEffect, useState , useRef } from 'react';

const ScrollButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const parentref = useRef(null)

  useEffect(() => {
    const moveball = ()=>{
      setScrollPosition(window.scrollY)
    }
    const handleScroll = () => {
      if(window.scrollY<=300)
      {
        window.addEventListener("scroll",moveball)
      }
      else{
        window.removeEventListener("scroll",moveball)
      }
    };

    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const translateYValue = (-Math.cos(scrollPosition / 100) * 30);
  const circleStyle = {
    transform: `translateY(${translateYValue}px)`,
    transition: 'transform 0.2s ease-in',
  };

  return (
    <div ref={parentref} className="relative">
      <button className="flex items-center bg-transparent m-10 mx-auto">
        <div className="box">
          <div className="circle" style={circleStyle}></div>
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
