import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="grid px-4 md:px-16 py-12 md:pt-40 md:pb-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/intro-img.svg"
              alt="_bg"
              width={680}
              height={496}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-5 justify-start items-start w-full lg:max-w-[546px]">
              <div className="flex flex-col justify-start items-start gap-4 md:gap-5 w-full">
                {/* text hr */}
                <div className="relative flex items-center">
                  <span className="flex-shrink mx-4 text-[#D82A2B] text-sm md:text-lg font-inter text-center">
                    INTRODUCTION
                  </span>
                  <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
                </div>
                <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                  <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
                    Why Donations are Important
                  </p>
                  <p className="text-inter md:text-base text-sm text-[#45433E]">
                    For our care home residents, finding a trusted, supportive
                    environment is vital for their well-being. Our mission is to
                    provide compassionate care that nurtures the mind, body, and
                    spirit of each resident. Donations are essential to
                    achieving this mission, allowing us to enhance our
                    facilities, offer enriching activities, and ensure the
                    highest standard of care. Your contributions help us create
                    a home where every resident feels valued and supported,
                    making a significant difference in their daily lives.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 md:gap-6 w-full">
                <div className="flex justify-start items-center gap-3 py-5 px-4 rounded-lg bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)]">
                  <Image
                    src="/icons/orange-tick.svg"
                    alt="_bg"
                    width={28}
                    height={28}
                    className="w-6 h-6"
                  />
                  <p className="text-[#6B6D6C] font-inter text-sm md:text-base">
                    Supporting Communities and Initiatives
                  </p>
                </div>
                <div className="flex justify-start items-center gap-3 py-5 px-4 rounded-lg bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)]">
                  <Image
                    src="/icons/orange-tick.svg"
                    alt="_bg"
                    width={28}
                    height={28}
                    className="w-6 h-6"
                  />
                  <p className="text-[#6B6D6C] font-inter text-sm md:text-base">
                    Building a Better Future Together
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
