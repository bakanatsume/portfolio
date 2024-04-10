"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Experience() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 2 }}
      className="h-screen"
    >
      <h1 className="font-bold text-5xl">Experience</h1>

      <div className="mt-40 w-2/3">
        <div>
          <h1 className="flex space justify-between ">
            <span className="font-bold text-3xl">React Developer</span>{" "}
            <span className="font-semi text-xl">Jan 2024-Present</span>
          </h1>
        </div>
        <h1 className="font-semi text-xl mt-2">
          Cities Troves Investmentm Greater London UK
        </h1>
        <hr className="border border-2 mt-4"></hr>
      </div>
      <div className="mt-12 w-2/3">
        <div>
          <h1 className="flex space justify-between ">
            <span className="font-bold text-3xl">React Developer</span>{" "}
            <span className="font-semi text-xl">Jan 2024-Present</span>
          </h1>
        </div>
        <h1 className="font-semi text-xl mt-2">
          Cities Troves Investmentm Greater London UK
        </h1>
        <hr className="border border-2 mt-4"></hr>
      </div>
      <div className="mt-12 w-2/3">
        <div>
          <h1 className="flex space justify-between ">
            <span className="font-bold text-3xl">React Developer</span>{" "}
            <span className="font-semi text-xl">Jan 2024-Present</span>
          </h1>
        </div>
        <h1 className="font-semi text-xl mt-2">
          Cities Troves Investmentm Greater London UK
        </h1>
        <hr className="border border-2 mt-4"></hr>
      </div>
    </motion.div>
  );
}
