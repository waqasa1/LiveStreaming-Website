import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="bg-particles"
      init={particlesInit}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
      options={{
        fullScreen: { enable: false },
        detectRetina: true,
        background: { color: "transparent" },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["attract", "bubble"],
              parallax: {
                enable: true,
                force: -60,
                smooth: 20,
              },
            },
          },
          modes: {
            attract: {
              distance: 120,
              duration: 0.6,
              speed: 2,
            },
            bubble: {
              distance: 100,
              duration: 0.4,
              color: { value: "#ffffff" },
              size: 60,
              opacity: 1,
            },
          },
        },
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              area: 1000,
            },
          },
          color: { value: "#ffffff" },
          shape: {
            type: "image",
            image: [
              {
                src: "/cube1.svg",
                width: 100,
                height: 100,
              },
            ],
          },
          opacity: {
            value: 0.3,
            random: true,
          },
          size: {
            value: { min: 12, max: 60 },
            random: true,
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "bounce",
            },
          },
        },
      }}
    />
  );
}
