import Image from "next/image";

const Testimonials = () => {
  return (
    <>
      <div
        className="bg-[#008076] flex flex-col gap-8 lg:gap-20 px-4 lg:px-20 pt-8 pb-10 md:py-20 justify-center items-center w-full"
        id="testimonials"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-start items-center lg:justify-between gap-5 lg:gap-6 w-full">
          <div className="flex flex-col gap-2 md:gap-4 justtify-start items-start w-full md:w-fit">
            {/* text hr */}
            <div className="relative flex items-center">
              <span className="flex-shrink mx-4 text-white text-sm md:text-lg font-inter text-center">
                TESTIMONIALS
              </span>
              <div className="flex-grow border-t border-white w-[68px]"></div>
            </div>

            <p className="text-white text-2xl md:text-4xl font-bold font-inter">
              Client Feedback
            </p>
            <div className="relative flex items-center">
              <div className="hidden lg:flex-grow border-t-4 border-white w-[72px] pt-4"></div>
            </div>
          </div>

          <div className="flex gap-2 justify-start items-start w-full md:w-fit">
            <Image
              src="icons/google.svg"
              alt="_google"
              width={40}
              height={40}
              className="w-8 h-8 md:h-10 md:w-10"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-[#A5BED0] md:text-base text-xs font-inter">
                Google rating score:
              </p>
              <p className="text-white md:text-base text-xs font-inter font-medium">
                4.3 of 5 based on 166 reviews
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center gap-10 md:gap-12">
          <div className="flex gap-8 justify-start items-start w-full overflow-hidden overflow-x-scroll noScrollBars">
            <div className="min-w-[300px] w-[300px] rounded p-6 bg-white  flex flex-col gap-6 justify-center items-center">
              <div className="flex gap-6 justify-between items-center w-full">
                <div className="flex gap-4 justify-start items-start w-fit">
                  <Image
                    src="/images/testimonial-dp.svg"
                    alt="_dp"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-[#1F1C17] text-base font-bold font-inter">
                      John Doe
                    </p>
                    <p className="text-[#7D7B78] text-xs font-inter">
                      2023-03-01
                    </p>
                  </div>
                </div>
                <Image
                  src="/icons/google.svg"
                  alt="_google"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start w-full">
                <Image
                  src="/icons/stars.svg"
                  alt="_review"
                  width={88}
                  height={16}
                />
                <p className="text-[#72706C] font-inter text-sm">
                  Exceptional service! Dr. Gillon has been Mila's Vet since
                  birth. She love her visits and is actually excited to receive
                  all the love she gets from the staff. Having a good, honest
                  Vet is priceless. These pets are our kids. I would highly
                  recommend Dr Gillon and Willow Glen Pet Hospital. #1
                </p>
              </div>
            </div>

            <div className="min-w-[300px] w-[300px] rounded p-6 bg-white  flex flex-col gap-6 justify-center items-center">
              <div className="flex gap-6 justify-between items-center w-full">
                <div className="flex gap-4 justify-start items-start w-fit">
                  <Image
                    src="/images/testimonial-dp.svg"
                    alt="_dp"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-[#1F1C17] text-base font-bold font-inter">
                      John Doe
                    </p>
                    <p className="text-[#7D7B78] text-xs font-inter">
                      2023-03-01
                    </p>
                  </div>
                </div>
                <Image
                  src="/icons/google.svg"
                  alt="_google"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start w-full">
                <Image
                  src="/icons/stars.svg"
                  alt="_review"
                  width={88}
                  height={16}
                />
                <p className="text-[#72706C] font-inter text-sm">
                  Exceptional service! Dr. Gillon has been Mila's Vet since
                  birth. She love her visits and is actually excited to receive
                  all the love she gets from the staff. Having a good, honest
                  Vet is priceless. These pets are our kids. I would highly
                  recommend Dr Gillon and Willow Glen Pet Hospital. #1
                </p>
              </div>
            </div>
            <div className="min-w-[300px] w-[300px] rounded p-6 bg-white  flex flex-col gap-6 justify-center items-center">
              <div className="flex gap-6 justify-between items-center w-full">
                <div className="flex gap-4 justify-start items-start w-fit">
                  <Image
                    src="/images/testimonial-dp.svg"
                    alt="_dp"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-[#1F1C17] text-base font-bold font-inter">
                      John Doe
                    </p>
                    <p className="text-[#7D7B78] text-xs font-inter">
                      2023-03-01
                    </p>
                  </div>
                </div>
                <Image
                  src="/icons/google.svg"
                  alt="_google"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start w-full">
                <Image
                  src="/icons/stars.svg"
                  alt="_review"
                  width={88}
                  height={16}
                />
                <p className="text-[#72706C] font-inter text-sm">
                  Exceptional service! Dr. Gillon has been Mila's Vet since
                  birth. She love her visits and is actually excited to receive
                  all the love she gets from the staff. Having a good, honest
                  Vet is priceless. These pets are our kids. I would highly
                  recommend Dr Gillon and Willow Glen Pet Hospital. #1
                </p>
              </div>
            </div>
            <div className="min-w-[300px] w-[300px] rounded p-6 bg-white  flex flex-col gap-6 justify-center items-center">
              <div className="flex gap-6 justify-between items-center w-full">
                <div className="flex gap-4 justify-start items-start w-fit">
                  <Image
                    src="/images/testimonial-dp.svg"
                    alt="_dp"
                    width={48}
                    height={48}
                  />
                  <div className="flex flex-col gap-2 justify-start items-start">
                    <p className="text-[#1F1C17] text-base font-bold font-inter">
                      John Doe
                    </p>
                    <p className="text-[#7D7B78] text-xs font-inter">
                      2023-03-01
                    </p>
                  </div>
                </div>
                <Image
                  src="/icons/google.svg"
                  alt="_google"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col gap-4 justify-start items-start w-full">
                <Image
                  src="/icons/stars.svg"
                  alt="_review"
                  width={88}
                  height={16}
                />
                <p className="text-[#72706C] font-inter text-sm">
                  Exceptional service! Dr. Gillon has been Mila's Vet since
                  birth. She love her visits and is actually excited to receive
                  all the love she gets from the staff. Having a good, honest
                  Vet is priceless. These pets are our kids. I would highly
                  recommend Dr Gillon and Willow Glen Pet Hospital. #1
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/icons/pagination.svg"
            alt="_pagination"
            width={106}
            height={10}
          />
        </div>
      </div>
    </>
  );
};

export default Testimonials;
