"use client";

import { usePathname } from "next/navigation";
import React from "react";

export default function Hero() {
  const path = usePathname();

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
          <h1 className="text-xl font-semi">Browse through my company projects</h1>
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
      <div>
        <div className="flex h-screen justify-center items-start flex-col space-y-2">
          <h1 className="text-xl">Hi, I am</h1>
          <h1 className="text-6xl font-bold">Bipash Chhantyal</h1>
          <h1 className="text-4xl font-semibold">Design, Develop and Deploy</h1>
          <div className="h-10"></div>
          <div className="flex space-x-4">
            <div className="flex border border-4 rounded-3xl w-36 h-16 justify-center items-center shadow-xl font-bold text-xl">
              Resume
            </div>
            <div className="flex border border-4 rounded-3xl w-36 h-16 justify-center items-center shadow-xl font-bold text-xl">
              Contact
            </div>
          </div>
        </div>
      </div>
    );
  }
}
