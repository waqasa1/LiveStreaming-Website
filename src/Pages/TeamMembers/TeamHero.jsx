import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import first from '../../assets/svip1.png'
import second from '../../assets/svip2.png'
import third from '../../assets/svip3.png'

gsap.registerPlugin(ScrollTrigger);

export default function TeamHero() {
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
          y: -300,
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

      // 3rd place - moves up dramatically
      gsap.fromTo(crown3Ref.current,
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
        Team Members
      </Typography>

      <Box
        component="img"
        ref={crown1Ref}
        src={first}
        alt="1st Place"
        sx={{
          position: 'absolute',
          bottom: '10%', // start slightly outside
          left: '5%',
          width: { xs: 150, md: 350 },
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
          right: '5%',
          width: { xs: 150, md: 350 },
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
          bottom: {xs:'-15%',md:'-30%'},
          left: '45%',
          width: { xs: 150, md: 350 },
          zIndex: 1
        }}
      />
    </Box>
  );
}
