import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="grid px-4 py-12 md:px-20 md:py-24 bg-white" id="about">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 h-fit ">
          <div className="col-span-12 grid">
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20 h-fit ">
              <div className="col-span-12 md:col-span-6">
                <Image
                  alt="_bg"
                  src="/images/about-img.svg"
                  width={633}
                  height={498}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
                <div className="flex flex-col justify-start items-start gap-6 md:gap-10 lg:max-w-[546px]">
                  <div className="flex flex-col justify-start items-start gap-4 md:gap-5 w-full">
                    {/* text hr */}
                    <div className="relative flex items-center">
                      <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
                      <span className="flex-shrink mx-4 text-[#D82A2B] text-sm md:text-lg font-inter text-center">
                        About Us
                      </span>
                      <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                      <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
                        Dedicated to{" "}
                        <span className="text-[#F78A34]">Gentle</span> and
                        Compassionate Care
                      </p>
                      <p className="text-inter md:text-base text-sm text-[#45433E]">
                        Our commitment is to provide gentle and compassionate
                        care, ensuring each resident feels valued and supported.
                        With personalized care plans, we address individual
                        needs and preferences, promoting comfort and well-being.
                        Our skilled team fosters a nurturing environment,
                        enhancing the quality of life through attentive,
                        heartfelt service. Every day, we strive to make a
                        positive impact, creating a warm and welcoming home for
                        all.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 justify-start items-center">
                    <Link href="/about">
                      <button className="text-white bg-[#FBB040] px-8 md:px-12 py-3 md:py-4 rounded font-bold flex justify-center items-center border border-[#FBB040]">
                        Learn More
                      </button>
                    </Link>
                    <Link href="/donate">
                      <button className="text-[#008076] bg-white px-8 md:px-12 py-3 md:py-4 rounded font-bold flex justify-center items-center border border-[#008076]">
                        Donation
                      </button>
                    </Link>
                  </div>
                </div>
                <Image
                  src="/icons/zig-zag.svg"
                  alt="_zigzag"
                  width={51}
                  height={43}
                  className="hidden lg:block absolute right-0"
                />
              </div>
            </div>
          </div>
          <div className="col-span-12 grid mt-16 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 h-fit ">
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-[url('/images/about-blue-card-bg.svg')] bg-no-repeat rounded-2xl w-full flex flex-col gap-8 justify-start items-start bg-[#DEF2E6] px-5 pb-10 pt-5 md:px-10 md:py-[60px] h-full w-full lg:max-w-[638px]">
                  <div className="flex flex-col gap-5 md:gap-6 justify-stat items-start w-full z-0">
                    <div className="w-full flex gap-4 justify-between items-center flex-wrap">
                      <p className="text-[#1F1C17] text-xl md:text-2xl font-bold">
                        Our Mission and Values
                      </p>
                      <Image
                        alt="_bg"
                        src="/icons/mission.svg"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                    <p className="text-[#45433E] text-sx md:text-base font-inter">
                      Caring for the elderly in our community by providing a
                      comfortable home, community, friendship, companionship,
                      and respect, thus reducing loneliness and enabling our
                      elderly to remain relevant in today’s world.
                    </p>
                  </div>

                  <p className="cursor-pointer text-[#F78A34] text-base font-bold font-inter">
                    Read more &#9002;
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
                <div className="bg-[url('/images/about-pink-cards-bg.svg')] bg-no-repeat rounded-2xl w-full flex flex-col gap-8 justify-start items-start bg-[#FCEDF2] px-5 pb-10 pt-5 md:px-10 md:py-[60px] h-full w-full lg:max-w-[638px]">
                  <div className="flex flex-col gap-5 md:gap-6 justify-stat items-start w-full">
                    <div className="w-full flex gap-4 justify-between items-center flex-wrap">
                      <p className="text-[#1F1C17] text-xl md:text-2xl font-bold">
                        Our History
                      </p>
                      <Image
                        alt="_bg"
                        src="/icons/rocket.svg"
                        width={40}
                        height={40}
                        className="w-8 h-8 md:w-10 md:h-10"
                      />
                    </div>
                    <p className="text-[#45433E] text-sx md:text-base font-inter">
                      Home of Mercy and Peace (Uwa itohan bi ofure) was
                      officially opened on the 1st of July,2017, in
                      uromi,Edo-State, Nigeria. It was an initiative of the
                      Catholic Bishop of Uromi, Most Revd Donatus Ogun. Home of
                      Mercy and Peace is owned by the Catholic Diocese of Uromi
                      and managed by the Sisters of St. Louis Nigeria Province.
                    </p>
                  </div>

                  <p className="cursor-pointer text-[#F78A34] text-base font-bold font-inter">
                    Read more &#9002;
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

export default About;
