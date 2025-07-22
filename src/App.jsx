import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Pages/AppRoutes";
import Lenis from '@studio-freight/lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Preloader from './Utils/PreLoader';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    return sessionStorage.getItem("preloaderShown") ? false : true;
  });

  useEffect(() => {
    // LENIS smooth scroll
    const lenis = new Lenis({
      lerp: 0.08,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the animation loop
    const rafId = requestAnimationFrame(raf);

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Cleanup function
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <BrowserRouter>
      {/* Uncomment when you want to use preloader */}
      {/* {showPreloader ? <Preloader /> : <AppRoutes />} */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;