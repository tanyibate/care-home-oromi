import Image from "next/image";
import Button from "../Button/Button";

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
                  <div className="space-y-8 w-full">
                    <div className="space-y-4">
                      <h3 className="text-[#000401] font-semibold text-xl">
                        Donate via Stripe
                      </h3>
                      <Button
                        label="Donate Now"
                        href="https://buy.stripe.com/aEU17C1WJ1WW9X2aEE"
                        newTab
                      />
                    </div>

                    <div className="space-y-4 pb-12">
                      <h3 className="text-[#000401] font-semibold text-xl">
                        Direct Bank Transfer
                      </h3>
                      <div className="bg-gray-50 p-4 pb-6 rounded-lg space-y-2">
                        <p className="text-sm font-medium">
                          Bank Name:{" "}
                          <span className="font-normal">Fidelity Bank Plc</span>
                        </p>
                        <p className="text-sm font-medium">
                          Branch: <span className="font-normal">Uromi</span>
                        </p>
                        <p className="text-sm font-medium">
                          Account Name:{" "}
                          <span className="font-normal">
                            Catholic Diocese of Uromi
                          </span>
                        </p>
                        <p className="text-sm font-medium">
                          Account Number:{" "}
                          <span className="font-normal">5090298949</span>
                        </p>
                        <p className="text-sm font-medium">
                          Swift Code:{" "}
                          <span className="font-normal">FIDTNGLA</span>
                        </p>
                        <p className="text-sm font-medium">
                          Currency: <span className="font-normal">USD</span>
                        </p>
                        <p className="text-sm font-medium">
                          Address:{" "}
                          <span className="font-normal">
                            23 Mission Road, Opposite Uromi Central Market,
                            Uromi
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
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
