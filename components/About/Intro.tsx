import Image from "next/image";

const Intro = () => {
  return (
    <>
      <div className="grid px-4 md:px-16 py-12 md:pt-40 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/images/about-intro-img.svg"
              alt="_bg"
              width={680}
              height={496}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Image
              src="/icons/green-zig-zag.svg"
              alt="_bg"
              width={51}
              height={43}
              className="absolute right-0 mr-8"
            />
            <Image
              src="/images/gradient-bg.svg"
              alt="_bg"
              width={200}
              height={30}
              className="w-[200px] sm:w-[400px] h-auto absolute right-0 -z-[1]"
            />
            <div className="flex flex-col gap-5 justify-center items-start w-full lg:max-w-[546px] h-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
                  About Us
                </p>
                <p className="text-inter md:text-base text-sm text-[#45433E]">
                  Home of Mercy and Peace (Uwa itohan bi ofure) was officially
                  opened on the 1st of July,2017, in uromi,Edo-State, Nigeria.
                  It was an initiative of the Catholic Bishop of Uromi, Most
                  Revd Donatus Ogun.
                  <br />
                  Home of Mercy and Peace is owned by the Catholic Diocese of
                  Uromi and managed by the Sisters of St. Louis Nigeria
                  Province.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
