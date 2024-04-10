'use client'

import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const rightControls = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      // Element comes into view - animate to original position
      rightControls.start({ x: 0 }); // Comes in from the right
    } else {
      // Element goes out of view - animate back to starting position
      rightControls.start({ x: "100vw" }); // Moves back out to the right
    }
  }, [ inView, rightControls]);

  return (
    <div ref={ref} className="grid grid-cols-2 h-500 w-full  mt-10">
      <div></div>
      <motion.div
        initial={{ x: "100vw" }}
        animate={rightControls} // Use the same leftControls for synchronized animation
        transition={{ type: "spring", stiffness: 30 }}
        className="m-4 p-8 bg-[#F0F8FF]text-white"
      >
        <div className="mt-10">
          <h1 className="text-5xl font-bold">Leave a Message</h1>
          <form className="mt-10 ">
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner shadow-2xl"
                type="text"
                id="firstname"
                placeholder="Firstname"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Phone Number</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner "
                type="text"
                id="lastname"
                placeholder="Lastname"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner "
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Query</label>
              <textarea
                className="w-full h-24 px-3 py-2 border rounded-md shadow-inner "
                id="query"
                placeholder="Query"
              ></textarea>
            </div>

            <button
              className="bg-gray-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
