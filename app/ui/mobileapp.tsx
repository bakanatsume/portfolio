"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function MobileApp() {
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Element comes into view - animate to original position
      leftControls.start({ x: 0 }); // Comes in from the left
      rightControls.start({ x: 0 }); // Comes in from the right
    } else {
      // Element goes out of view - animate back to starting position
      leftControls.start({ x: "-100vw" }); // Moves back out to the left
      rightControls.start({ x: "100vw" }); // Moves back out to the right
    }
  }, [leftControls, inView, rightControls]);

  return (
    <div ref={ref} className="w-full mt-20">
      <h1 className="text-3xl font-bold ">Mobile Application</h1>
      <div className="grid grid-cols-2">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={leftControls}
          transition={{ type: "spring", stiffness: 30 }}
          className="m-4 p-8 text-white"
        >
          <div className="grid grid-rows-1 mt-10">
            <div
              className="flex h-screen p-2 bg-cover w-4/5  hover:cursor-pointer hover:opacity-50 "
              style={{ backgroundImage: "url('/gyapu.jpeg')" }}
            >
              <p className="flex text-black text-3xl font-bold justify-center  items-end opacity-0 hover:opacity-50 transition ease-in-out delay-200 hover:scale-100 duration-300">
                Gyapu (E-commerce Application)
              </p>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-rows-1 mt-40">
          <motion.div
            initial={{ x: "100vw" }}
            animate={rightControls} // Use the same leftControls for synchronized animation
            transition={{ type: "spring", stiffness: 30 }}
            className="m-4 p-8 bg-[#F0F8FF]text-white"
          >
            <div className="grid grid-rows-1 mt-10">
              <div
                className="flex h-screen p-2 bg-cover w-4/5  hover:cursor-pointer hover:opacity-50 "
                style={{ backgroundImage: "url('/kickandconnect.jpg')" }}
              >
                <p className="flex text-black text-3xl font-bold justify-center  items-end opacity-0 hover:opacity-50 transition ease-in-out delay-200 hover:scale-100 duration-300">
                  Kick&Connect (Football Application)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
