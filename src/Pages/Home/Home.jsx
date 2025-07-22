import React, { useEffect } from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import WondersSection from './WondersSection';
import FunSection from './FunSection';
import ShineSection from './ShineSection';
import FloatingPhone from '../../Components/FloatingPhone';
import gsap from 'gsap'; 
import HeartShapeParticles from '../../Components/Particles'
import BackgroundParticles from '../../Components/BackgroundParticles';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box } from '@mui/material';
import AnimatedBulb from '../../Components/AnimatedBulb'

gsap.registerPlugin(ScrollTrigger);

export default function Home() {


    return (
        <>
            {/* <BackgroundParticles />
                <HeartShapeParticles/> */}
            {/* <AnimatedBulb /> */}
            <HeroSection />
            <FeatureSection />
            <WondersSection />
            <FunSection />
            {/* <ShineSection /> */}
            <FloatingPhone />
        </>
    );
}
