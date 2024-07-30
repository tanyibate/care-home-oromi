import Image from "next/image";

const AnchorLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <a href={href}>
      <p className="text-[#7D7B78] text-base font-inter cursor-pointer">
        {title}
      </p>
    </a>
  );
};

const quickLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About Us" },
  { href: "/#services", title: "Services" },
  { href: "/#facilities", title: "Facilities" },
];

const otherLinks = [
  { href: "/#gallery", title: "Gallery" },
  { href: "/#contact", title: "Contact Us" },
  { href: "/donate", title: "Donate" },
];

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-[#161410] justify-center items-center w-full">
        <div className="w-full flex gap-32 justify-start items-start flex-wrap px-4 py-10 md:pt-24 md:pb-20 md:px-20">
          <div className="flex flex-col gap-8 justify-start items-start max-w-96">
            <Image
              src="/Logo/white-logo.svg"
              alt="logo"
              className="w-24 h-8 md:w-32 md:h-12"
              width={127}
              height={48}
            />
            <div className="flex flex-col gap-5 justify-start items-start">
              {/*<p className="text-[#7D7B78] text-base font-inter">
                Lorem ipsum dolor sit amet consectetur. Ultricies non
                consectetur ipsum et urna ultricies proin nisi nunc. At sed
                ultrices in consequat
              </p>*/}
              <div className="flex justify-start items-center gap-3">
                <p className="text-white text-sm font-inter font-medium">
                  Follow Us
                </p>
                <Image
                  src="/icons/fb.svg"
                  alt="_social_media"
                  className="cursor-pointer"
                  width={25}
                  height={25}
                />
                <Image
                  src="/icons/insta.svg"
                  alt="_social_media"
                  className="cursor-pointer"
                  width={25}
                  height={25}
                />
                <Image
                  src="/icons/twitter.svg"
                  alt="_social_media"
                  className="cursor-pointer"
                  width={25}
                  height={25}
                />
                <Image
                  src="/icons/whatsapp.svg"
                  alt="_social_media"
                  className="cursor-pointer"
                  width={25}
                  height={25}
                />
              </div>
            </div>
          </div>

          <div className="flex gap-24 md:gap-32 flex-wrap justify-start items-start">
            <div className="flex flex-col gap-6 justify-start items-start">
              <p className="text-white font-bold text-lg font-inter">
                Quick Links
              </p>
              <div className="flex flex-col justify-start items-start gap-3">
                {quickLinks.map((link, index) => (
                  <AnchorLink key={index} href={link.href} title={link.title} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-start items-start">
              <p className="text-white font-bold text-lg font-inter">
                Other Links
              </p>
              <div className="flex flex-col justify-start items-start gap-3">
                {otherLinks.map((link, index) => (
                  <AnchorLink key={index} href={link.href} title={link.title} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-start items-start">
              <p className="text-white font-bold text-lg font-inter">
                Contact Details
              </p>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="flex gap-2 justify-start items-start">
                  <Image
                    src="/icons/email.svg"
                    alt="_social_media"
                    className="cursor-pointer"
                    width={20}
                    height={20}
                  />
                  <p className="text-[#7D7B78] text-base font-inter cursor-pointer">
                    contactus@homeofmercyandpeaceuromi.org
                  </p>
                </div>
                <div className="flex gap-2 justify-start items-start">
                  <Image
                    src="/icons/phone.svg"
                    alt="_social_media"
                    className="cursor-pointer"
                    width={20}
                    height={20}
                  />
                  <p className="text-[#7D7B78] text-base font-inter cursor-pointer">
                    +234 703 452 0508
                  </p>
                </div>
                <div className="flex gap-2 justify-start items-start">
                  <Image
                    src="/icons/location.svg"
                    alt="_social_media"
                    className="cursor-pointer"
                    width={20}
                    height={20}
                  />
                  <p className="text-[#7D7B78] text-base font-inter cursor-pointer">
                    Catholic Diocese of uromi, Home of Mercy and Peace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-6 items-center px-4 md:px-20 py-8 border-t border-[#33322E] w-full">
          <p className="text-[#7D7B78] text-sm font-inter w-fit">
            © 2024 Care home . All rights reserved
          </p>
          <div className="flex justify-center items-center w-fit gap-2 flex-wrap">
            <p className="text-[#7D7B78] text-sm font-inter cursor-pointer">
              Privacy & Policy
            </p>
            <p className="text-[#7D7B78] text-sm font-inter">|</p>
            <p className="text-[#7D7B78] text-sm font-inter cursor-pointer">
              Term&apos;s & Conditions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
