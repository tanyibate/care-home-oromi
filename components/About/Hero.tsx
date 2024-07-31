import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="px-5 md:px-20 py-32 md:py-40 w-full bg-[url('/images/about_us_hero.jpg')] bg-cover bg-no-repeat flex justify-center items-center relative">
        <div className="absolute top-0 left-0 z-0 w-full h-full bg-black opacity-45"></div>
        <div className="flex flex-col justify-center items-center gap-6 max-w-[817px] z-10">
          <p className="font-inter font-bold text-3xl md:text-5xl text-white leading-[38px] md:leading-[65px]">
            About Us
          </p>
          <p className="text-white font-inter font-thin text-xs md:text-lg text-center">
            We provide compassionate, personalized care in a warm, supportive
            environment, enhancing the well-being and quality of life for
            residents.
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
