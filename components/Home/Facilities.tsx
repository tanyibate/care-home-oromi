"use client";
import React from "react";
import Image from "next/image";

const content = [
  {
    imgSrc: "/images/facilities-img-1.svg",
    title: "Dining Area",
    desc: "Enjoy meals in a welcoming space. Fresh, local ingredients create nutritious, delicious dishes, enhancing every dining experience.",
  },
  {
    imgSrc: "/images/facilities-img-2.svg",
    title: "Garden",
    desc: "Relax in our serene garden, a peaceful retreat with lush greenery and vibrant flowers, perfect for leisurely strolls and relaxation.",
  },
  {
    imgSrc: "/images/facilities-img-3.svg",
    title: "Activity Rooms",
    desc: "Engage in diverse activities in our spacious rooms, equipped for games, crafts, fitness, and social gatherings, fostering community and fun.",
  },
];

const Card = ({
  imgSrc,
  title,
  desc,
}: {
  imgSrc: string;
  title: string;
  desc: string;
}) => {
  return (
    <div className="flex flex-col w-[408px] min-w-[408px] h-[433px] min-h-[433px] shadow-[0_35px_60px_-15px_#E2EEF9] rounded-3xl">
      <Image src={imgSrc} alt="_service" width={408} height={227} />
      <div className="flex flex-col gap-3 justify-start items-start bg-white px-8 pt-8 pb-10 rounded-b-3xl">
        <p className="text-[#1F1C17] text-xl font-medium font-inter">{title}</p>
        <p className="text-[#45433E] text-base font-inter max-w-[340px]">
          {desc}
        </p>
      </div>
    </div>
  );
};

const Facilities = () => {
  const containerRef = React.useRef<any>(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -408, // Adjusted value
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: +408, // Adjusted value
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="flex flex-col gap-10 md:gap-16 justify-center items-center w-full pt-12 pb-12"
        id="facilities"
      >
        <div className="flex flex-col gap-4 md:gap-8 justify-center items-center w-full">
          <Image
            src="/images/facilities-bg.svg"
            alt="_bg"
            width={500}
            height={550}
            className="absolute -ml-[93%] -z-[1]"
          />
          {/* text hr */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
            <span className="flex-shrink mx-4 text-[#D82A2B] text-sm md:text-lg font-inter text-center">
              Highlight
            </span>
            <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 md:gap-6">
            <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl text-center">
              Some of Our <span className="text-[#F78A34]">Facilities</span>
            </p>
            <p className="text-inter md:text-base text-sm text-[#45433E] text-center max-w-[796px]">
              Explore our facilities designed for comfort and convenience. Enjoy
              beautifully landscaped gardens and cozy common areas, all aimed at
              enhancing your quality of life.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full oveflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-8 justify-start items-center w-full overflow-hidden overflow-x-scroll noScrollBars h-full pb-10 md:pb-12 px-4 md:px-20"
          >
            {content.map((item, index) => (
              <Card
                key={index}
                imgSrc={item.imgSrc}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
          <div className="flex w-full justify-center items-center gap-4 py-4">
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
      </div>
    </>
  );
};

export default Facilities;
