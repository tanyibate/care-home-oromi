import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="px-5 md:px-20 py-32 md:py-40 flex w-full bg-[url('/images/about-hero-bg.svg')] bg-cover bg-no-repeat flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-6 max-w-[817px]">
          <p className="font-inter font-bold text-3xl md:text-5xl text-white leading-[38px] md:leading-[65px]">
            About Us
          </p>
          <p className="text-white font-inter font-thin text-xs md:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur. Non praesent mus vulputate
            amet accumsan nibh sit eleifend vulputate. Turpis pretium sed eget a
            quis in magna tincidunt et.
          </p>
          <Image
            src="/icons/donate-hero-right-arrow.svg"
            alt="_go"
            width={144}
            height={12}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
