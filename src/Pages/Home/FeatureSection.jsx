import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import iphoneFrame from '../../assets/Iphone11.png';
import phoneStand from '../../assets/phonestand2.svg';

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const sectionRef = useRef();
  const textRef = useRef();
  const paraRef = useRef();
  const standRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from(paraRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Enhanced responsive phone stand placement with better positioning
      const mm = gsap.matchMedia();

      mm.add('(min-width: 900px) and (max-width: 1200px)', () => {
        gsap.set(standRef.current, {
          x: '8vw',
          y: '-8vh',
          scale: 0.9,
        });
      });

      mm.add('(min-width: 1200px) and (max-width: 1600px)', () => {
        gsap.set(standRef.current, {
          x: '2vw',
          y: '0',
          scale: 1,
        });
      });

      mm.add('(min-width: 1600px)', () => {
        gsap.set(standRef.current, {
          x: '3vw',
          y: '0',
          scale: 1.1,
        });
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: { xs: '100%', xl: '100%' },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'SVN-Gilroy',
        position: 'relative',
        // Ensure this section doesn't interfere with phone layering
        zIndex: 0,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-end' },
          justifyContent: 'space-between',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Phone Stand for md+ - CRITICAL: Lower z-index */}
        <Box
          component="img"
          ref={standRef}
          src={phoneStand}
          alt="Phone Stand"
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            bottom:'-35%',
            left: {xs:'0',xl:'-8%'},
            width: {
              md: '320px',
              lg: '360px',
              xl: '400px'
            },
            height: 'auto',
            // CRITICAL: Much lower z-index than phone (which is 10)
            zIndex: 2,
            // Ensure it doesn't capture pointer events
            pointerEvents: 'none',
            // Better positioning control
            transform: 'translateZ(0)', // Force hardware acceleration
          }}
        />

        {/* Left Spacer for md+ */}
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />

        {/* iPhone (Mobile Only) */}
        <Box
          sx={{
            position: 'relative',
            width: { xs: 180, md: 0 },
            height: { xs: 360, md: 0 },
            mx: 'auto',
            display: { xs: 'block', md: 'none' },
            mb: '50px',
            zIndex: 10, // High z-index for mobile
          }}
        >
          <Box
            component="video"
            src="https://roccoexpert.com/static/media/v2.215ac884640c81e72f07.mp4"
            autoPlay
            muted
            loop
            playsInline
            sx={{
              position: 'absolute',
              top: '3%',
              left: '4%',
              width: '88%',
              height: '94%',
              objectFit: 'cover',
              borderRadius: '1rem',
              zIndex: 8,
            }}
          />
          <Box
            component="img"
            src={iphoneFrame}
            alt="iPhone mockup"
            sx={{
              width: '100%',
              height: '100%',
              display: 'block',
              position: 'relative',
              zIndex: 9,
            }}
          />
        </Box>

        {/* Right Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'right' },
            marginLeft: { xl: '60%' },
            zIndex: 3, // Above stand but below phone
          }}
        >
          <Typography
            variant="h3"
            ref={textRef}
            sx={{
              fontWeight: 900,
              fontSize: { xs: '10vw', md: '6vw' },
              color: 'white',
              mb: 4,
              lineHeight: { xs: '1.2', md: '5.4vw' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
            }}
          >
            <Box component="span">Explore</Box>
            <Box component="span">trends</Box>
            <Box component="span">WorldWide</Box>
          </Typography>
          <Typography
            ref={paraRef}
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '5vw', md: '1.5vw' },
              mx: { xs: 'auto', md: 0 },
              textAlign: { md: 'end' }
            }}
          >
            Hop on the trends quickly and earn Diamonds.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}