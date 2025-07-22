import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import iphoneFrame from '../../assets/Iphone11.png';

gsap.registerPlugin(ScrollTrigger);

export default function WondersSection() {
    const sectionRef = useRef();
    const textRef = useRef();
    const subTextRef = useRef();

    
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
                    position: 'relative'
                }}
            >
                {/* Mobile Phone (only xs-sm, on top) */}
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
                        alt="Capture wonders"
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

                {/* Text on left */}
                <Box sx={{ flex: 1, zIndex: 2 }}>
                    <Typography
                        ref={textRef}
                        variant="h3"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '12vw', md: '4vw' },
                            WebkitTextStroke: '1px black',
                            background: 'linear-gradient(to bottom, white 0%, white 100%)',
                            backgroundSize: '100% var(--bgHeight)',
                            backgroundRepeat: 'no-repeat',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            mb: 4
                        }}
                    >
                        Capture wonders in life
                    </Typography>
                    <Typography
                        ref={subTextRef}
                        variant="h6"
                        sx={{
                            color: 'white',
                            fontWeight: 800,
                            fontSize: { xs: '5vw', md: '1.5vw' },
                            maxWidth: { xs: '90%', md: '80%' },
                            mx: { xs: 'auto', md: 0 }
                        }}
                    >
                        Share the unforgettable with friends.
                    </Typography>
                </Box>

                {/* Stacked Cards on Right (md and up only) */}
                <Box
                    sx={{
                        flex: 1,
                        position: 'relative',
                        display: { xs: 'none', md: 'block' },
                        mt:{md:-10}
                    }}
                >
                    {[1, 2, 3].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'absolute',
                                top: `${index * 40}px`,
                                right: `${index * 20}px`,
                                width: 220,
                                height: 380,
                                borderRadius: 4,
                                background: 'linear-gradient(135deg, #ffffff1a, #ffffff0a)',
                                border: '1px solid #ffffff22',
                                backdropFilter: 'blur(6px)',
                                zIndex: 3 - index,
                                transform: `rotate(${index === 1 ? -1 : index === 2 ? 2 : 0}deg)`,
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                '&:hover': {
                                    transform: `scale(1.05) rotate(${index === 1 ? -1 : index === 2 ? 2 : 0}deg)`,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                                    zIndex: 5,
                                }
                            }}
                        >
                            <Box
                                component="img"
                                src={`https://roccoexpert.com/static/media/fifth.a3a7983cce9cc69b7d02.png`}
                                alt="card"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: 4
                                }}
                            />
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
