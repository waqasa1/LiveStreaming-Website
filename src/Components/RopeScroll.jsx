// import React, { useLayoutEffect, useRef } from 'react';
// import { Box } from '@mui/material';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import iphoneFrame from '../assets/Iphone11.png';

// gsap.registerPlugin(ScrollTrigger);

// export default function FloatingPhone() {
//     const phoneRef = useRef();
//     const video1Ref = useRef();
//     const video2Ref = useRef();
//     const video3Ref = useRef();
//     const video4Ref = useRef();
//     const imageRef = useRef();

//     useLayoutEffect(() => {
//         let ctx = gsap.context(() => {
//             gsap.set(video1Ref.current, { opacity: 1 });
//             gsap.set(video2Ref.current, { opacity: 0 });
//             gsap.set(video3Ref.current, { opacity: 0 });
//             gsap.set(video4Ref.current, { opacity: 0 });
//             gsap.set(imageRef.current, { opacity: 0 });

//             let mm = gsap.matchMedia();

//             mm.add("(max-width: 900px)", () => {
//                 gsap.set(phoneRef.current, { x: "0vw", y: "0vh", rotate: "0deg", scale: 1 });
//             });

//             mm.add("(min-width: 900px)", () => {
//                 gsap.set(phoneRef.current, { x: "20vw", y: "0vh", rotate: "0deg", scale: 1 });

//                 let tl = gsap.timeline({
//                     scrollTrigger: {
//                         trigger: document.body,
//                         start: "top top",
//                         end: "bottom-=360 bottom",
//                         scrub: true,
//                         pin: phoneRef.current,
//                     }
//                 });

//                 // Hero -> Feature
//                 tl.to(phoneRef.current, { x: "-30vw", y: "0vh", rotate: "-10deg", scale: 1.05 })
//                   .to(video1Ref.current, { opacity: 0 }, "<")
//                   .to(video2Ref.current, { opacity: 1 }, "<");

//                 // Feature -> Wonders
//                 tl.to(phoneRef.current, { x: "10vw", y: "5vh", rotate: "10deg", scale: 1 })
//                   .to(video2Ref.current, { opacity: 0 }, "<")
//                   .to(imageRef.current, { opacity: 1 }, "<");

//                 // Wonders -> Fun
//                 tl.to(phoneRef.current, { x: "-30vw", y: "5vh", rotate: "-15deg", scale: 1.08 })
//                   .to(imageRef.current, { opacity: 0 }, "<")
//                   .to(video3Ref.current, { opacity: 1 }, "<");

//                 // Fun -> Shine
//                 tl.to(phoneRef.current, { x: "20vw", y: "0vh", rotate: "0deg", scale: 1 })
//                   .to(video3Ref.current, { opacity: 0 }, "<")
//                   .to(video4Ref.current, { opacity: 1 }, "<");
//             });

//             return () => mm.revert();
//         }, phoneRef);

//         return () => ctx.revert();
//     }, []);

//     return (
//         <Box
//             ref={phoneRef}
//             sx={{
//                 position: 'absolute',
//                 top: '15%',
//                 left: '47%',
//                 transform: 'translate(-50%, -10%)',
//                 width: { xs: 200, md: 350 },
//                 height: { xs: 400, md: 600 },
//                 zIndex: 10,
//                 pointerEvents: 'none',
//                 display:{xs:'none',md:'block'}
//             }}
//         >
//             <Box component="video" ref={video1Ref}
//                  src="https://roccoexpert.com/static/media/v1.e4a07343f13a994a8e4b.mp4"
//                  autoPlay muted loop playsInline sx={videoStyle}/>
//             <Box component="video" ref={video2Ref}
//                  src="https://roccoexpert.com/static/media/v2.215ac884640c81e72f07.mp4"
//                  autoPlay muted loop playsInline sx={videoStyle}/>
//             <Box component="img" ref={imageRef}
//                  src="https://roccoexpert.com/static/media/fifth.a3a7983cce9cc69b7d02.png"
//                  alt="Wonders" sx={videoStyle}/>
//             <Box component="video" ref={video3Ref}
//                  src="https://roccoexpert.com/static/media/v3.37159be111d0212d3db6.mp4"
//                  autoPlay muted loop playsInline sx={videoStyle}/>
//             <Box component="video" ref={video4Ref}
//                  src="https://roccoexpert.com/static/media/v4.ed07a8c1602c1402a0a4.mp4"
//                  autoPlay muted loop playsInline sx={videoStyle} preload='auto'/>
//             <Box component="img" src={iphoneFrame}
//                  alt="iPhone mockup" sx={{ width: '100%', height: '100%', display: 'block' }}/>
//         </Box>
//     );
// }

// const videoStyle = {
//     position: 'absolute',
//     top: '3%',
//     left: '6%',
//     width: '88%',
//     height: '94%',
//     objectFit: 'cover',
//     borderRadius: '1rem',
//     zIndex: '-1'
// };