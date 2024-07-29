import Image from "next/image";

const Services = () => {
  return (
    <>
      <div className="grid px-4 md:pb-20 md:px-20 overflow-hidden" id='services'>
        <div className="grid grid-cols-1 md:grid-cols-12 h-fit z-0">
          <div className="col-span-12">
            <div className="flex flex-col xl:flex-row justify-start items-start gap-5">
              <div className="flex flex-col justify-start items-start gap-4 md:gap-5">
                {/* text hr */}
                <div className="relative flex items-center">
                  <span className="flex-shrink mx-4 text-[#D82A2B] text-sm md:text-lg font-inter text-center">
                    SERVICE
                  </span>
                  <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
                </div>
                <div className="flex flex-col justify-start items-start gap-5 md:gap-6">
                  <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl max-w-[384px]">
                    Overview of
                    <span className="text-[#F78A34]"> Services</span> Offered
                  </p>
                </div>
              </div>
              <p className="text-inter md:text-base text-sm text-[#45433E] md:max-w-[500px] lg:max-w-[800px] xl:max-w-[885px]">
                Lorem ipsum dolor sit amet consectetur. Dictum id scelerisque
                sit viverra. Est praesent integer etiam ridiculus aliquam in
                sed. Egestas viverra ullamcorper viverra aliquet suspendisse
                risus.Lorem ipsum dolor sit amet consectetur. Dictum id
                scelerisque sit viverra. Est praesent integer etiam ridiculus
                aliquam in sed. Egestas viverra ullamcorper viverra aliquet
                suspendisse risus.
              </p>
            </div>
          </div>
          <div className="col-span-12 grid">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8 h-fit bg-[url('/images/service-bg.svg')] bg-cover md:pt-12">
              <div className="col-span-12 lg:col-span-4">
                <div className="flex flex-col justify-start items-start gap-10 md:gap-12 bg-white rounded-2xl border border-[#F3F4FE] px-8 md:px-10 py-8 md:py-10">
                  <Image
                    alt="_service"
                    src="/images/service-1.svg"
                    width={85}
                    height={85}
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col gap-5 justify-start items-start">
                    <p className="text-[#1F1C17] font-inter font-bold text-2xl">
                      Assisted Living
                    </p>
                    <p className="text-[#72706C] font-inter text-xs md:text-base">
                      Lorem ipsum dolor sit amet consectetur. Sed urna
                      ullamcorper sed viverra nunc augue at commodo. Aenean sed
                      eu eu massa scelerisque egestas. Justo in nunc sed at
                      nulla. Purus purus ornare mauris rhoncus lacinia quam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-6 md:mt-0">
                <div className="flex flex-col justify-start items-start gap-10 md:gap-12 bg-[#008076] rounded-2xl border border-[#F3F4FE] px-8 md:px-10 py-8 md:py-10">
                  <Image
                    alt="_service"
                    src="/images/service-2.svg"
                    width={85}
                    height={85}
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col gap-5 justify-start items-start">
                    <p className="text-white font-inter font-bold text-2xl">
                      Memory Care
                    </p>
                    <p className="text-white font-inter text-xs md:text-base">
                      Lorem ipsum dolor sit amet consectetur. Sed urna
                      ullamcorper sed viverra nunc augue at commodo. Aenean sed
                      eu eu massa scelerisque egestas. Justo in nunc sed at
                      nulla. Purus purus ornare mauris rhoncus lacinia quam.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4 mt-6 md:mt-0">
                <div className="flex flex-col justify-start items-start gap-10 md:gap-12 bg-white rounded-2xl border border-[#F3F4FE] px-8 md:px-10 py-8 md:py-10">
                  <Image
                    alt="_service"
                    src="/images/service-3.svg"
                    width={85}
                    height={85}
                    className="w-20 h-20"
                  />
                  <div className="flex flex-col gap-5 justify-start items-start">
                    <p className="text-[#1F1C17] font-inter font-bold text-2xl">
                      Respite Care
                    </p>
                    <p className="text-[#72706C] font-inter text-xs md:text-base">
                      Lorem ipsum dolor sit amet consectetur. Sed urna
                      ullamcorper sed viverra nunc augue at commodo. Aenean sed
                      eu eu massa scelerisque egestas. Justo in nunc sed at
                      nulla. Purus purus ornare mauris rhoncus lacinia quam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
