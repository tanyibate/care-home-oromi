import Image from "next/image";

const Contact = () => {
  return (
    <>
      <div
        className="bg-[#F7F9FB] flex flex-col md:flex-row justify-center items-center px-4 md:px-20 pt-12 pb-24 md:pt-24 md:pb-20"
        id="contact"
      >
        <div className="max-w-[354px] md:max-w-[780px]  max-h-[304px] md:max-h-[560px] w-full h-full">
          <iframe
            className="border-8 border-white"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Uromi,%20Edo%20State,%20Nigeria&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        <div className="bg-white rounded-lg px-4 md:px-12 py-12 md:pt-20 md:pb-24 flex flex-col gap-10 lg:gap-12 max-w-[316px] md:max-w-[756px] h-fit mt-[170px] md:mt-0 md:-ml-[89px]">
          <div className="flex flex-col justify-start items start gap-2">
            <div className="relative flex items-center">
              <div className="flex-grow border-t-4 border-white w-[71px]"></div>
            </div>
            <p className="text-[#1F1C17] font-inter font-bold text-2xl md:text-4xl">
              Contact Us
            </p>
          </div>
          <div className="w-full flex gap-8 md:gap-10 justify-between items-start flex-wrap">
            <div className="flex gap-4 justify-start items-start">
              <Image
                src="/icons/phone-2.svg"
                alt="_phone"
                width={45}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div className="flex flex-col gap-1 md:gap-2 justify-start items-start">
                <p className="text-[#1F1C17] font-bold text-base md:text-lg font-inter">
                  Phone
                </p>
                <p className="text-[#7D7B78] text-sm font-inter">
                  +234 703 452 0508
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-start items-start">
              <Image
                src="/icons/location-2.svg"
                alt="_location"
                width={45}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div className="flex flex-col gap-1 md:gap-2 justify-start items-start">
                <p className="text-[#1F1C17] font-bold text-base md:text-lg font-inter">
                  Address
                </p>
                <p className="text-[#7D7B78] text-sm font-inter">
                  Catholic Diocese of uromi, Home of Mercy and Peace.
                </p>
              </div>
            </div>
            <div className="flex gap-4 justify-start items-start">
              <Image
                src="/icons/email-2.svg"
                alt="_email"
                width={45}
                height={45}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div className="flex flex-col gap-1 md:gap-2 justify-start items-start">
                <p className="text-[#1F1C17] font-bold text-base md:text-lg font-inter">
                  Email
                </p>
                <p className="text-[#7D7B78] text-sm font-inter">
                  contactus@homeofmercyandpeaceuromi.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
