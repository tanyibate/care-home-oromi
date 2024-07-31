import Image from "next/image";

const Values = () => {
  return (
    <>
      <div className="grid px-4 md:px-16 py-12 md:pt-16 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col gap-8 w-full justify-center items-center">
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/respect.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Respect
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Treating all residents with dignity and valuing their
                    individuality, ensuring they feel heard and valued.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/community.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Community
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Fostering a sense of belonging and community among
                    residents, staff, and families.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/integrity.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Integrity
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Upholding high ethical standards in all aspects of care and
                    operations.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/empowerment.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Empowerment
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Encouraging residents to maintain as much independence as
                    possible and to be involved in decisions about their care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-8 lg:mt-0">
            <Image
              src="/images/gradient-bg.svg"
              alt="_bg"
              width={200}
              height={30}
              className="w-[200px] sm:w-[400px] h-auto absolute right-0 -z-[1]"
            />
            <div className="flex flex-col gap-8 w-full justify-center items-center">
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/safety.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Safety
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Creating a safe and secure environment where residents can
                    live comfortably without fear of harm or neglect.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/quality.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Quality of Life
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Enhancing the overall quality of life for residents through
                    various activities, proper medical care, and emotional
                    support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-start items-start p-5 rounded-xl bg-white shadow-[0_20px_90px_0px_rgba(1,23,54,0.07)] w-full">
                <Image
                  src="/icons/inclusivity.svg"
                  alt="_value"
                  width={32}
                  height={32}
                />
                <div className="flex flex-col gap-2 justify-start items-start">
                  <p className="text-[#1F1C17] font-inter font-bold text-lg">
                    Inclusivity
                  </p>
                  <p className="text-[#6B6D6C] font-inter text-xs md:text-sm">
                    Welcoming residents from diverse backgrounds and ensuring
                    that care is personalized to meet their unique needs.
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

export default Values;
