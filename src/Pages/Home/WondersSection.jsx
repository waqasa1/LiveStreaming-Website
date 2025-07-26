import React, { useLayoutEffect, useRef, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageUrls = [
  'https://images.pexels.com/photos/3776868/pexels-photo-3776868.jpeg',
  'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
  'https://images.pexels.com/photos/1581711/pexels-photo-1581711.jpeg',
];

export default function WondersSection() {
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

    // Animate images outward
    gsap.to(imagesRef.current[0], {
      x: -350, // further left
      y: -100,
      rotate: -15,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.to(imagesRef.current[1], {
      x: 0, // stays in center
      y: -50,
      rotate: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
    gsap.to(imagesRef.current[2], {
      x: 350, // further right
      y: -100,
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
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, md: 10 },
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
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            fontSize: { xs: '10vw', md: '3.5vw' },
            textAlign: 'center',
            color: 'white',
            mb: 2,
          }}
        >
          Capture Wonderful Moments
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
          And share them on Rocco
        </Typography>

        {/* Floating Images */}
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
                width: { xs: 140, md: 220 },
                height: { xs: 100, md: 160 },
                objectFit: 'cover',
                borderRadius: '1rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
                position: 'absolute',
              }}
            />
          ))}
        </Box>

        {/* Camera Click Button */}
        {!thrown && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: 5,
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
