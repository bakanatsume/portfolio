"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
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
        `h-1/2 border border-2 rounded-2xl shadow-lg sticky top-0 `,
        {
          "bg-gradient-to-b from-white to-gray-500": topGap === 14,
          "bg-gradient-to-b from-white to-gray-500 ":
            topGap === 24,
          " bg-gradient-to-b from-white to-gray-500 ":
            topGap === 32,
        }
      )}
      style={{ top: `${topGap}vh` }}
    >
      <div className="p-6">
        <h1 className="text-3xl font-bold ">{projectDetails.title}</h1>
        <h3>{projectDetails.summary}</h3>
        <div className="md:grid md:grid-cols-2 grid-flow-col ">
          <div>
            <p className="mt-10 text-justify">{projectDetails.description}</p>
          </div>
          <Link href={projectDetails.url ?? "#"} passHref>
            <Image
              src={
                projectDetails.imageUrl
                  ? projectDetails.imageUrl
                  : "/screen.jpeg"
              }
              alt="project screen"
              width={500}
              height={100}
              className="mx-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
