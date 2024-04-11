"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Details() {
  return (
    <div className="h-screen mt-20">
      <div className="grid grid-cols-2 justify-center items-center mb-20">
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen"
          >
            <div className=" items-center justify-center">
              <Image
                src="/profile.png"
                alt="project screen"
                height={400}
                width={500}
              />
            </div>
          </motion.div>
        </div>

        <div className="">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen"
          >
            <h1 className="ml-2 text-4xl font-bold">I am, </h1>
            <p className="ml-2 text-xl">
              Dedicated to perpetually learning and staying adaptable to remain
              close to industry advancements. Currently serving as a part-time
              React Frontend Developer at Cities Troves Investment. Proven
              experience in devising and executing effective strategies to
              fulSill organizational objectives, honed during my tenure at Digi
              Technology as a Frontend Developer. As I aspire for continuous
              improvement, I am eager to further enhance my skills and knowledge
              through ongoing learning endeavors.
            </p>
            <div className="h-4"></div>
            <h1 className="ml-2 text-4xl font-bold">I am good at </h1>
            <div className="h-4"></div>
            <div className="flex space-x-3 space-y-3 flex-wrap">
              <div className="ml-3 mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/javascript.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>

                <p>JavaScript</p>
              </div>

              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/react.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                <div>React</div>
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/nodejs.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                NodeJs
              </div>
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
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/sql.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                SQL
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/mongodb.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                MongoDB
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/tailwind.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                    className="bg-sky"
                  />
                </div>
                Tailwind
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/python.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                Python
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/bootstrap.png"}
                    height={30}
                    width={30}
                    alt="javascript icon"
                  />
                </div>
                Bootstrap
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/numpy.png"}
                    height={30}
                    width={30}
                    alt="Numpy icon"
                  />
                </div>
                Numpy
              </div>
              <div className=" mt-3 flex border border-4 border-white rounded-3xl w-40 h-16 justify-center items-center shadow-xl font-bold text-semi">
                <div className="mr-2">
                  <Image
                    src={"/icons/pandas.png"}
                    height={30}
                    width={30}
                    alt="Pandas icon"
                  />
                </div>
                Pandas
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
