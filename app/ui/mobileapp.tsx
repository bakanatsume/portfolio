"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
export interface ProjectDetailsSchema {
  id?: number;
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
  // const leftControls = useAnimation();
  // const rightControls = useAnimation();

  // const { ref, inView } = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     // Element comes into view - animate to original position
  //     leftControls.start({ x: 0 }); // Comes in from the left
  //     rightControls.start({ x: 0 }); // Comes in from the right
  //   } else {
  //     // Element goes out of view - animate back to starting position
  //     leftControls.start({ x: "-100vw" }); // Moves back out to the left
  //     rightControls.start({ x: "100vw" }); // Moves back out to the right
  //   }
  // }, [leftControls, inView, rightControls]);

  return (
    <div className="w-full mt-20">
      <div className="grid grid-cols-2 space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projectDetails.map((values, index) => (
            <div
              key={values.id || index}
              className="flex flex-col mt-10 h-screen border p-16 bg-[#] rounded-xl"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, hsla(213, 62%, 45%, 1) 0%, hsla(203, 89%, 71%, 1) 50%, hsla(0, 0%, 96%, 1) 100%)",
              }}
            >
              <p className="font-bold text-center text-2xl ">{values.title}</p>
              <div
                className="flex-grow p-2 bg-cover w-4/5 mx-auto hover:cursor-pointer hover:opacity-80"
                style={{
                  backgroundImage: `url(${values.imageUrl})`,
                  backgroundPosition: "center", // Center the background image within the div
                  backgroundSize: "contain", // Ensures the image fits within the container
                  backgroundRepeat: "no-repeat", // Prevents the image from repeating
                }}
              ></div>
              <div className=" self-end font-bold text-center text-2xl  mb-4">
                <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                  <div className="mr-2">
                    <Image
                      src={"/icons/flutter.png"}
                      height={30}
                      width={30}
                      alt="javascript icon"
                    />
                  </div>
                  Flutter
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-rows-1 mt-40 ">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {projectDetailsSecond.map((values, index) => (
              <div
                key={values.id || index}
                className="flex flex-col mt-10 h-screen border p-16 bg-[#] rounded-xl"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, hsla(233, 100%, 90%, 1) 0%, hsla(0, 0%, 89%, 1) 100%)",
                }}
              >
                <p className="font-bold text-center  text-2xl ">
                  {values.title}
                </p>
                <div
                  className="flex-grow p-2 bg-cover w-4/5 mx-auto hover:cursor-pointer hover:opacity-80"
                  style={{
                    backgroundImage: `url(${values.imageUrl})`,
                    backgroundPosition: "center", // Center the background image within the div
                    backgroundSize: "contain", // Ensures the image fits within the container
                    backgroundRepeat: "no-repeat", // Prevents the image from repeating
                  }}
                ></div>
                <div className=" self-end font-bold text-center text-2xl  mb-4">
                  <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                    <div className="mr-2">
                      <Image
                        src={"/icons/react.png"}
                        height={30}
                        width={30}
                        alt="javascript icon"
                      />
                    </div>
                    ReactJS
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
