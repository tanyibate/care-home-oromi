"use client";
import React from "react";
import Image from "next/image";

const Form = () => {
  const [selectedType, setSelectedType] = React.useState("");
  return (
    <>
      <div className="grid px-4 md:px-16 py-12 md:py-16 bg-[url('/images/form-bg.svg')] bg-cover bg-no-repeat">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-20">
          <div className="col-span-12 lg:col-span-6">
            <div className="flex flex-col justify-start items-start gap-4 md:gap-5 w-full lg:max-w-[546px]">
              {/* text hr */}
              <div className="relative flex items-center">
                <span className="flex-shrink mx-4 text-white text-sm md:text-lg font-inter text-center">
                  FORM
                </span>
                <div className="flex-grow border-t border-[#D82A2B] w-[28px]"></div>
              </div>
              <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
                <p className="text-white font-bold font-inter text-3xl md:text-4xl">
                  Please Fill the Supporter Donation Form
                </p>
                <p className="text-inter md:text-base text-sm text-white">
                  By filling out the supporter donation form, you are
                  contributing to a cause that makes a significant difference in
                  their daily lives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0">
            <div className="flex flex-col gap-10 justify-center items-center w-full bg-white rounded-lg px-5 py-6 md:px-8 md:py-12">
              <div className="flex flex-col gap-3 w-full justify-center items-center">
                <div className="flex gap-4 justify-start items-start p-4 rounded-md bg-[#F7F9FB] w-full">
                  <Image
                    src="/icons/user.svg"
                    alt="_user"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Donator Name"
                    className="w-full outline-none border-none bg-[#F7F9FB]"
                  />
                </div>
                <div className="flex gap-4 justify-start items-start p-4 rounded-md bg-[#F7F9FB] w-full">
                  <Image
                    src="/icons/email-3.svg"
                    alt="_user"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Email (Required)"
                    className="w-full outline-none border-none bg-[#F7F9FB]"
                  />
                </div>
                <div className="flex gap-4 justify-start items-start p-4 rounded-md bg-[#F7F9FB] w-full">
                  <Image
                    src="/icons/tag.svg"
                    alt="_user"
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    placeholder="Amount"
                    className="outlinew-full -none border-none bg-[#F7F9FB]"
                  />
                </div>
                <div className="flex gap-3 flex-wrap justify-start items-start w-full">
                  <div
                    onClick={() => setSelectedType("card")}
                    className={`min-w-[160px] flex gap-4 justify-start items-start p-4 rounded-md bg-[#FCF8E6] w-fit ${selectedType === "card" ? "border border-[#FBB040]" : ""}`}
                  >
                    <Image
                      src="/icons/bank-card.svg"
                      alt="_user"
                      width={20}
                      height={20}
                    />
                    <p className="text-[#6B6D6C] text-sm font-inter">
                      Credit Card
                    </p>
                  </div>
                  <div
                    onClick={() => setSelectedType("paypal")}
                    className={`min-w-[160px] flex gap-4 justify-start items-start p-4 rounded-md bg-[#FCF8E6] w-fit ${selectedType === "paypal" ? "border border-[#FBB040]" : ""}`}
                  >
                    <Image
                      src="/icons/paypal.svg"
                      alt="_user"
                      width={20}
                      height={20}
                    />
                    <p className="text-[#6B6D6C] text-sm font-inter">PayPal</p>
                  </div>
                  <div
                    onClick={() => setSelectedType("bank")}
                    className={`min-w-[160px] flex gap-4 justify-start items-start p-4 rounded-md bg-[#FCF8E6] w-fit ${selectedType === "bank" ? "border border-[#FBB040]" : ""}`}
                  >
                    <Image
                      src="/icons/bank.svg"
                      alt="_user"
                      width={20}
                      height={20}
                    />
                    <p className="text-[#6B6D6C] text-sm font-inter">
                      Bank Transfer
                    </p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-[#FBB040] text-base text-white rounded md:text-sm font-bold font-inter py-3 md:py-4 px-6">
                Donate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
