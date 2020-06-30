import React, { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import sun from './SVG/sun.svg';

gsap.registerPlugin(MotionPathPlugin);

const Sunrise = () => {
  let imgRef = useRef(null);
  // const h1Ref = useRef(0);
  // const timeline = useMemo(() => gsap.timeline({ paused: true }, []));
  // const [play, setPlay] = useState(false);

  useEffect(() => {
    gsap.to(imgRef, {
      duration: 5,
      repeat: 12,
      yoyo: true,
      ease: 'power1.inOut',
      motionPath: {
        path: [
          { x: 100, y: 50 },
          { x: 200, y: 0 },
          { x: 300, y: 100 },
        ],
        align: 'self',
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  // useEffect(() => {
  //   if (play) {
  //     gsap.play();
  //   } else {
  //     gsap.pause();
  //   }
  // }, [play]);
  return (
    <div className="sunrise">
      {/* <button ref={h1Ref} onClick={() => setPlay(!play)}>
        Click me to {play ? 'reverse' : 'play'}
      </button> */}
      <img
        src={sun}
        className="sun"
        alt="sunlogo"
        ref={(element) => {
          imgRef = element;
        }}
      />
    </div>
  );
};

export default Sunrise;
