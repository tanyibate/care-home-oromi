"use client";
import React from "react";
import Image from "next/image";

const ImageCell = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="col-span-3">
      <div className="flex justify-end items-end h-full w-full">
        <Image
          src={imgSrc}
          alt="_gallery"
          width={306}
          height={287}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

const MobileImageCell = ({ imgSrc }: { imgSrc: string }) => {
  return (
    <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
      <Image
        src={imgSrc}
        alt="_gallery"
        width={343}
        height={287}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const images = [
  "/images/gallery-2.svg",
  "/images/gallery-2.svg",
  "/images/gallery-3.svg",
  "/images/gallery-4.svg",
  "/images/gallery-5.svg",
  "/images/gallery-6.svg",
  "/images/gallery-7.svg",
  "/images/gallery-8.svg",
];

const Gallery = () => {
  const containerRef = React.useRef<any>(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -343, // Adjusted value
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: +343, // Adjusted value
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="flex flex-col gap-16 justify-center items-center w-full pb-12 md:pb-32"
        id="gallery"
      >
        <div className="flex flex-col justify-start items-start gap-4 md:gap-5 px-4 md:px-20 w-full">
          {/* text hr */}
          <div className="relative flex items-center">
            <span className="flex-shrink mx-4 text-[#D82A2B] text-sm md:text-lg font-inter text-center">
              GALLERY
            </span>
            <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
          </div>
          <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
            <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
              Some of Our <span className="text-[#F78A34]">Glimpses</span>
            </p>
            <div className="flex justfy-start md:justify-between items-center gap-4 w-full">
              <p className="text-inter md:text-base text-sm text-[#45433E] lg:max-w-[500px] xl:max-w-[897px]">
                Discover moments of joy and community in our home. From festive
                celebrations to daily activities, each snapshot reflects our
                vibrant, caring atmosphere.
              </p>
              <button className="hidden bg-[#FBB040] shadow-md px-16 py-4 rounded lg:flex justify-center items-center text-white font-inter font-bold text-base">
                View All
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:grid px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-12 grid">
              <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6">
                {images.slice(0, 4).map((imgSrc, index) => (
                  <ImageCell imgSrc={imgSrc} key={index} />
                ))}
              </div>
            </div>
            <div className="col-span-12 grid mt-6">
              <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6">
                {images.slice(4, 8).map((imgSrc, index) => (
                  <ImageCell imgSrc={imgSrc} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col justify-center items-center w-full oveflow-hidden px-4 lg:px-20">
          <div
            ref={containerRef}
            className="flex gap-8 justify-start items-center w-full overflow-hidden overflow-x-scroll noScrollBars h-full pb-10 md:pb-12 px-4 md:px-20"
          >
            {images.map((imgSrc, index) => (
              <MobileImageCell imgSrc={imgSrc} key={index} />
            ))}
          </div>
          <div className="flex w-full justify-center items-center gap-4">
            <Image
              src="/icons/left-arrow.svg"
              onClick={scrollLeft}
              alt="_service"
              width={59}
              height={59}
              className="w-10 h-10 md:w-12 md:h-12 cursor-pointer"
            />
            <Image
              src="/icons/right-arrow.svg"
              onClick={scrollRight}
              alt="_service"
              width={59}
              height={59}
              className="w-10 h-10 md:w-12 md:h-12 cursor-pointer"
            />
          </div>
        </div>
        <Image
          src="/images/facilities-bg.svg"
          alt="_bg"
          width={500}
          height={550}
          className="absolute mt-[70%] right-0 -z-[1] newww"
        />
      </div>
    </>
  );
};

export default Gallery;
