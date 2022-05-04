
import React, { useRef, useState, useEffect, useCallback } from 'react';

const useHover = () => {
  const [style3D, setStyle3D] = useState({ transform: 'initial' });
  const inCardRef = useRef(null);
  const outCardRef = useRef(null);

  const handleMove = useCallback(e => {
    const article = inCardRef.current;
    const outCard = outCardRef.current;
    const y = outCard.offsetTop;
    const x = outCard.offsetLeft;
    const { width, height, } = article.getBoundingClientRect();
    const countX = x + width / 2;
    const countY = y + height / 2;
    const { pageX, pageY } = e;
    const dx = (countX - pageX) / (width / 2);
    const dy = (countY - pageY) / (height / 2);
    setStyle3D({ transform: `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`, transformOrigin: "center center -200" });
  }, []);

  const handleTouchMove = useCallback(e => {
    var touch = e.targetTouches[0];
    if (touch) {
      const article = inCardRef.current;
      const outCard = outCardRef.current;
      const y = outCard.offsetTop;
      const x = outCard.offsetLeft;
      const { width, height, } = article.getBoundingClientRect();
      const countX = x + width / 2;
      const countY = y + height / 2;
      const dx = (countX - touch.pageX) / (width / 2);
      const dy = (countY - touch.pageY) / (height / 2);
      setStyle3D({ transform: `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`, transformOrigin: "center center -200" });
    }

  }, []);

  const handleOut = useCallback(() => {
    setStyle3D({ transform: 'rotateX(0) rotateY(0)' });
  }, []);

  useEffect(() => {
    const article = inCardRef.current;
    if (article) {
      var passiveSupported = false;
      try {
        var options = Object.defineProperty({}, "passive", {
          get: function () {
            return passiveSupported = true;
          }
        });
        window.addEventListener("test", null, options);
      } catch (err) { }
      article.addEventListener('mousemove', handleMove);
      article.addEventListener('mouseout', handleOut);
      article.addEventListener("touchmove", handleTouchMove, passiveSupported ? { passive: true } : false);
      article.addEventListener("touchend", handleOut, passiveSupported ? { passive: true } : false);
    }
  });
  return [outCardRef, inCardRef, style3D];
}

function Card3D({ children }) {
  const [outCardRef, inCardRef, style3D] = useHover();
  return (
    <>
      <div className="container3D" ref={outCardRef}>
        <div className="card3D" ref={inCardRef} style={style3D}>
          {children}
        </div>
      </div>
    </>
  )
}
export default Card3D;

