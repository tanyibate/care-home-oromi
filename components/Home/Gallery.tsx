"use client";
import React from "react";
import Image from "next/image";

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
      <div className="flex flex-col gap-16 justify-center items-center w-full pb-12 md:pb-32" id='gallery'>
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
              Some of Our
              <span className="text-[#F78A34]">Glimpse</span>
            </p>
            <div className="flex justfy-start md:justify-between items-center gap-4 w-full">
              <p className="text-inter md:text-base text-sm text-[#45433E] lg:max-w-[500px] xl:max-w-[897px]">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.Lorem Ipsum is therefore
                always free from repetition, injected humour, or
                non-characteristic words etc.
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
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-2.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-2.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-3.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-4.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 grid mt-6">
              <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6">
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-6.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-6.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-7.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3">
                  <div className="flex justify-end items-end h-full w-full">
                    <Image
                      src="/images/gallery-8.svg"
                      alt="_gallery"
                      width={306}
                      height={287}
                      className="w-full h-full object-cover"
                    />
                    <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full pb-6 pl-6">
                      <p className="text-white font-bold font-inter text-xl">
                        Care With Us
                      </p>
                      <p className="text-white font-inter text-sm max-w-[251px]">
                        Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col justify-center items-center w-full oveflow-hidden px-4 lg:px-20">
          <div
            ref={containerRef}
            className="flex gap-8 justify-start items-center w-full overflow-hidden overflow-x-scroll noScrollBars h-full pb-10 md:pb-12 px-4 md:px-20"
          >
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-1.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-2.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-3.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-4.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-5.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-6.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-7.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
            <div className="flex justify-end items-end h-full min-w-[343px] min-h-[287px]">
              <Image
                src="/images/gallery-8.svg"
                alt="_gallery"
                width={343}
                height={287}
                className="w-full h-full object-cover"
              />
              <div className="flex flex-col gap-3 justify-start items-start -ml-[100%] w-full h-full pb-6 pl-6">
                <p className="text-white font-bold font-inter text-xl">
                  Care With Us
                </p>
                <p className="text-white font-inter text-sm max-w-[251px]">
                  Lorem ipsum dolor sit ametconsectetur. Pretium faucibus{" "}
                </p>
              </div>
            </div>
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
