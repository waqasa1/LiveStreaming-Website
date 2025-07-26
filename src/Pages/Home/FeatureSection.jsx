import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import iphoneFrame from '../../assets/Iphone11.png';
import phoneStand from '../../assets/phonestand2.svg'; // Import your stand SVG

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const sectionRef = useRef();
  const textRef = useRef();
  const paraRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });

      gsap.from(paraRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'SVN-Gilroy',
        position: 'relative',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'flex-end' },
          justifyContent: 'space-between',
          textAlign: { xs: 'center', md: 'left' },
          position: 'relative',
        }}
      >
        {/* Phone Stand for md+ */}
        <Box
          component="img"
          src={phoneStand}
          alt="Phone Stand"
          sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute',
            bottom: '-250px',
            left: '6%',
            width: '380px',
            height: 'auto',
            zIndex: 1,
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
              zIndex: 0,
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
              zIndex: 1,
            }}
          />
        </Box>

        {/* Right Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'right' },
          }}
        >
          <Typography
            ref={textRef}
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '12vw', md: '6vw' },
              WebkitTextStroke: '1px black',
              background: 'linear-gradient(to bottom, white 0%, white 100%)',
              backgroundSize: '100% var(--bgHeight)',
              backgroundRepeat: 'no-repeat',
              lineHeight: { xs: '1.2', md: '5.5vw' },
              letterSpacing:'-5px',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
            }}
          >
            Explore trends worldwide
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
