import React from 'react';
import {useState, useEffect, cloneElement, useRef} from 'react';
import './style.css';

const Carousel = ({carouselItems, ...rest}) => {
  const [active, setActive] = useState(0);
  let scrollInterval = useRef(null);

  useEffect(() => {
    scrollInterval.current = setTimeout(() => {
      setActive((active + 1) % carouselItems.length);
    }, 9000);
    return () => {
      clearTimeout(scrollInterval.current);
    };
  });

  return (
    <div className="carousel">
      {carouselItems.map((item, index) => {
        const activeClass = active === index ? ' visible' : '';
        return cloneElement(item, {
          ...rest,
          className: `carousel-item${activeClass}`,
        });
      })}
    </div>
  );
};
export default Carousel;
