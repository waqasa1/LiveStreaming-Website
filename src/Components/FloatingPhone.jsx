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

      // Different breakpoints for better responsiveness
      mm.add('(min-width: 900px) and (max-width: 1200px)', () => {
        gsap.set(phoneRef.current, {
          x: '15vw', y: '0vh', rotate: '-8deg', scale: 0.8
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: () => `+=${window.innerHeight * 1}`,
            scrub: true,
            pin: phoneRef.current,
          },
        });

        tl.to(phoneRef.current, {
          scale: 0.4,
          duration: 0.4,
          ease: 'power2.inOut'
        })
          .to(phoneRef.current, {
            x: '-39vw',
            y: '0vh',
            rotate: '0deg',
            scale: 0.8,
            duration: 1,
            ease: 'power2.inOut'
          })
          .to(video2Ref.current, { opacity: 1 }, '<');
      });

      mm.add('(min-width: 1200px) and (max-width: 1600px)', () => {
        gsap.set(phoneRef.current, {
          x: '18vw', y: '0vh', rotate: '-10deg', scale: 1
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: () => `+=${window.innerHeight * 1}`,
            scrub: true,
            pin: phoneRef.current,
          },
        });

        tl.to(phoneRef.current, {
          scale: 0.45,
          duration: 0.4,
          ease: 'power2.inOut'
        })
          .to(phoneRef.current, {
            x: '-41vw',
            y: '0vh',
            rotate: '0deg',
            scale: 1,
            duration: 1,
            ease: 'power2.inOut'
          })
          .to(video2Ref.current, { opacity: 1 }, '<');
      });

      mm.add('(min-width: 1600px)', () => {
        gsap.set(phoneRef.current, {
          x: '25vw', y: '0vh', rotate: '-10deg', scale: 1
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: () => `+=${window.innerHeight * 1}`,
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
      {/* ✋ Hand - positioned behind phone but above stand */}
      <Box
        component="img"
        ref={handRef}
        src={hand}
        alt="Hand Holding Phone"
        sx={{
          position: 'absolute',
          userSelect: 'none',
          pointerEvents: 'none',
          top: { 
            md: '10%',
            lg: '10%',
            xl: '10%'
          },
          right: { 
            md: '0%',
            lg: '0%',
            xl: '0%'
          },
          width: { 
            xs: 150, 
            md: '35vw',
            lg: '31vw',
            xl: '40vw'
          },
          maxWidth: {
            md: 500,
            lg: 550,
            xl: 600
          },
          minWidth: {
            md: 400
          },
          // CRITICAL: Higher than stand (2) but lower than phone (50+)
          zIndex: 9,
          display: { xs: 'none', md: 'block' },
          // Ensure smooth rendering
          transform: 'translateZ(0)',
        }}
      />

      {/* 📱 Phone Container - HIGHEST Z-INDEX for guaranteed top positioning */}
      <Box
        ref={phoneRef}
        sx={{
          position: 'absolute',
          top: { 
            md: '13%',
            lg: '15%',
            xl: '15%'
          },
          right: { 
            md: '25%',
            lg: '27%',
            xl: '32%'
          },
          width: { 
            xs: 200, 
            md: '18vw',
            lg: '16vw',
            xl: '20vw'
          },
          height: { 
            xs: 400, 
            md: '36vw',
            lg: '32vw',
            xl: '37.5vw'
          },
          maxWidth: {
            md: 280,
            lg: 250,
            xl: 320
          },
          maxHeight: {
            md: 560,
            lg: 530,
            xl: 600
          },
          minWidth: {
            md: 220
          },
          minHeight: {
            md: 440
          },
          // CRITICAL: Extremely high z-index to guarantee it's always on top
          zIndex: 50,
          display: { xs: 'none', md: 'block' },
          pointerEvents: 'none',
          // Force hardware acceleration and create new stacking context
          transform: 'translate(-50%, -10%) translateZ(0)',
          // Additional insurance for layering
          isolation: 'isolate',
        }}
      >
        {/* 🎥 Video 1 */}
        <Box
          component="video"
          ref={video1Ref}
          src="https://roccoexpert.com/static/media/v1.e4a07343f13a994a8e4b.mp4"
          autoPlay muted loop playsInline
          sx={{
            ...videoStyle,
            zIndex: 51, // Higher than container
          }}
        />

        {/* 🎥 Video 2 */}
        <Box
          component="video"
          ref={video2Ref}
          src="https://roccoexpert.com/static/media/v2.215ac884640c81e72f07.mp4"
          autoPlay muted loop playsInline
          sx={{
            ...videoStyle,
            zIndex: 51, // Higher than container
          }}
        />

        {/* 📱 iPhone Frame - HIGHEST of all */}
        <Box
          component="img"
          src={iphoneFrame}
          alt="iPhone Frame"
          sx={{
            width: '100%',
            height: '100%',
            zIndex: 52, // Highest z-index
            position: 'absolute',
            top: 0,
            left: 0,
            // Force new stacking context
            transform: 'translateZ(0)',
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
  transform: 'translateZ(0)', // Hardware acceleration
};