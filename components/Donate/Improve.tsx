import Image from "next/image";

const Improve = () => {
  return (
    <>
      <div className="px-4 md:px-16 py-12 md:py-16 grid bg-[url('/images/import-bg.svg')] bg-cover">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-5 w-full lg:max-w-[563px] h-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
                  How Donations will be used to Improve the Care Home
                </p>
                <p className="text-inter md:text-base text-sm text-[#45433E]">
                  For millions of people, niramayasoul.com is the trusted and
                  familiar home where they know they’ll find a healing touch.
                  Our mission is to connect you with everything you need to take
                  good care of your mind, body, and spirit.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
            <div className="flex justify-start items-start flex-wrap">
              <div className="flex justify-start items-start max-w-[350px] sm:w-[350px]">
                <Image
                  src="/icons/hand.svg"
                  alt="_go"
                  width={60}
                  height={58}
                  className="w-[110px] h-[110px]"
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#222222] text-lg font-bold font-inter">
                    Strategic
                  </p>
                  <p className="text-[#6B6D6C] text-sm font-inter">
                    Building a Better Future Together
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start max-w-[350px] sm:w-[350px]">
                <Image
                  src="/icons/hand.svg"
                  alt="_go"
                  width={60}
                  height={58}
                  className="w-[110px] h-[110px]"
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#222222] text-lg font-bold font-inter">
                    Work Schedule
                  </p>
                  <p className="text-[#6B6D6C] text-sm font-inter">
                    work schedule is the time an employee is expected to be on
                    the job
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start max-w-[350px] sm:w-[350px]">
                <Image
                  src="/icons/hand.svg"
                  alt="_go"
                  width={60}
                  height={58}
                  className="w-[110px] h-[110px]"
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#222222] text-lg font-bold font-inter">
                    Strategic
                  </p>
                  <p className="text-[#6B6D6C] text-sm font-inter">
                    Supporting Communities and Initiatives
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start max-w-[350px] sm:w-[350px]">
                <Image
                  src="/icons/hand.svg"
                  alt="_go"
                  width={60}
                  height={58}
                  className="w-[110px] h-[110px]"
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#222222] text-lg font-bold font-inter">
                    Work Schedule
                  </p>
                  <p className="text-[#6B6D6C] text-sm font-inter">
                    work schedule is the time an employee is expected to be on
                    the job
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

export default Improve;
