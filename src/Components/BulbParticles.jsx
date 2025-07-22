import React, { useEffect, useState, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"

// Use React.forwardRef to allow parent components to pass a ref to the group
const BulbParticles = React.forwardRef(({ bulbUrl, scale = 0.9 }, ref) => {
  const { scene } = useGLTF(bulbUrl)
  const [positions, setPositions] = useState([])
  const meshRefs = useRef([])
  const originalPositions = useRef([]) // Store original position for return

  useEffect(() => {
    if (!scene) return
    
    const points = []
    scene.updateMatrixWorld(true)
    scene.traverse((child) => {
      if (child.isMesh) {
        const geometry = child.geometry.clone()
        geometry.applyMatrix4(child.matrixWorld)
        const posAttr = geometry.attributes.position
        for (let i = 0; i < posAttr.count; i += 1) {
          const vertex = new THREE.Vector3().fromBufferAttribute(posAttr, i)
          points.push(vertex)
        }
      }
    })
    
    if (points.length === 0) return
    
    const center = new THREE.Box3().setFromPoints(points).getCenter(new THREE.Vector3())
    const centered = points.map((p) => p.sub(center))
    setPositions(centered)
    originalPositions.current = centered.map((p) => p.clone()) // Store originals
  }, [scene])

  useFrame(({ mouse, camera }) => {
    if (!ref?.current) return
    
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2(mouse.x, mouse.y)
    raycaster.setFromCamera(pointer, camera)
    const hoverPoint = new THREE.Vector3()
    raycaster.ray.at(8, hoverPoint)

    // Transform hover point to group's local space
    const localHoverPoint = ref.current.worldToLocal(hoverPoint.clone())

    // 1. Detect if cursor is inside bulb (via proximity to original particles)
    let cursorInside = false
    const cursorProximityThreshold = 0.8
    let nearbyCount = 0
    for (let i = 0; i < originalPositions.current.length; i++) {
      if (localHoverPoint.distanceTo(originalPositions.current[i]) < cursorProximityThreshold) {
        nearbyCount++
        if (nearbyCount >= 10) {
          cursorInside = true
          break
        }
      }
    }

    // 2. Find closest particles (only if cursor inside)
    const closestParticles = []
    if (cursorInside) {
      meshRefs.current.forEach((mesh, i) => {
        if (!mesh) return
        const distToCursor = mesh.position.distanceTo(localHoverPoint)
        const distToOrigin = mesh.position.distanceTo(originalPositions.current[i])
        if (distToOrigin < 1.5) {
          closestParticles.push({ mesh, i, distToCursor })
        }
      })
    }

    const activeIndices = new Set(
      closestParticles
        .sort((a, b) => a.distToCursor - b.distToCursor)
        .slice(0, 20)
        .map((p) => p.i),
    )

    // 3. Animate all particles
    meshRefs.current.forEach((mesh, i) => {
      if (!mesh) return
      const originalPos = originalPositions.current[i]
      if (!originalPos) return
      
      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.01

      if (activeIndices.has(i)) {
        const angle = (i / 20) * Math.PI * 2 // Unique angle for each particle
        const radius = 0.3 // How far from cursor center they should orbit
        const offset = new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          (Math.random() - 0.5) * 0.3, // small Z spread
        )
        const target = localHoverPoint.clone().add(offset)
        mesh.position.lerp(target, 0.15)
        mesh.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.2)
        mesh.material.color.lerp(new THREE.Color("white"), 0.2)
      } else {
        mesh.position.lerp(originalPos, 0.25)
        mesh.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
        mesh.material.color.lerp(new THREE.Color("red"), 0.1)
      }
    })
  })

  if (positions.length === 0) return null

  return (
    // Apply the forwarded ref directly to the group
    <group ref={ref} scale={[scale, scale, scale]}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos.clone()} ref={(el) => (meshRefs.current[i] = el)}>
          <boxGeometry args={[0.06, 0.06, 0.06]} />
          <meshBasicMaterial color="red" wireframe />
        </mesh>
      ))}
    </group>
  )
})

BulbParticles.displayName = 'BulbParticles'

export default BulbParticles