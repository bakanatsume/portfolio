"use client";

import Hero from "@/app/ui/hero";
import MobileApp from "@/app/ui/mobileapp";
import { usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const pathname = usePathname();

  const projectDetailsFirst = [
    {
      id:1,
      title: "Gyapu Marketplace",
      desc: "Gyapu",
      imageUrl: "/gyapuapp.png",
    },
    {
      id:2,
      title: "Kick&Connect",
      desc: "Kick&Connect",
      imageUrl: "kickandconnectapp.png",
    },
    {
      id:3,
      title: "SchoolWorksPro",
      desc: "E-Learning Platform",
      imageUrl: "/schoolworksproapp.png",
    },
  ];
  const projectDetailsSecond = [
    {
      id:1,
      title: "Schoolworkspro",
      desc: "E-Learning Platform designed for schools,college and universities",
      imageUrl: "/schoolworkspro.png",
    },
    {
      id:2,
      title: "Digischoolglobal",
      desc: "E-learning Platform for everyone",
      imageUrl: "/digischoolglobal.png",
    },
    {
      id:3,
      title: "Digimedical",
      desc: "Booking system for doctors and medical facilities.",
      imageUrl: "/digimedical.png",
    },
  ];
  return (
    <div className="container mx-auto">
      <Hero />
      <MobileApp
        projectDetails={projectDetailsFirst}
        projectDetailsSecond={projectDetailsSecond}
      />
    </div>
  );
}
