import React, { useLayoutEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iphoneFrame from '../assets/Iphone11.png';
import hand from '../assets/hand4.webp';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingPhone() {
  const phoneRef = useRef();
  const video1Ref = useRef();
  const video2Ref = useRef();
  const handRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(video1Ref.current, { opacity: 1 });
      gsap.set(video2Ref.current, { opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add('(max-width: 900px)', () => {
        gsap.set(phoneRef.current, {
          x: '0vw', y: '0vh', rotate: '0deg', scale: 1
        });
      });

      mm.add('(min-width: 900px)', () => {
        gsap.set(phoneRef.current, {
          x: '20vw', y: '0vh', rotate: '-10deg', scale: 1
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'top+=800',
            scrub: true,
            pin: phoneRef.current,
          },
        });

        tl.to(phoneRef.current, {
          scale: 0.5,
          duration: 0.4,
          ease: 'power2.inOut'
        })

          .to(phoneRef.current, {
            x: '-30vw',
            y: '0vh',
            rotate: '0deg',
            scale: 1,
            duration: 1,
            ease: 'power2.inOut'
          })

          .to(video2Ref.current, { opacity: 1 }, '<');
      });

      return () => mm.revert();
    }, phoneRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ✋ Hand - static, not animated */}
      <Box
        component="img"
        ref={handRef}
        src={hand}
        alt="Hand Holding Phone"
        sx={{
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
          top: { md: '10%' },
          right: { md: 0 },
          width: { xs: 150, md: 600 },
          zIndex: 9,
          display: { xs: 'none', md: 'block' },
        }}
      />

      {/* 📱 Phone Container */}
      <Box
        ref={phoneRef}
        sx={{
          position: 'absolute',
          top: '15%',
          left: '48%',
          transform: 'translate(-50%, -10%)',
          width: { xs: 200, md: 320 },
          height: { xs: 400, md: 600 },
          zIndex: 10,
          display: { xs: 'none', md: 'block' },
          pointerEvents: 'none',
        }}
      >
        {/* 🎥 Video 1 */}
        <Box
          component="video"
          ref={video1Ref}
          src="https://roccoexpert.com/static/media/v1.e4a07343f13a994a8e4b.mp4"
          autoPlay muted loop playsInline
          sx={videoStyle}
        />

        {/* 🎥 Video 2 */}
        <Box
          component="video"
          ref={video2Ref}
          src="https://roccoexpert.com/static/media/v2.215ac884640c81e72f07.mp4"
          autoPlay muted loop playsInline
          sx={videoStyle}
        />

        {/* 📱 iPhone Frame */}
        <Box
          component="img"
          src={iphoneFrame}
          alt="iPhone Frame"
          sx={{
            width: '100%',
            height: '100%',
            zIndex: 10,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
      </Box>
    </>
  );
}

const videoStyle = {
  position: 'absolute',
  top: '3%',
  left: '6%',
  width: '88%',
  height: '94%',
  objectFit: 'cover',
  borderRadius: '1rem',
  zIndex: 8,
};
