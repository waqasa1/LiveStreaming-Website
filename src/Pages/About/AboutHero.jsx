import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import first from '../../assets/1stplace.png'
import second from '../../assets/Secondplace.png'
import third from '../../assets/3rdplace.png'

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {
  const sectionRef = useRef();
  const crown1Ref = useRef();
  const crown2Ref = useRef();
  const crown3Ref = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 1st place - moves up significantly into view
      gsap.fromTo(crown1Ref.current,
        { y: 50 },
        {
          y: -200,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 2nd place - slight upward, mostly pinned
      gsap.fromTo(crown2Ref.current,
        { y: 100 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );

      // 3rd place - moves up dramatically
      gsap.fromTo(crown3Ref.current,
        { y: 80 },
        {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        height: '70vh',
        width: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden', // important to allow crowns to overflow
        fontFamily: 'SVN-Gilroy'
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: 'white',
          fontWeight: 900,
          fontSize: { xs: '12vw', md: '6vw' },
          zIndex: 2
        }}
      >
        About Us
      </Typography>

      <Box
        component="img"
        ref={crown1Ref}
        src={first}
        alt="1st Place"
        sx={{
          position: 'absolute',
          bottom: '10%', // start slightly outside
          left: '10%',
          width: { xs: 150, md: 250 },
          zIndex: 1
        }}
      />

      <Box
        component="img"
        ref={crown2Ref}
        src={second}
        alt="2nd Place"
        sx={{
          position: 'absolute',
          top: '5%',
          right: '10%',
          width: { xs: 150, md: 250 },
          zIndex: 1
        }}
      />

      <Box
        component="img"
        ref={crown3Ref}
        src={third}
        alt="3rd Place"
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '45%',
          width: { xs: 150, md: 250 },
          zIndex: 1
        }}
      />
    </Box>
  );
}
