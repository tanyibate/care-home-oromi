import Image from "next/image";

const Goals = () => {
  return (
    <>
      <div className="grid px-4 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-24 place-items-center">
          <div className="col-span-12 lg:col-span-6 ">
            <Image
              src="/images/goals-img.svg"
              alt="_bg"
              width={389}
              height={730}
              className="w-full h-full lg:max-w-[389px] lg:max-h-[730px] object-contain"
            />
          </div>
          <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0 pb-12 md:pb-16">
            <div className="flex flex-col gap-10 max-w-[622px] justify-start items-start">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl capitalize">
                  Goals & Objectives
                </p>
                <p className="text-inter md:text-base text-sm text-[#45433E]">
                  We aim to enhance resident well-being, improve care quality,
                  and create a supportive, thriving community for all our
                  residents.
                </p>
              </div>
              <div className="flex flex-col gap-4 justify-start items-start">
                <div className="flex gap-4 justify-start items-center px-3 py-2 md:py-5 rounded bg-[#EEF8F2] w-full">
                  <Image
                    src="/icons/green-tick.svg"
                    alt="_bg"
                    width={18}
                    height={12}
                  />
                  <p className="text-[#1F1C17] font-inter text-xs md:text-base">
                    Visiting parishes to create awareness about the care of the
                    elderly and vulnerable persons in Esan land.
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center px-3 py-2 md:py-5 rounded bg-[#EEF8F2] w-full">
                  <Image
                    src="/icons/green-tick.svg"
                    alt="_bg"
                    width={18}
                    height={12}
                  />
                  <p className="text-[#1F1C17] font-inter text-xs md:text-base">
                    To provide proper nourishment and healthy meals/ supervising
                    meals
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center px-3 py-2 md:py-5 rounded bg-[#EEF8F2] w-full">
                  <Image
                    src="/icons/green-tick.svg"
                    alt="_bg"
                    width={18}
                    height={12}
                  />
                  <p className="text-[#1F1C17] font-inter text-xs md:text-base">
                    To provide support in personal/ dental care for the elderly
                    and vulnerable people; To provide spiritual/pastoral care
                    for the elderly and vulnerable people
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center px-3 py-2 md:py-5 rounded bg-[#EEF8F2] w-full">
                  <Image
                    src="/icons/green-tick.svg"
                    alt="_bg"
                    width={18}
                    height={12}
                  />
                  <p className="text-[#1F1C17] font-inter text-xs md:text-base">
                    Support in going to medical appointments and supervision of
                    medications and other health-related issues;
                  </p>
                </div>
                <div className="flex gap-4 justify-start items-center px-3 py-2 md:py-5 rounded bg-[#EEF8F2] w-full">
                  <Image
                    src="/icons/green-tick.svg"
                    alt="_bg"
                    width={18}
                    height={12}
                  />
                  <p className="text-[#1F1C17] font-inter text-xs md:text-base">
                    {" "}
                    Being a link with family and the larger community.
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

export default Goals;
