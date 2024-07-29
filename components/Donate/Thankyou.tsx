import Image from "next/image";

const Thankyou = () => {
  return (
    <>
      <div className="bg-[#FDF2E0] px-4 md:px-20 py-16 md:py-6 grid">
        <div className="grid grid-cols-1 grid-cols-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0 order-last lg:order-first">
            <Image
              src="/images/thank-you-bg.svg"
              alt="_thank-you"
              width={485}
              height={422}
              className="w-auto absolute hidden lg:block -ml-[84px]"
            />
            <div className="flex flex-col justify-center items-start gap-5 md:gap-6 w-full h-full">
              <p className="text-[#000401] font-bold font-inter text-3xl md:text-4xl">
                Thank You for the Donation
              </p>
              <p className="text-inter md:text-base text-sm text-[#6B6D6C]">
                Thank you once again for your generosity and support. We are
                truly grateful for your commitment to our cause and look forward
                to keeping you updated on the positive changes your donation
                helps us achieve
              </p>
              <div className="relative flex items-center gap-2">
                <div className="flex-grow border-t border-[#008076] w-[88px]"></div>
                <div className="flex-grow border-t border-[#008076] w-6"></div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/thank-you-img.svg"
              alt="_thank-you"
              width={485}
              height={422}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Thankyou;
