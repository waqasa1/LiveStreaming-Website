import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography, Button, Avatar, Tooltip } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iphoneFrame from '../../assets/Iphone11.png';
import svip2 from '../../assets/svip2.png'
import GlowingButton from '../../Utils/GlowingButton'

gsap.registerPlugin(ScrollTrigger);

const bubbleData = [
  { name: 'Ali 🎉', img: svip2 },
  { name: 'Sarah 😂', img: svip2 },
  { name: 'John 💬', img: svip2 },
  { name: 'Emma 🥳', img: svip2 },
];

export default function FunSection() {
  const sectionRef = useRef();
  const bubbleRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text
      gsap.from('.fun-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      gsap.from('.fun-subtext', {
        opacity: 0,
        y: 30,
        delay: 0.5,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      });

      // Animate each bubble
      bubbleRefs.current.forEach((bubble, i) => {
        gsap.fromTo(
          bubble,
          {
            x: i % 2 === 0 ? -100 : 100,
            opacity: 0,
            y: 20,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top center',
            },
          }
        );

        gsap.to(bubble, {
          y: '+=10',
          repeat: -1,
          yoyo: true,
          duration: 2 + Math.random(),
          ease: 'sine.inOut',
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
      <Box
        sx={{
          width: '90%',
          height:'70vh',
          borderRadius: '2rem',
          backgroundColor: '#0e3b5b',
          padding: { xs: 4, md: 6 },
          boxShadow: '0 0 40px rgba(0,0,0,0.3)',
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
            position: 'relative',
          }}
        >
          {/* Button on left side */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <GlowingButton >Join the Fun</GlowingButton>

          </Box>

          {/* Phone for small screens */}
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
              src="https://roccoexpert.com/static/media/v3.37159be111d0212d3db6.mp4"
              autoPlay
              muted
              loop
              playsInline
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

          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              className='fun-heading'
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '12vw', md: '6vw' },
                WebkitTextStroke: '1px black',
                background: 'linear-gradient(to bottom, white 0%, white 100%)',
                backgroundSize: '100% var(--bgHeight)',
                backgroundRepeat: 'no-repeat',
                WebkitBackgroundClip: 'text',
                lineHeight: { xs: '1.2', md: '5.5vw' },
                letterSpacing: '-5px',
                WebkitTextFillColor: 'transparent',
                mb: 4,
                textAlign: { md: 'end' },
              }}
            >
              Have fun with friends
            </Typography>
            <Typography
              className="fun-subtext"
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 800,
                fontSize: { xs: '5vw', md: '1.5vw' },
                mx: { xs: 'auto', md: 0 },
                textAlign: { md: 'end' },
              }}
            >
              Share photos, videos, and messages to keep in touch.
            </Typography>
          </Box>

          {/* Floating Bubbles */}
          {bubbleData.map((bubble, i) => (
            <Tooltip
              key={bubble.name}
              title={bubble.name}
              arrow
              placement="top"
            >
              <Avatar
                ref={(el) => (bubbleRefs.current[i] = el)}
                src={bubble.img}
                sx={{
                  position: 'absolute',
                  width: 100,
                  height: 100,
                  top: `${1 + i * 23}%`,
                  left: i % 2 === 0 ? '0px' : '360px',
                  boxShadow: '0px 0px 15px rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  zIndex: '0',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                  transform: `rotate(${Math.random() * 20 - 10}deg) scale(${1 + Math.random() * 0.2})`,
                  animation: 'pulse 2s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(255,255,255,0.2)' },
                    '50%': { boxShadow: '0 0 25px rgba(255,255,255,0.5)' },
                  },
                }}
              />
            </Tooltip>
          ))}
        </Container>
      </Box>
    </Box>
  );
}
