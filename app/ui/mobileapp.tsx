"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export interface ProjectDetailsSchema {
  id?: string;
  title?: string;
  desc?: string;
  imageUrl?: string;
}

export default function MobileApp({
  projectDetails,
  projectDetailsSecond,
}: {
  projectDetails: ProjectDetailsSchema[];
  projectDetailsSecond: ProjectDetailsSchema[];
}) {
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
      <div className="grid grid-cols-2">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={leftControls}
          transition={{ type: "spring", stiffness: 30 }}
          className="m-4"
        >
          {projectDetails.map((values, index) => (
            <div key={values.id || index} className="grid grid-rows-1 mt-10">
              <div
                className=" h-screen p-2 bg-cover w-4/5  hover:cursor-pointer hover:opacity-80 "
                style={{
                  backgroundImage: `url(${values.imageUrl})`,
                  // backgroundColor: "rgba(128, 128, 128, 1)", // Example: white background with 50% opacity
                  // backgroundBlendMode: "multiply", // Blends the color and image together
                  // backgroundPosition: "center",
                  backgroundSize: "contain", // Ensures the image fits within the container
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                }}
              >
                <p className=" font-bold text-center text-2xl">
                  {values.title}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-rows-1 mt-40">
          <motion.div
            initial={{ x: "100vw" }}
            animate={leftControls} // Use the same leftControls for synchronized animation
            transition={{ type: "spring", stiffness: 30 }}
            className="m-4 p-8 bg-[#F0F8FF]text-white"
          >
            {projectDetailsSecond.map((values, index) => (
              <div key={values.id || index} className="grid grid-rows-1 mt-10" >
                <div
                  className="h-screen p-2 bg-cover w-4/5  hover:cursor-pointer hover:opacity-80 "
                  style={{
                    backgroundImage: `url(${values.imageUrl})`,
                    // backgroundColor: "rgba(128, 128, 128, 1)", // Example: white background with 50% opacity
                    // backgroundBlendMode: "multiply", // Blends the color and image together
                    // backgroundPosition: "center",
                    backgroundSize: "contain", // Ensures the image fits within the container
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  }}
                >
                  <p className=" font-bold text-center text-2xl text-underline">
                    {values.title}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
