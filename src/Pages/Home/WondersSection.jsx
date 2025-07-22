import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iphoneFrame from '../../assets/Iphone11.png';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://images.pexels.com/photos/3776868/pexels-photo-3776868.jpeg',
  'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
  'https://images.pexels.com/photos/1581711/pexels-photo-1581711.jpeg',
];

export default function WondersSection() {
  const sectionRef = useRef();
  const textRef = useRef();
  const imageWrapperRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
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

      const images = imageWrapperRef.current.querySelectorAll('.animated-img');

      imageWrapperRef.current.addEventListener('mouseenter', () => {
        gsap.to(images[0], {
          x: -100,
          y: -100,
          rotate: -10,
          duration: 0.6,
          ease: 'power2.out',
        });
        gsap.to(images[1], {
          x: 100,
          y: -100,
          rotate: 10,
          duration: 0.6,
          ease: 'power2.out',
        });
        gsap.to(images[2], {
          x: 120,
          y: 80,
          rotate: 8,
          duration: 0.6,
          ease: 'power2.out',
        });
      });

      imageWrapperRef.current.addEventListener('mouseleave', () => {
        gsap.to(images, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.6,
          ease: 'power2.inOut',
        });
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
        overflow: 'hidden',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'center', md: 'stretch' },
          justifyContent: 'space-between',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* Mobile phone mockup */}
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
            component="img"
            src="https://roccoexpert.com/static/media/fifth.a3a7983cce9cc69b7d02.png"
            alt="Mobile Capture"
            sx={{
              position: 'absolute',
              top: '3%',
              left: '6%',
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

        {/* Left text */}
        <Box sx={{ flex: 1, zIndex: 2 }}>
          <Typography
            ref={textRef}
            variant="h3"
            sx={{
              fontWeight: 900,
              fontSize: { xs: '12vw', md: '6vw' },
              WebkitTextStroke: '1px black',
              background: 'linear-gradient(to bottom, white 0%, white 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 4,
            }}
          >
            Capture moments in life
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              fontWeight: 800,
              fontSize: { xs: '5vw', md: '1.5vw' },
              maxWidth: { xs: '90%', md: '80%' },
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Share the unforgettable with friends.
          </Typography>
        </Box>

        {/* Floating Landscape Images */}
        <Box
          ref={imageWrapperRef}
          sx={{
            flex: 1,
            position: 'relative',
            height: 400,
            width: '100%',
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            gap: 2,
            cursor: 'pointer',
          }}
        >
          {imageUrls.map((url, i) => (
            <Box
              key={i}
              className="animated-img"
              component="img"
              src={`${url}?auto=compress&cs=tinysrgb&dpr=2&h=500`}
              alt={`Floating Pic ${i + 1}`}
              sx={{
                position: 'absolute',
                width: 300,
                height: 180,
                borderRadius: '1rem',
                objectFit: 'cover',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
