import React, { useLayoutEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iphoneFrame from '../assets/Iphone11.png';

gsap.registerPlugin(ScrollTrigger);

export default function FloatingPhone() {
  const phoneRef = useRef();
  const image1Ref = useRef();
  const image2Ref = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(image1Ref.current, { opacity: 1 });
      gsap.set(image2Ref.current, { opacity: 0 });

      const mm = gsap.matchMedia();

      mm.add('(max-width: 900px)', () => {
        gsap.set(phoneRef.current, { x: '0vw', y: '0vh', rotate: '0deg', scale: 1 });
      });

      mm.add('(min-width: 900px)', () => {
        gsap.set(phoneRef.current, { x: '15vw', y: '0vh', rotate: '-8deg', scale: 0.8 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: () => `+=${window.innerHeight * 1}`,
            scrub: true,
            pin: phoneRef.current,
          },
        });

        tl.to(phoneRef.current, { scale: 0.4, duration: 0.4, ease: 'power2.inOut' })
          .to(phoneRef.current, {
            x: '-39vw',
            y: '0vh',
            rotate: '0deg',
            scale: 0.8,
            duration: 1,
            ease: 'power2.inOut',
          })
          .to(image2Ref.current, { opacity: 1 }, '<');
      });

      return () => mm.revert();
    }, phoneRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={phoneRef}
      sx={{
        position: 'absolute',
        top: { md: '13%', lg: '13%', xl: '15%' },
        right: { md: '25%', lg: '25%', xl: '32%' },
        width: { xs: 200, md: '18vw', lg: '22vw', xl: '20vw' },
        height: { xs: 400, md: '36vw', lg: '40vw', xl: '37.5vw' },
        minWidth: { md: 220 },
        minHeight: { md: 440 },
        zIndex: 50,
        display: { xs: 'none', md: 'block' },
        pointerEvents: 'none',
        transform: 'translate(-50%, -10%) translateZ(0)',
        isolation: 'isolate',
      }}
    >
      {/* 🖼️ Image 1 */}
      <Box
        component="img"
        ref={image1Ref}
        src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800"
        alt="Image 1"
        sx={{ ...mediaStyle }}
      />

      {/* 🖼️ Image 2 */}
      <Box
        component="img"
        ref={image2Ref}
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
        alt="Image 2"
        sx={{ ...mediaStyle }}
      />

      {/* 📱 iPhone Frame */}
      <Box
        component="img"
        src={iphoneFrame}
        alt="iPhone Frame"
        sx={{
          width: '100%',
          height: '100%',
          zIndex: 52,
          position: 'absolute',
          top: 0,
          left: 0,
          transform: 'translateZ(0)',
        }}
      />
    </Box>
  );
}

const mediaStyle = {
  position: 'absolute',
  top: '3%',
  left: '6%',
  width: '88%',
  height: '94%',
  objectFit: 'cover',
  borderRadius: '1rem',
  transform: 'translateZ(0)',
};
