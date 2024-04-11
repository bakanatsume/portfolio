import React from "react";
import Details from "../../ui/details";
import Hero from "@/app/ui/hero";
import Experience from "@/app/ui/experience";
import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("../../ui/details"), {
  ssr: false,
});

export default function page() {
  return (
    <div>
      <Hero />
      <DynamicHeader />
      <Experience />
    </div>
  );
}
