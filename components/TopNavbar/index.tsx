"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "../Menu";

const TopNavbar = () => {
  const [selectedItem, setSelectedItem] = React.useState("home");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleMenuItemClicked = (route: string) => {
    setSelectedItem(route);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="fixed top-0 w-full flex justify-between items-center gap-4 px-4 md:px-8 lg:px-8 xl:px-20 py-3 md:py-5 bg-white z-[1]">
        <Image
          src="/Logo/logo.svg"
          alt="logo"
          className="w-20 h-8 md:w-32 md:h-12"
          width={132}
          height={55}
        />

        <div className="hidden lg:flex gap-6 justify-center items-center w-fit">
          <Link href="/">
            <p
              onClick={() => handleMenuItemClicked("home")}
              className={`font-inter text-base cursor-pointer ${selectedItem === "home" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
            >
              Home
            </p>
          </Link>
          <p
            onClick={() => {
              handleMenuItemClicked("about");
              scrollToSection("about");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "about" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            About Us
          </p>
          <p
            onClick={() => {
              handleMenuItemClicked("services");
              scrollToSection("services");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "services" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            Services{" "}
          </p>
          <p
            onClick={() => {
              handleMenuItemClicked("facilities");
              scrollToSection("facilities");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "facilities" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            Facilities
          </p>
          <p
            onClick={() => {
              handleMenuItemClicked("gallery");
              scrollToSection("galery");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "gallery" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            Gallery
          </p>
          <p
            onClick={() => {
              handleMenuItemClicked("testimonials");
              scrollToSection("testimonials");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "testimonials" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            Testimonials
          </p>
          <p
            onClick={() => {
              handleMenuItemClicked("contact");
              scrollToSection("contact");
            }}
            className={`font-inter text-base cursor-pointer ${selectedItem === "contact" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
          >
            Contact Us
          </p>
          <Link href="/donate">
            <p
              onClick={() => handleMenuItemClicked("donate")}
              className={`font-inter text-base cursor-pointer ${selectedItem === "donate" ? "border-b-2 border-[#008076] text-[#008076]" : "text-[#1F1C17]"}`}
            >
              Donate
            </p>
          </Link>
        </div>

        <button className="hidden lg:flex justify-center items-center text-white font-medium font-inter text-base bg-[#FBB040] shadow-md px-4 xl:px-8 py-3 rounded">
          Contact Us
        </button>
        <Image
          src="/icons/menu.svg"
          alt="logo"
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden cursor-pointer"
          width={27}
          height={27}
        />
      </div>
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default TopNavbar;
