import Hero from "@/app/ui/hero";
import MobileApp from "@/app/ui/mobileapp";
import React from "react";

export default function page() {
  return (
    <div className="container mx-auto">
      <Hero />
      <MobileApp />
    </div>
  );
}
