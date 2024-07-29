import Image from "next/image";

const Impact = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-white px-4 md:px-16 py-12 md:py-32">
        <div className="bg-[url('/images/impact-bg.svg')] bg-cover bg-no-repeat px-6 py-8 lg:px-16 lg:pt-8 lg:pb-0 rounded-2xl grid w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-16">
            <div className="col-span-12 lg:col-span-6">
              <div className="flex flex-col justify-center items-start gap-4 md:gap-5 w-full lg:max-w-[546px] h-full">
                <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                  <p className="text-[#000401] font-bold font-inter text-3xl md:text-4xl">
                    The Impact of Donations
                  </p>
                  <p className="text-inter md:text-base text-sm text-[#6B6D6C]">
                    Fueling Progress and Compassion
                  </p>
                  <button className="bg-[#FBB040] shadow-md text-white max-w-[207px] w-full px-16 py-3 rounded font-inter font-bold text-base">
                    Donate
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
              <Image
                src="/images/impact-img.svg"
                alt="_bg"
                width={512}
                height={359}
                className="w-full h-full object-contain hidden lg:block"
              />
              <Image
                src="/images/impact-img-small-screen.svg"
                alt="_bg"
                width={322}
                height={435}
                className="w-full h-full object-contain block lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Impact;
