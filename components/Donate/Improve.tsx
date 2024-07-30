import Image from "next/image";

const ImprovePoint = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex justify-start items-start max-w-[350px] sm:w-[350px]">
      <Image
        src={icon}
        alt="_go"
        width={60}
        height={58}
        className="w-[110px] h-[110px]"
      />
      <div className="flex flex-col gap-2 justify-start items-start">
        <p className="text-[#222222] text-lg font-bold font-inter">{title}</p>
        <p className="text-[#6B6D6C] text-sm font-inter">{description}</p>
      </div>
    </div>
  );
};

const iconHand = "/icons/hand.svg";

const improvementPoints = [
  {
    icon: iconHand,
    title: "Enhance Facilities",
    description:
      "Upgrading living spaces and common areas to create a more comfortable and welcoming environment.",
  },
  {
    icon: iconHand,
    title: "Expand Programs",
    description:
      "Developing new activities and therapies that promote mental, physical, and emotional well-being.",
  },
  {
    icon: iconHand,
    title: "Upgrade Equipment",
    description:
      "Acquiring state-of-the-art medical and recreational equipment to improve care and engagement.",
  },
  {
    icon: iconHand,
    title: "Support Staff Training",
    description:
      "Providing ongoing education and training for our dedicated staff to ensure the highest quality of care.",
  },
];

const Improve = () => {
  return (
    <>
      <div className="px-4 md:px-16 py-12 md:py-16 grid bg-[url('/images/import-bg.svg')] bg-cover">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col justify-center items-start gap-4 md:gap-5 w-full lg:max-w-[563px] h-full">
              <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl">
                  How Donations will be used to Improve the Care Home
                </p>
                <p className="text-inter md:text-base text-sm text-[#45433E]">
                  For our care home residents, finding a trusted, supportive
                  environment is vital for their well-being. Our mission is to
                  provide compassionate care that nurtures the mind, body, and
                  spirit of each resident.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-10 lg:mt-0">
            <div className="flex justify-start items-start flex-wrap">
              {improvementPoints.map((point, index) => (
                <ImprovePoint
                  icon={point.icon}
                  title={point.title}
                  description={point.description}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Improve;
