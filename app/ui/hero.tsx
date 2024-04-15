"use client";

import { usePathname } from "next/navigation";
import React from "react";
import splitusingregex from "./splitusingregex";
import { motion } from "framer-motion";
import RotatingText from "./rotatingtext";

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
      <div>
        <div className="flex h-screen justify-center items-start flex-col space-y-2 items-center">
          <h1 className="text-6xl font-bold">Experience</h1>
        </div>
      </div>
    );
  } else if (path === "/projects") {
    // Placeholder for projects content
    return (
      <div>
        <div className="flex h-screen justify-center items-start flex-col space-y-2 items-center">
          <h1 className="text-6xl font-bold">Projects</h1>
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
          <h1 className="sm:text-2xl lg:text-6xl font-bold">Bipash Chhantyal</h1>
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
            <div className="flex border border-4 rounded-3xl w-[100px]  md:w-24 lg:w-36 lg:h-16 justify-center items-center shadow-xl font-bold lg:text-xl">
              Resume
            </div>
            <div className="flex border border-4 rounded-3xl w-[100px]  md:w-24  lg:w-36 lg:h-16 justify-center items-center shadow-xl font-bold lg:text-xl">
              Contact
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">

        <RotatingText/>
        </div>
      </div>
    );
  }
}
