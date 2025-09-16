import React, { useLayoutEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, Avatar, Tooltip } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GlowingButton from '../../Utils/GlowingButton';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://images.pexels.com/photos/3776868/pexels-photo-3776868.jpeg',
  'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
  'https://images.pexels.com/photos/1581711/pexels-photo-1581711.jpeg',
];

const bubbleData = [
  { name: 'Ali 🎉', img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Sarah 😂', img: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'John 💬', img: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150' },
  { name: 'Emma 🥳', img: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150' },
];

// WondersSection Component
function WondersSection() {
  const sectionRef = useRef();
  const imagesRef = useRef([]);
  const [thrown, setThrown] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    if (thrown) return;

    gsap.to(imagesRef.current[0], {
      x: -350,
      y: -50,
      rotate: -15,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.to(imagesRef.current[1], {
      x: 0,
      y: 80,
      rotate: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.to(imagesRef.current[2], {
      x: 350,
      y: -50,
      rotate: 15,
      duration: 1.2,
      ease: 'power3.out',
    });

    setThrown(true);
  };

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '70vh',
          borderRadius: '2rem',
          backgroundColor: '#0e3b5b',
          padding: { xs: 4, md: 6 },
          boxShadow: '0 0 40px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '12vw', md: '6vw' },
            textAlign: 'center',
            background: 'linear-gradient(to bottom, white 0%, #ff6b6b 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 2,
          }}
        >
          <span>Capture </span>
          <span>Moments</span>
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: { xs: '5vw', md: '1.5vw' },
            mb: 4,
          }}
        >
          And share them on streamify
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: 300,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >
          {imageUrls.map((url, i) => (
            <Box
              key={i}
              component="img"
              src={`${url}?auto=compress&cs=tinysrgb&dpr=2&h=500`}
              alt={`Floating Pic ${i + 1}`}
              ref={(el) => (imagesRef.current[i] = el)}
              sx={{
                mt:0,
                width: { xs: 140, md: 400 },
                height: { xs: 100, md: 250 },
                objectFit: 'cover',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                position: 'absolute',
              }}
            />
          ))}
        </Box>

        {!thrown && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 0,
            }}
          >
            <Button
              onClick={handleClick}
              variant="contained"
              sx={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                backgroundColor: '#fff',
                color: '#0e3b5b',
                fontWeight: 700,
                fontSize: '1rem',
                textTransform: 'none',
                boxShadow: '0 0 20px rgba(255,255,255,0.3)',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              Click
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

// FunSection Component
function FunSection() {
  const sectionRef = useRef();
  const bubbleRefs = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate text elements when they come into view
      gsap.from('.fun-heading', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 100%',
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
          start: 'top 100%',
        },
      });

      // Animate bubbles
      bubbleRefs.current.forEach((bubble, i) => {
        if (bubble) {
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
                start: 'top 100%',
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
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: '70vh',
          borderRadius: '2rem',
          backgroundColor: '#2d1b69',
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
            height: '100%',
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

          {/* Text */}
          <Box sx={{ flex: 1 }}>
            <Typography
              className="fun-heading"
              variant="h3"
              sx={{
                fontWeight: 900,
                fontSize: { xs: '12vw', md: '6vw' },
                background: 'linear-gradient(to bottom, white 0%, #ff6b6b 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: { xs: '1.2', md: '5.5vw' },
                letterSpacing: '-5px',
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
            <Tooltip key={bubble.name} title={bubble.name} arrow placement="top">
              <Avatar
                ref={(el) => (bubbleRefs.current[i] = el)}
                src={bubble.img}
                sx={{
                  position: 'absolute',
                  width: 100,
                  height: 100,
                  top: `${15 + i * 18}%`,
                  left: i % 2 === 0 ? '-30px' : '360px',
                  boxShadow: '0px 0px 15px rgba(255,255,255,0.3)',
                  cursor: 'pointer',
                  zIndex: 0,
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

// Export individual components for separate use
export { WondersSection, FunSection };

// Main Component with proper stacking scroll effect
export default function StackingSections() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the WondersSection while FunSection slides up
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: '.wonders-section',
        pinSpacing: false,
      });

      // Slide FunSection up from below
      gsap.fromTo('.fun-section',
        {
          y: window.innerHeight,
        },
        {
          y: 150,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: '50% center',
            end: '60% center',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'relative',
        height: '200vh',
        marginBottom: '100px'
      }}
    >
      <Box
        className="wonders-section"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <WondersSection />
      </Box>

      <Box
        className="fun-section"
        sx={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          zIndex: 2,
        }}
      >
        <FunSection />
      </Box>
    </Box>
  );
}