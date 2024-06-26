"use client";

import { usePathname } from "next/navigation";
import React from "react";
import splitusingregex from "./splitusingregex";
import { motion } from "framer-motion";
import RotatingText from "./rotatingtext";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const designanddeploy = "Design, Develop and Deploy";

  const projects = "Scroll Down to Browse projects";

  const designanddeployregex = splitusingregex(designanddeploy);
  const projectsregex = splitusingregex(projects);

  const path = usePathname();

  const charVariants = {
    hidden: { opacity: 0 },
    reveal: { opacity: 1 },
  };

  if (path === "/experience") {
    return (
      // <>
      //   <div className="relative w-full pt-[56.2225%] shadow-md mt-6 mb-3 overflow-hidden rounded-lg">
      //     <iframe
      //       className="absolute w-full h-full top-0 left-0 border-none p-0 m-0"
      //       loading="lazy"
      //       src="https://www.canva.com/design/DAGCjMlHzBE/LKppsrgJGbgivfH6DYZP9Q/view?embed"
      //       allowFullScreen
      //       allow="fullscreen"
      //     ></iframe>
      //   </div>
      //   <a
      //     href="https://www.canva.com/design/DAGCjMlHzBE/LKppsrgJGbgivfH6DYZP9Q/view?utm_content=DAGCjMlHzBE&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
      //     className="underline"
      //     target="_blank"
      //     rel="noopener"
      //   >
      //     PROJECTS
      //   </a>{" "}
      //   by Bipana Magar
      // </>
      // <div>
      //   <div className="container relative flex space justify-center items-center h-screen">
      //     <div className="flex-1">
      //       <h1 className="flex justify-center items-center md:font-bold md:text-2xl ">React Developer</h1>
      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <defs>
      //             <linearGradient
      //               id="pinkGradient"
      //               x1="0%"
      //               y1="0%"
      //               x2="100%"
      //               y2="100%"
      //             >
      //               <stop
      //                 offset="0%"
      //                 style={{ stopColor: "#ff8a8a", stopOpacity: 1 }}
      //               />
      //               <stop
      //                 offset="100%"
      //                 style={{ stopColor: "#ff577f", stopOpacity: 1 }}
      //               />
      //             </linearGradient>
      //           </defs>
      //           <path fill="url(#pinkGradient)">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <path fill="#F1C21B">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //     </div>
      //     <div className="flex-1">
      //     <h1 className="flex justify-center items-center md:font-bold md:text-2xl ">IOT </h1>
      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <defs>
      //             <linearGradient
      //               id="pinkGradient"
      //               x1="0%"
      //               y1="0%"
      //               x2="100%"
      //               y2="100%"
      //             >
      //               <stop
      //                 offset="0%"
      //                 style={{ stopColor: "#ff8a8a", stopOpacity: 1 }}
      //               />
      //               <stop
      //                 offset="100%"
      //                 style={{ stopColor: "#ff577f", stopOpacity: 1 }}
      //               />
      //             </linearGradient>
      //           </defs>
      //           <path fill="url(#pinkGradient)">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <path fill="#F1C21B">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //     </div>
      //     <div className="flex-1">
      //     <h1 className="flex justify-center items-center md:font-bold md:text-2xl ">Subsidy Manager </h1>

      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <defs>
      //             <linearGradient
      //               id="pinkGradient"
      //               x1="0%"
      //               y1="0%"
      //               x2="100%"
      //               y2="100%"
      //             >
      //               <stop
      //                 offset="0%"
      //                 style={{ stopColor: "#ff8a8a", stopOpacity: 1 }}
      //               />
      //               <stop
      //                 offset="100%"
      //                 style={{ stopColor: "#ff577f", stopOpacity: 1 }}
      //               />
      //             </linearGradient>
      //           </defs>
      //           <path fill="url(#pinkGradient)">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //       <div className="blob absolute w-1/3 h-1/3 ">
      //         <svg
      //           viewBox="-100 -100 200 200"
      //           xmlns="http://www.w3.org/2000/svg"
      //         >
      //           <path fill="#F1C21B">
      //             <animate
      //               attributeName="d"
      //               dur="10s"
      //               repeatCount="indefinite"
      //               values="M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z; M41.1,-47.6C48.8,-42.6,47.4,-25.4,48.1,-10.2C48.8,5,51.5,18.2,49.1,33.9C46.7,49.6,39,67.9,24.4,77.9C9.8,88,-11.8,89.8,-25.6,80.4C-39.4,71,-45.5,50.4,-48.6,33.5C-51.8,16.7,-52.2,3.7,-48.7,-7.3C-45.3,-18.4,-38.1,-27.6,-29.3,-32.3C-20.6,-37.1,-10.3,-37.5,3.2,-41.3C16.7,-45.2,33.5,-52.5,41.1,-47.6Z; M38,-50.1C46.1,-38.5,47.3,-23.5,54.3,-6.3C61.2,10.9,73.8,30.4,70.2,44.2C66.6,58.1,46.9,66.2,27.4,71.7C8,77.2,-11.1,80,-21.3,70.9C-31.5,61.8,-32.9,40.8,-41.4,24.6C-49.9,8.4,-65.6,-3,-69.2,-17.4C-72.9,-31.9,-64.6,-49.5,-51,-60.1C-37.5,-70.8,-18.8,-74.5,-1.9,-72.3C15,-70,29.9,-61.8,38,-50.1Z; M44,-54.7C51.9,-45.8,49.6,-27.1,52,-9.7C54.5,7.7,61.7,23.8,58.2,37.1C54.7,50.4,40.4,61.1,25.5,63.8C10.6,66.5,-4.9,61.4,-21.2,56.3C-37.4,51.2,-54.4,46.2,-64,34.5C-73.7,22.9,-76,4.5,-72.7,-12.6C-69.4,-29.7,-60.5,-45.6,-47.5,-53.6C-34.4,-61.5,-17.2,-61.5,0.4,-62C18,-62.5,36.1,-63.5,44,-54.7Z; M45.6,-52C57.2,-44.5,63.5,-28.4,68.2,-10.7C72.9,7.1,76.1,26.4,68.3,39C60.5,51.5,41.7,57.2,25.8,56.9C9.9,56.6,-3,50.3,-13.3,43.5C-23.5,36.7,-31,29.5,-35.3,20.9C-39.6,12.4,-40.7,2.5,-41.7,-10C-42.6,-22.5,-43.5,-37.6,-36.5,-46C-29.5,-54.3,-14.8,-55.8,1.1,-57.1C17,-58.4,33.9,-59.5,45.6,-52Z; M41.5,-53.4C50.7,-41.8,52.8,-25.7,51.4,-12.2C50.1,1.3,45.2,12.3,38.4,20.5C31.6,28.7,23,34.1,11.7,42.8C0.4,51.5,-13.5,63.5,-25.5,62.5C-37.5,61.4,-47.4,47.3,-56,32.4C-64.6,17.4,-71.8,1.7,-72.5,-16C-73.2,-33.7,-67.4,-53.5,-54.2,-64.4C-41,-75.3,-20.5,-77.2,-2.2,-74.6C16.2,-72,32.4,-64.9,41.5,-53.4Z;"
      //             ></animate>
      //           </path>
      //         </svg>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      // <div>
      //   <div className="flex h-screen justify-center items-start flex-col space-y-2 items-center">
      //     <h1 className="text-6xl font-bold">Experience</h1>
      //   </div>
      // </div>
      <div className="lg:grid lg:grid-cols-2 gap-4 justify-center items-center h-screen">
        <div className="relative w-full h-full">
          <Image
            src="./experienceboard.png"
            layout="fill"
            alt="Experience Board"
            objectFit="cover"
          />
        </div>
        <div className="hidden lg:block relative w-full h-full">
          <Image
            src="./laptop.png"
            layout="fill"
            alt="Laptop Display"
            objectFit="cover"
          />
        </div>
      </div>
      // {/* <div
      //   className=" h-screen p-2 bg-cover contrast-100"
      //   style={{
      //     backgroundImage: `url('/experienceboard.png')`,
      //     backgroundSize: "contain", // Ensures the image fits within the container
      //     backgroundRepeat: "no-repeat", // Prevents the image from repeating
      //   }}
      // ></div> */}
    );
  } else if (path === "/projects") {
    // Placeholder for projects content
    return (
      <div className="h-screen  md:grid md:grid-cols-2 items-center justify-center">
        <div className="grid cols-rows-3 space-y-4">
          <div className="liquid-effect-mobileapp h-40 border-double border-4 rounded-xl w-full bg-no-repeat bg-cover flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white mr-2"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12" y2="18"></line>
            </svg>
            <p className="text-white font-bold lg:text-2xl">
              MOBILE APPLICATION
            </p>
          </div>

          <div className="liquid-effect-web border-double border-4 rounded-xl h-40 w-full bg-no-repeat bg-cover flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-white mr-2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="3" x2="9" y2="9"></line>
            </svg>
            <p className="text-white font-bold lg:text-2xl">WEB APPLICATION</p>
          </div>
          <div className="liquid-effect-iot border-double border-4 rounded-xl h-40 w-full bg-no-repeat bg-cover flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-8 w-8 text-white mr-2"
            >
              <path d="M12,2A10,10,0,1,0,22,12,10.012,10.012,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,12,20Z"></path>
              <path d="M13,7H11v6h2Z"></path>
              <path d="M13,15H11v2h2Z"></path>
            </svg>
            <p className="text-white font-bold lg:text-2xl">IOT APPLICATION</p>
          </div>
        </div>
        <div className="grid grid-rows-2 justify-center items-center">
          <h1 className="text-6xl font-bold text-center">Projects</h1>
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.1 }}
            className="text-xl font-semibold"
          >
            {projectsregex.map((char) => (
              <motion.span
                key={char}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          {/* Project details here */}
        </div>
      </div>
    );
  } else if (path === "/contact") {
    // Placeholder for projects content
    return (
      <div>
        <div className="flex h-screen justify-center items-start flex-col space-y-2 items-center">
          <h1 className="text-6xl font-bold">Contact</h1>
          {/* Project details here */}
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-12 2xl:p-0 grid grid-cols-2">
        <div className="flex h-screen justify-center items-start flex-col space-y-2">
          <h1 className="sm:text-xm lg:text-xl">Hi, I am</h1>
          <h1 className="sm:text-2xl lg:text-6xl font-bold">
            Bipash Chhantyal
          </h1>
          <motion.h1
            initial="hidden"
            whileInView="reveal"
            transition={{ staggerChildren: 0.1 }}
            className="sm:text-xl lg:text-4xl font-semibold"
          >
            {designanddeployregex.map((char) => (
              <motion.span
                key={char}
                transition={{ duration: 0.5 }}
                variants={charVariants}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <div className="h-10"></div>
          <div className="flex space-x-4">
            <a href="https://bakanatsume.github.io/portfolio//cv.pdf" target="_blank">
              <div className="flex border border-4 rounded-3xl w-[100px]  md:w-24 lg:w-36 lg:h-16 justify-center items-center shadow-xl font-bold lg:text-xl">
                Resume
              </div>
            </a>
            <Link href="/contact">
              <div className="flex border border-4 rounded-3xl w-[100px]  md:w-24  lg:w-36 lg:h-16 justify-center items-center shadow-xl font-bold lg:text-xl">
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <RotatingText />
        </div>
      </div>
    );
  }
}
