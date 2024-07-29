import Image from "next/image";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="bg-[url('/images/hero-bg.svg')] px-4 md:px-6 w-full flex flex-col justify-center items-center pt-16 pb-8 md:pt-40 md:pb-16 bg-cover gap-12 md:gap-24">
        <div className="flex flex-col gap-5 justify-center items-center">
          {/* text with hr  */}
          <div className="relative flex items-center">
            <div className="flex-grow border-t border-white w-[28px]"></div>
            <span className="flex-shrink mx-4 text-white text-base font-inter text-center">
              Caring With Mercy
            </span>
            <div className="flex-grow border-t border-white w-[28px]"></div>
          </div>

          <p className="capitalize md:text-stroke font-bold text-white font-inter max-w-[681px] text-center text-3xl md:text-5xl">
            ompassionate Care, Every Step of the Way
          </p>
          <p className="text-white text-center font-inter text-xs md:text-sm max-w-[716px]">
            Lorem ipsum dolor sit amet consectetur. Volutpat morbi dictum sed
            turpis mattis id sed. Nunc sed convallis interdum vitae sit
            suspendisse eget nulla.{" "}
          </p>
          <button className="flex justify-center items-center text-white font-medium font-inter text-base bg-[#FBB040] px-8 py-3 rounded">
            Contact Us
          </button>
        </div>
        <Image
          alt="_explore"
          onClick={() => scrollToSection("about")}
          src="icons/bottom-arrow.svg"
          className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
          width={40}
          height={40}
        />
      </div>
    </>
  );
};

export default Hero;
