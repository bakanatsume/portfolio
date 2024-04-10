"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  {
    name: "Projects",
    // href: '/events',
    href: "/projects",
  },
  { name: "Contact", href: "/contact" },
];
export default function Navbar() {
  const pathname = usePathname();

  return (

    <>
      <div className="w-2/6 right-16 fixed top-10 bg-slate-100 z-10">
        <div className="grid grid-cols-4 border border-2 rounded-lg border-slate-400 h-16 shadow-lg justify-center place-items-center font-bold">
          {links.map((navLink) => {
            return (
              <Link
                key={navLink.name}
                href={navLink.href}
                className={clsx("", {
                  "flex justify-center items-center border border-gray-300 shadow-lg border-2 rounded-lg p-4 w-30 h-10":
                    pathname === navLink.href,
                })}
              >
                <p className="hidden md:block">{navLink.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
