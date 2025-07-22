import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
// import gsap from 'gsap';
import iphoneFrame from '../../assets/Iphone11.png'; // adjust to your path

export default function ShineSection() {
    const wordRef = useRef();
    const words = ["friends", "family", "everyone"];

    // useEffect(() => {
    //     let tl = gsap.timeline({ repeat: -1 });
    //     words.forEach((word) => {
    //         tl.to(wordRef.current, {
    //             opacity: 0,
    //             duration: 0.5,
    //             onComplete: () => { wordRef.current.innerText = word; }
    //         })
    //         .to(wordRef.current, { opacity: 1, duration: 0.5 });
    //     });
    //     return () => tl.kill();
    // }, []);

    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'SVN-Gilroy',
                mb:{xs:'50px',md:'0px'}
            }}
        >
            <Container 
                maxWidth="lg"
                sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'center', md: 'stretch' },
                    justifyContent: 'space-between',
                    textAlign: { xs: 'center', md: 'left' }
                }}
            >
                {/* Mobile Phone (xs only) */}
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
                        src="https://roccoexpert.com/static/media/v4.ed07a8c1602c1402a0a4.mp4"
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

                {/* Text on left */}
                <Box sx={{ flex: 1 }}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 900,
                            fontSize: { xs: '12vw', md: '4vw' },
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'white',
                            WebkitTextStroke: '1px black',
                            mb: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'flex-start' },
                            gap: '0.5rem',
                        }}
                    >
                        <Box component="span">Make</Box>
                        <Box component="span" ref={wordRef}>friends</Box>
                        <Box component="span">Shine</Box>
                    </Typography>

                    <Typography 
                        variant="h6" 
                        sx={{ 
                            color: 'white', 
                            fontWeight: 800,
                            fontSize: { xs: '5vw', md: '1.5vw' },
                            maxWidth: { xs: '90%', md: '80%' },
                            mx: { xs: 'auto', md: 0 }
                        }}
                    >
                        Everyone deserves a fair chance to voice their thoughts and share their story.
                    </Typography>
                </Box>

                {/* Empty on right for desktop to push text left */}
                <Box sx={{
                    flex: 1,
                    display: { xs: 'none', md: 'block' }
                }} />
            </Container>
        </Box>
    );
}
