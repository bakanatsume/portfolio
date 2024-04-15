"use client";

import { motion } from "framer-motion";
import React from "react";
export default function Contact() {
  return (
    <div className=" grid grid-cols-2 h-500 w-full  mt-10">
      <div></div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen"
      >
        <div className="mt-10">
          <h1 className="text-5xl font-bold">Leave a Message</h1>
          <form
            className="mt-10 "
            action="https://formspree.io/f/myyrbqnr"
            method="POST"
          >
            <div className="mb-4">
              <label className="block mb-2">Full Name</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner shadow-2xl"
                type="text"
                id="fullname"
                name="fullname"
                placeholder="fullname"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Phone Number</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner "
                type="text"
                id="phone"
                name="phone"
                placeholder="phone"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Email</label>
              <input
                className="w-full h-16 px-3 py-2 border rounded-md shadow-inner "
                type="email"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2">Query</label> 
              <textarea
                className="w-full h-24 px-3 py-2 border rounded-md shadow-inner "
                id="query"
                name="query"
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
