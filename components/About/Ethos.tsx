import Image from "next/image";

const Ethos = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-[url('/images/ethos-img.svg')] bg-cover bg-no-repeat px-6 md:px-16 py-20 md:py-40">
        <div className="flex flex-col gap-5 md:gap-4 justify-center items-center lg:max-w-[859px]">
          <Image
            src="/icons/down-arrow.svg"
            width={68}
            height={68}
            className="w-12 h-12 md:w-16 md:h-16"
            alt="_down"
          />
          <p className="text-white font-bold font-inter text-3xl md:text-4xl capitalize text-center">
            Ethos and Values
          </p>
          <p className="text-inter md:text-base text-sm text-white text-center">
            The ethos and values of Home of Mercy and Peace, Uromi. Compassion:
            Providing empathetic and considerate care, understanding the
            emotional and physical needs of each resident.
          </p>
        </div>
      </div>
    </>
  );
};

export default Ethos;
