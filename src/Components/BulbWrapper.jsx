
// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber"
// import BulbParticles from "./BulbParticles"

// export default function RightBulbParticles() {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         right: 0,
//         top: 0,
//         width: "40vw",
//         height: "100vh",
//         zIndex: 10,
//         pointerEvents: "auto",
//         background: "transparent",
//       }}
//     >
//       <Canvas style={{ pointerEvents: "auto !important" }} camera={{ position: [0, 0, 8], fov: 35 }}>
//         <ambientLight intensity={1} />
//         <Suspense fallback={null}>
//           <BulbParticles bulbUrl="/models/lightbulb_low-poly.glb" />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }
