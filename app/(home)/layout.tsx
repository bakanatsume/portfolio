import React, { Children } from "react";
import Navbar from "../ui/navbar";
import Logo from "../ui/logo";
import Footer from "../ui/footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Logo />
      <div>{children}</div>
      <hr className="bg-black h-1 mt-10" />
      <Footer />
    </div>
  );
}
