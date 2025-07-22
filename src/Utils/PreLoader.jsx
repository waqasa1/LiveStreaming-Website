import React, { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import logo from '../assets/logo.png';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(MotionPathPlugin);

export default function Preloader({ onComplete }) {
    const logoRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });

        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, ease: 'power2.out' }
        )
            .to(containerRef.current,
                { opacity: 0, duration: 1.5, delay: 1.5 }
            );

        gsap.to(logoRef.current, {
            duration: 2,
            repeat: -1,
            ease: "power1.inOut",
            motionPath: {
                path: [
                    { x: 0, y: 0 },
                    { x: 30, y: -30 },
                    { x: 60, y: 0 }
                ],
                curviness: 1.5,
                autoRotate: false
            },
            yoyo: true
        });


    }, [onComplete]);

    return (
        <Box
            ref={containerRef}
            sx={{
                width: '100vw',
                height: '100vh',
                background: 'linear-gradient(to right, #8F29D0, #6467DA, #0AEBEE)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'SVN-Gilroy'
            }}
        >
            <Box
                ref={logoRef}
                component="img"
                src={logo}
                alt="Rocco Live"
                sx={{
                    width: { xs: 150, md: 200 },
                    mb: 3
                }}
            />
            <Typography
                variant="h5"
                sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: { xs: '5vw', md: '2vw' }
                }}
            >
                New. Era. LiveStreaming.
            </Typography>

            {/* 👇 Preload your videos while preloader is active */}
            <Box sx={{ display: 'none' }}>
                <video src="https://roccoexpert.com/static/media/v1.e4a07343f13a994a8e4b.mp4" preload="auto" />
                <video src="https://roccoexpert.com/static/media/v2.215ac884640c81e72f07.mp4" preload="auto" />
                <video src="https://roccoexpert.com/static/media/v3.37159be111d0212d3db6.mp4" preload="auto" />
                <video src="https://roccoexpert.com/static/media/v4.ed07a8c1602c1402a0a4.mp4" preload="auto" />
                <video src="https://roccoexpert.com/static/media/about.1e621a45bbe9c1a49c6a.mp4" preload="auto" />
            </Box>
        </Box>
    );
}
