import { Suspense, useRef, useLayoutEffect } from "react"
import { Canvas } from "@react-three/fiber"
import BulbParticles from "./BulbParticles"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedBulb() {
  const bulbGroupRef = useRef() // Ref for the Three.js group inside BulbParticles
  const containerRef = useRef() // Ref for the div that holds the Canvas

  useLayoutEffect(() => {
    // Add a small delay to ensure the Three.js scene is fully initialized
    const timer = setTimeout(() => {
      console.log("Timer fired - checking refs...")
      console.log("bulbGroupRef.current:", bulbGroupRef.current)
      console.log("containerRef.current:", containerRef.current)
      
      if (!bulbGroupRef.current || !containerRef.current) {
        console.log("Refs not available yet - retrying...")
        return
      }

      // Check if the ref is actually a Three.js group
      console.log("Is Three.js Object3D?", bulbGroupRef.current.isObject3D)
      console.log("Initial position:", bulbGroupRef.current.position)

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia()
        mm.add("(min-width: 900px)", () => {
          // Set initial state for the bulb group: start on the right but more visible
          gsap.set(bulbGroupRef.current.position, { x: 4, y: 0, z: 0 })
          gsap.set(bulbGroupRef.current.rotation, { x: 0, y: 0, z: 0 })
          gsap.set(bulbGroupRef.current.scale, { x: 0.9, y: 0.9, z: 0.9 })

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: document.body,
              start: "top top",
              end: "bottom bottom",
              scrub: 1, // Smooth scrubbing
              markers: false, // Disable markers for production
              invalidateOnRefresh: true, // Recalculate on window resize
            },
          })

          // Define animation stages for the bulb - better positioning for visibility
          // 0.0: Initial state (right side) - HeroSection
          // 0.25: Move to left - FeatureSection
          tl.to(bulbGroupRef.current.position, { x: -4, y: 1, z: 0, duration: 1 }, 0.25)
            .to(bulbGroupRef.current.rotation, { x: Math.PI * 0.1, y: Math.PI * 0.2, duration: 1 }, 0.25)
            .to(bulbGroupRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 1 }, 0.25)

            // 0.5: Move to right - WondersSection
            .to(bulbGroupRef.current.position, { x: 4, y: -1, z: 0, duration: 1 }, 0.5)
            .to(bulbGroupRef.current.rotation, { x: Math.PI * 0.3, y: Math.PI * 0.5, duration: 1 }, 0.5)
            .to(bulbGroupRef.current.scale, { x: 0.9, y: 0.9, z: 0.9, duration: 1 }, 0.5)

            // 0.75: Move to left - FunSection
            .to(bulbGroupRef.current.position, { x: -4, y: 0.5, z: 0, duration: 1 }, 0.75)
            .to(bulbGroupRef.current.rotation, { x: Math.PI * 0.1, y: Math.PI * 0.2, duration: 1 }, 0.75)
            .to(bulbGroupRef.current.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 1 }, 0.75)

            // 1.0: Move to center - ShineSection
            .to(bulbGroupRef.current.position, { x: 4, y: 0, z: 0, duration: 1 }, 1.0)
            .to(bulbGroupRef.current.rotation, { x: 0, y: 0, z: 0, duration: 1 }, 1.0)
            .to(bulbGroupRef.current.scale, { x: 1, y: 1, z: 1, duration: 1 }, 1.0)
        })
        
        // Mobile version
        mm.add("(max-width: 899px)", () => {
          gsap.set(bulbGroupRef.current.position, { x: 0, y: 0, z: 0 })
          gsap.set(bulbGroupRef.current.rotation, { x: 0, y: 0, z: 0 })
          gsap.set(bulbGroupRef.current.scale, { x: 0.7, y: 0.7, z: 0.7 })
        })
        
        return () => mm.revert() // Clean up matchMedia
      }, containerRef) // Context scope for GSAP
      
      return () => ctx.revert() // Clean up GSAP context
    }, 500) // Increased delay to ensure Three.js is ready

    return () => clearTimeout(timer)
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 10,
        pointerEvents: "none", // Make container non-interactive
        background: "transparent",
        overflow: "hidden",
      }}
    >
      <Canvas 
        style={{ pointerEvents: "auto" }} 
        camera={{ position: [0, 0, 10], fov: 40 }} // Adjusted camera for better view
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <BulbParticles bulbUrl="/models/lightbulb_low-poly.glb" ref={bulbGroupRef} />
        </Suspense>
      </Canvas>
    </div>
  )
}