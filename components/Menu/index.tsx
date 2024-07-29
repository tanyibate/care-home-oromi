'use client';
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = React.useState("home");


  const pathName = router.pathname;

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
      {/* <div className="flex flex-col gap-6 justify-between items-start bg-white px-8 md:px-10 py-10">
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center h-full w-full">
          <Link
            href="/"
            className={`${
              pathName == "/" ? "text-[#C2B59B]" : "text-black"
            }  text-2xl md:text-3xl tracking-1 leading-6 font-helvatica font-medium cursor-pointer`}
          >
            HOME
          </Link>
          <Link
            href="/accomodation"
            className={`${
              pathName == "/accomodation" ? "text-[#C2B59B]" : "text-black"
            } text-2xl md:text-3xl tracking-1 leading-6 font-helvatica font-medium cursor-pointer`}
          >
            ACCOMODATION
          </Link>
          <Link
            href="/whatToDo"
            className={`${
              pathName == "/whatToDo" ? "text-[#C2B59B]" : "text-black"
            } text-2xl md:text-3xl tracking-1 leading-6 font-helvatica font-medium cursor-pointer`}
          >
            WHAT TO DO
          </Link>
          <Link
            href="/pricelist"
            className={`${
              pathName == "/pricelist" ? "text-[#C2B59B]" : "text-black"
            } text-2xl md:text-3xl tracking-1 leading-6 font-helvatica font-medium cursor-pointer`}
          >
            PRICELIST
          </Link>
          <Link
            href="/contact"
            className={`${
              pathName == "/contact" ? "text-[#C2B59B]" : "text-black"
            } text-2xl md:text-3xl tracking-1 leading-6 font-helvatica font-medium cursor-pointer`}
          >
            CONTACT
          </Link>
          <div className="flex justify-center items-center gap-4">
            <p className="text-black text-lg md:text-2xl tracking-1 leading-6 font-helvatica cursor-pointer">
              EN
            </p>
            <p className="text-black text-lg md:text-2xl tracking-1 leading-6 font-helvatica cursor-pointer">
              GR
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <p className="text-black text-base tracking-1 leading-6 font-helvatica">
            info@domenicormorani.gr
          </p>
          <p className="text-black text-base tracking-1 leading-6 font-helvatica">
            +30 6928 323994
          </p>
          <div className="flex gap-3 justify-start items-start">
            <Image src="/icons/fb-icon.svg" alt="_fb" width={24} height={24} />
            <Image
              src="/icons/insta-icon.svg"
              alt="_insta"
              width={24}
              height={24}
            />
          </div>
        </div>
        <Image
          className="hidden lg:block absolute bottom-[53px] right-[56px]"
          src="/images/menu-img.svg"
          alt="_bg"
          width={340}
          height={454}
        />
      </div> */}
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
            <p onClick={() => handleMenuItemClicked("home")} className={`${selectedItem == 'home' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Home</p>
            <p onClick={() => handleMenuItemClicked("about")} className={`${selectedItem == 'about' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>About Us</p>
            <p onClick={() => handleMenuItemClicked("services")} className={`${selectedItem == 'services' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Services</p>
            <p onClick={() => handleMenuItemClicked("facilities")} className={`${selectedItem == 'facilities' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Facilities</p>
            <p onClick={() => handleMenuItemClicked("gallery")} className={`${selectedItem == 'gallery' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Gallery</p>
            <p onClick={() => handleMenuItemClicked("testimonials")} className={`${selectedItem == 'testimonials' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Testimonials</p>
            <p onClick={() => handleMenuItemClicked("contact")} className={`${selectedItem == 'contact' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Contact Us</p>
            <Link href='/donate'><p onClick={() => handleMenuItemClicked("donate")} className={`${selectedItem == 'donate' ? 'font-bold text-[#008076]': 'text-[#1F1C17]'} cursor-pointer text-base font-inter`}>Donate</p></Link>
        </div>
      </div>
    </div>
  );
}
