import React, { Children } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto">
      <div>{children}</div>
    </div>
  );
}
