import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="bg-[url('/images/donate-hero-bg.svg')] bg-cover bg-no-repeat grid w-full py-12 px-4 md:pt-16 md:pb-24 md:px-16">
        <div className="grid grid-col-1 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6 order-last lg:order-first">
            <div className="flex flex-col gap-8 justify-start items-start lg:max-w-[595px]">
              <div className="flex flex-col gap-5 md:gap-6 justify-start items-start">
                <p className="font-inter font-bold text-3xl md:text-5xl text-white leading-[38px] md:leading-[65px]">
                  Join Our Mission: Donate to Help Us Make a Difference
                </p>
                <p className="text-white font-inter text-xs md:text-lg">
                  Every donation helps enhance our facilities, expand our
                  programs, and ensure the highest quality of life for those who
                  call our care home their own.{" "}
                </p>
              </div>
              <Image
                src="/icons/donate-hero-right-arrow.svg"
                alt="_go"
                width={144}
                height={12}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 ">
            <Image
              src="/icons/white-zig-zag.svg"
              alt="_zig_zag"
              width={51}
              height={43}
              className="md:w-12 md:h-10 w-8 h-6 hidden lg:block absolute"
            />
            <Image
              src="/images/donate-hero-img.svg"
              alt="_bg"
              width={686}
              height={435}
              className="w-full h-full object-contain 2xl:object-cover hidden lg:block"
            />
            <Image
              src="/images/donate-hero-img-small-screen.svg"
              alt="_bg"
              width={686}
              height={435}
              className="w-full h-full object-cover lg:hidden"
            />
            <Image
              src="/icons/white-zig-zag.svg"
              alt="_zig_zag"
              width={51}
              height={43}
              className="md:w-12 md:h-10 w-10 h-8 right-0 mr-8 -mt-[42px] absolute lg:hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
