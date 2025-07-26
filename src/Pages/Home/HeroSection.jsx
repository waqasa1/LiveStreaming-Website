import React, { useLayoutEffect, useRef } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import hand from '../../assets/hand2.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const handRef = useRef();
  const headingRef = useRef();
  const subTextRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hand animation
      gsap.set(handRef.current, { x: '100vw' });
      gsap.to(handRef.current, {
        x: '0vw',
        duration: 1.2,
        delay:0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: handRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Heading animation
      gsap.from(headingRef.current.children, {
        y: 100,
        opacity: 0,
        stagger: 0.2,
        delay:0.4,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      });

      // Subtext animation
      gsap.from(subTextRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subTextRef.current,
          start: 'top 85%',
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: { xs: 'auto', md: '100vh' },
        py: { xs: 6, md: 0 },
        display: 'flex',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'center',
        fontFamily: 'SVN-Gilroy',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: { xs: 0, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box sx={{ flex: 1, mt: { md: '-100px' } }}>
          {/* Main Heading Animation */}
          <Typography
            variant="h3"
            ref={headingRef}
            sx={{
              fontWeight: 900,
              fontSize: { xs: '10vw', md: '6vw' },
              color: 'white',
              WebkitTextStroke: '1px black',
              mb: 4,
              lineHeight: { xs: '1.2', md: '5vw' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box component="span">Discover</Box>
            <Box component="span">new era of</Box>
            <Box component="span">Live Streaming</Box>
          </Typography>

          {/* Subtext Animation */}
          <Typography
            variant="h6"
            ref={subTextRef}
            sx={{
              color: 'white',
              fontWeight: 800,
              mb: 4,
              fontSize: { xs: '4.5vw', md: '1.2vw' },
              maxWidth: { xs: '90%', md: '70%' },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Join millions worldwide sharing moments on Rocco Live.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent={{ xs: 'center', md: 'flex-start' }}
          >
            <Box
              component="img"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              sx={{ height: { xs: 40, md: 50 }, cursor: 'pointer' }}
            />
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              sx={{ height: { xs: 40, md: 50 }, cursor: 'pointer' }}
            />
          </Stack>
        </Box>
      </Container>

      {/* 👇 Animated Hand */}
      {/* <Box
        component="img"
        ref={handRef}
        src={hand}
        alt="Hand Holding Phone"
        sx={{
          position: 'absolute',
          userSelect:'none',
          pointerEvents:'none',
          top: { md: '-30%' },
          left: { md: '49%' },
          width: { xs: 150, md: 1000 },
          zIndex: 9,
          display: { xs: 'none', md: 'block' },
        }}
      /> */}
    </Box>
  );
}
