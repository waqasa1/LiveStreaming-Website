import React, { useLayoutEffect, useRef, useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

gsap.registerPlugin(ScrollTrigger);

export default function FullBulbParticlesFloating() {
  const [clip, setClip] = useState(true);
  const bulbRef = useRef();
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > window.innerHeight) {
        setClip(false); // remove clipPath after 100vh
      } else {
        setClip(true); // apply clipPath again if back up
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(max-width: 900px)", () => {
        gsap.set(bulbRef.current, {
          x: "0vw",
          y: "0vh",
          rotate: "0deg",
          scale: 1,
        });
      });

      mm.add("(min-width: 900px)", () => {
        gsap.set(bulbRef.current, {
          x: "10vw",
          y: "0vh",
          rotate: "0deg",
          scale: 1,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom-=360 bottom",
            scrub: true,
            pin: bulbRef.current,
          },
        });

        tl.to(bulbRef.current, {
          x: "-25vw",
          y: "-5vh",
          rotate: "-10deg",
          scale: 1,
        })
          .to(bulbRef.current, {
            x: "15vw",
            y: "-5vh",
            rotate: "10deg",
            scale: 1,
          })
          .to(bulbRef.current, {
            x: "-40vw",
            y: "-2vh",
            rotate: "-6deg",
            scale: 1,
          })
          .to(bulbRef.current, {
            x: "5vw",
            y: "-5vh",
            rotate: "0deg",
            scale: 1,
          });

        // Subtle opposite-direction cursor movement
        const handleMouseMove = (e) => {
          const xOffset = (e.clientX / window.innerWidth - 0.5) * -10; // small shift
          const yOffset = (e.clientY / window.innerHeight - 0.5) * -10;

          gsap.to(bulbRef.current, {
            xPercent: xOffset,
            yPercent: yOffset,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      });

      return () => mm.revert();
    }, bulbRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={bulbRef}
      sx={{
        position: "absolute",
        top: "10%",
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: 250, md: 600 },
        height: { xs: 400, md: 800 },
        zIndex: 1,
        pointerEvents: "none",
        overflow: "hidden",
        display: { xs: "none", md: "block" },
        background: "transparent",
        clipPath: clip
          ? "path('M250 0 C417 0, 500 167, 500 333 C500 417, 450 450, 400 517 C383 550, 367 583, 367 617 L367 650 L133 650 L133 617 C133 583, 117 550, 100 517 C50 450, 0 417, 0 333 C0 167, 83 0, 250 0 Z')"
          : "none",
        WebkitClipPath: clip
          ? "path('M250 0 C417 0, 500 167, 500 333 C500 417, 450 450, 400 517 C383 550, 367 583, 367 617 L367 650 L133 650 L133 617 C133 583, 117 550, 100 517 C50 450, 0 417, 0 333 C0 167, 83 0, 250 0 Z')"
          : "none",
      }}
    >
      <Particles
        id="bulb-particles"
        init={particlesInit}
        style={{ position: "absolute", width: "100%", height: "100%" }}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["attract", "bubble"], // both attract and color animation
              },
              resize: true,
            },
            modes: {
              attract: {
                distance: 120, // how close before they are attracted
                duration: 0.6,
                easing: "ease-out-quad",
                factor: 1,
                maxSpeed: 3,
                speed: 2,
              },
              bubble: {
                distance: 100,
                duration: 0.4,
                color: {
                  value: "#ffffff", // turns white
                },
                opacity: 1,
                size: 16, // make them a bit bigger
              },
            },
          },

          particles: {
            number: {
              value: 2000,
              density: { enable: true, area: 800 },
            },
            color: { value: "#ffffff" },
            shape: {
              type: "image",
              image: [{ src: "/cube.svg", width: 100, height: 100 }],
            },
            opacity: { value: 0.8, random: true },
            size: { value: { min: 8, max: 14 } },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              angle: { value: 360, offset: 0 },
              outModes: { default: "bounce" },
            },
          },
        }}
      />
    </Box>
  );
}
