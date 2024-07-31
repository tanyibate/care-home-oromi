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

  const MenuLink = ({
    href,
    title,
    name,
  }: {
    href: string;
    title: string;
    name: string;
  }) => {
    return (
      <Link href={href}>
        <p
          onClick={() => {
            handleMenuItemClicked(name);
            setIsMenuOpen(false);
          }}
          className={`${selectedItem === name ? "font-bold text-[#008076]" : "text-[#1F1C17]"} cursor-pointer text-base font-inter`}
        >
          {title}
        </p>
      </Link>
    );
  };

  const links = [
    {
      href: "/",
      title: "Home",
      name: "home",
    },
    {
      href: "/about",
      title: "About Us",
      name: "about",
    },
    {
      href: "/#services",
      title: "Services",
      name: "services",
    },
    {
      href: "/#facilities",
      title: "Facilities",
      name: "facilities",
    },
    {
      href: "/#gallery",
      title: "Gallery",
      name: "gallery",
    },
    {
      href: "/donate",
      title: "Donate",
      name: "donate",
    },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-screen max-w-[100vw] flex justify-between items-center gap-4 px-4 md:px-8 lg:px-8 xl:px-20 py-3 md:py-5 bg-white z-[1000] box-border">
        <Image
          src="/Logo/white-logo.svg"
          alt="logo"
          className="w-20 h-8 md:w-32 md:h-12"
          width={132}
          height={55}
        />

        <div className="hidden lg:flex gap-6 justify-center items-center w-fit">
          {links.map((link) => (
            <MenuLink key={link.name} {...link} />
          ))}
        </div>
        <Link href="/#contact">
          <button className="hidden lg:flex justify-center items-center text-white font-medium font-inter text-base bg-[#FBB040] shadow-md px-4 xl:px-8 py-3 rounded">
            Contact Us
          </button>
        </Link>

        <Image
          src={isMenuOpen ? "/icons/close-menu.svg" : "/icons/menu.svg"}
          alt="logo"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
