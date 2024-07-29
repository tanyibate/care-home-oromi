"use client";
import React from "react";
import Navbar from "../TopNavbar/index"
import Footer from "../Footer/index";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="mt-[56px] md:mt-[88px]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
