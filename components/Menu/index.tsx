"use client";
import React, { use, useMemo } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { on } from "events";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = React.useState("home");

  const pathName = router.pathname;

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
            onClose();
          }}
          className={`${selectedItem == name ? "font-bold text-[#008076]" : "text-[#1F1C17]"} cursor-pointer text-base font-inter`}
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
      href: "/#contact",
      title: "Contact Us",
      name: "contact",
    },
    {
      href: "/donate",
      title: "Donate",
      name: "donate",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      // Cleanup overflow property when component unmounts or isOpen changes
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleMenuItemClicked = (route: string) => {
    setSelectedItem(route);
  };

  return (
    <div
      className={`border-b border-[#E3E3E2] top-0 fixed z-50  right-0 w-full bg-white transform h-full  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex-col justify-center items-center w-full">
        <Image
          src="/icons/close-menu.svg"
          alt="logo"
          onClick={onClose}
          className="cursor-pointer absolute ml-4 mt-5"
          width={24}
          height={24}
        />
        <div className="flex justify-center items-center border-b border-[#E3E3E2] px-4 w-full py-5">
          <p className="text-[#1F1C17] text-xl font-inter font-bold">Menu</p>
        </div>
        <div className="w-full flex flex-col gap-8 py-8 px-4 justify-center items-center">
          {links.map((link, index) => (
            <MenuLink
              key={index}
              href={link.href}
              title={link.title}
              name={link.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
