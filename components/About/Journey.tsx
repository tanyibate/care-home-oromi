const Journey = () => {
  return (
    <>
      <div className="bg-[url('/images/journey-bg.svg')] bg-cover bg-no-repeat px-8 md:px-16 py-16 flex flex-col gap-6 md:gap-8 justify-center items-center">
        <div className="flex flex-col gap-5 justify-center items-center">
          <p className="text-white font-bold font-inter text-3xl md:text-4xl capitalize text-center">
            Start Your Journey With Us
          </p>
          <p className="text-inter md:text-base text-sm text-white text-center">
            Lorem ipsum dolor sit amet consectetur. Quisque dui vel proin netus
            nibh ut nibh.
          </p>
        </div>
        <button className="w-fit bg-[#FBB040] shadow-md text-white font-inter text-sm md:text-base font-bold px-12 md:px-16 py-3 rounded">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Journey;
