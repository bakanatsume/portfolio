"use client";

import clsx from "clsx";
import Image from "next/image";
import React from "react";

export interface ProjectCardProps {
  title: string;
  summary?: string;
  description?: string;
  imageUrl?: string;
  url?: string;
}

export default function Card({
  topGap,
  projectDetails,
}: {
  topGap: number;
  projectDetails: ProjectCardProps;
}) {
  return (
    <div
      className={clsx(
        `h-screen border border-2 rounded-2xl shadow-lg sticky top-0 `,
        {
          "bg-gradient-to-r from-cyan-500 to-blue-500": topGap === 14,
          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500":
            topGap === 24,
          "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%":
            topGap === 32,
        }
      )}
      style={{ top: `${topGap}vh` }}
    >
      <div className="p-6">
        <h1 className="text-3xl font-bold ">{projectDetails.title}</h1>
        <h3>{projectDetails.summary}</h3>
        <div className="grid grid-cols-2 grid-flow-col ">
          <div>
            <p className="mt-10 text-justify">{projectDetails.description}</p>
          </div>
          <div className="flex">
            <Image
              src={
                projectDetails.imageUrl
                  ? projectDetails.imageUrl
                  : "/screen.jpeg"
              }
              alt="project screen"
              width={500}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
