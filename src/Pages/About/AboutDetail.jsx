import React, { useLayoutEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import { gsap } from 'gsap';
import iphoneFrame from '../../assets/Iphone11.png';
import AboutHero from './AboutHero';

export default function About() {
    const sectionRef = useRef();
    const phoneRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Floating phone animation
            gsap.to(phoneRef.current, {
                rotate: 5,
                scale: 1.02,
                y: 10,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (

        <>
            <Box
                ref={sectionRef}
                sx={{
                    minHeight: '100vh', // ensures at least one full screen height
                    width: {md:'94vw'},
                    position: 'relative',
                    background: 'white',
                    borderTopLeftRadius: { xs: 0, md: '100px' },
                    borderTopRightRadius: { xs: 0, md: '100px' },
                    mx:'auto',
                    pt: { xs: 6, md: 8 },
                    pb: { xs: 6, md: 8 },
                }}
            >
                <Box
                    sx={{
                        height: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: '50px'
                    }}
                >
                    <Container sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        {/* Text */}
                        <Box sx={{
                            flex: 1,
                            textAlign: { xs: 'left', md: 'left' },
                            mb: { xs: 4, md: 0 },
                        }}>
                            <h2 style={{
                                fontFamily: 'SVN-Gilroy',
                                fontSize: 'calc(8vw - 41.6px)',
                                fontWeight: 800,
                                color: 'black'
                            }}>
                                Who we are
                            </h2>
                            <h2 style={{
                                fontFamily: 'SVN-Gilroy',
                                fontSize: 'calc(8vw - 41.6px)',
                                fontWeight: 800,
                                color: 'black',
                                whiteSpace: 'nowrap'
                            }}>
                                100k active users
                            </h2>
                            <p style={{
                                color: 'black',
                                maxWidth: '700px',
                                marginTop: '2rem',
                                fontSize: '1.2rem',
                                lineHeight: '1.6',
                                fontFamily: 'SVN-Gilroy',
                            }}>
                                Live Video stands as the premier short video application registered mainly in Singapore,
                                redefining the digital landscape with its innovative platform. Designed for a discerning audience,
                                Live Video offers a curated space for creators to produce, share, and engage with compelling short-form content.
                                Immerse yourself in a sophisticated blend of entertainment and culture as Live Video showcases the diverse talent
                                and narratives of the short videos and live streaming community. Our cutting-edge technology ensures a seamless
                                and immersive user experience, with features that empower creators and captivate audiences. Join us on this
                                transformative journey as we pioneer the next era of short video content in the world.
                            </p>
                        </Box>

                        {/* Phone */}
                        <Box
                            ref={phoneRef}
                            sx={{
                                flex: 1,
                                maxWidth: { xs: 200, lg: 300 },
                                height: { xs: 400, lg: 550 },
                                mx: { xs: 'auto', md: '0' },
                            }}
                        >
                            <Box
                                component="video"
                                src="https://roccoexpert.com/static/media/about.1e621a45bbe9c1a49c6a.mp4"
                                autoPlay muted loop playsInline
                                sx={{
                                    position: 'absolute',
                                    top: '3%',
                                    left: '6%',
                                    width: '88%',
                                    height: '94%',
                                    objectFit: 'cover',
                                    borderRadius: '1rem',
                                    zIndex: '-1'
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
                                }}
                            />
                        </Box>
                    </Container>
                </Box>
            </Box>

        </>
    );
}
