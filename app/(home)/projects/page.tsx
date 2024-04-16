"use client";

import Hero from "@/app/ui/hero";
import MobileApp from "@/app/ui/mobileapp";
import React from "react";

export default function page() {

  const projectDetailsFirst = [
    {
      id:1,
      title: "Gyapu Marketplace",
      desc: "Gyapu",
      imageUrl: "./gyapuapp.png",
      url:'https://play.google.com/store/apps/details?id=com.gyapu.marketplace&hl=en&gl=US'
    },
    {
      id:2,
      title: "Kick&Connect (soon)",
      desc: "Kick&Connect",
      imageUrl: "./kickandconnectapp.png",
      url:'#'
    },
    {
      id:3,
      title: "SchoolWorksPro",
      desc: "E-Learning Platform",
      imageUrl: "./schoolworksproapp.png",
      url:'https://play.google.com/store/apps/details?id=np.edu.digitech.schoolworkspro&hl=en&gl=US'
    },
    {
      id:4,
      title: "KangenWater (soon)",
      desc: "Smart Drinking Water Facility",
      imageUrl: "./kangenwater.png",
      url:'#'
    },
  ];
  const projectDetailsSecond = [
    {
      id:1,
      title: "Schoolworkspro",
      desc: "E-Learning Platform designed for schools,college and universities",
      imageUrl: "./schoolworkspro.png",
      url:'https://schoolworkspro.com/'
    },
    {
      id:2,
      title: "Digischoolglobal",
      desc: "E-learning Platform for everyone",
      imageUrl: "./digischoolglobal.png",
      url:'https://digischoolglobal.com/'
    },
    {
      id:3,
      title: "Digimedical",
      desc: "Booking system for doctors and medical facilities.",
      imageUrl: "./digimedical.png",
      url:'https://app.digimedicalsewa.com/'
    },
    {
      id:4,
      title: "Authentifactor (soon)",
      desc: "Work Validation and Automation",
      imageUrl: "./authentifactor.png",
      url:'#'
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
