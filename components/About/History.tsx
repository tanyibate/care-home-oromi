import Image from "next/image";

const History = () => {
  return (
    <>
      <div className="grid px-4 md:px-16 pb-12 md:py-32">
        <div className="grid grid-cols-1 lg:gap-20">
          <div className="col-span-12">
            <Image
              src="/images/group_photo.jpg"
              alt="_bg"
              width={1190}
              height={548}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-12 mt-10 lg:mt-0">
            <div className="flex flex-col justify-start items-start gap-5 md:gap-6 w-full">
              <p className="text-[#1F1C17] font-bold font-inter text-3xl md:text-4xl capitalize">
                The Background History
              </p>
              <p className="text-inter md:text-base text-sm text-[#45433E]">
                These days, many young and middle-aged people are away from the
                locality in search of a good life and a good job. This is a
                welcome development and it is evident when people come home to
                visit and connect with family and friends. One of the resultant
                effects, however, is that some aged parents are sometimes left
                alone to cater for themselves. As well as this, loneliness sets
                in as their friends and loved ones gradually die. Their
                relevance in the community gradually fades. The evident problems
                of aging, e.g., Dementia, Arthritis, Alzheimer’s, poor sight and
                hearing, incontinence, as well as other numerous problems
                associated with aging make them vulnerable to abuse and neglect.
                <br />
                <br />
                The increasing number of poor and neglected elderly people in
                our environment is very evident. This, therefore, warrants the
                need for more coordinated and accessible care for the elderly.
                <br />
                <br />
                Having a facility of this nature in Esan land will help address
                some of the problems of poverty, and loneliness and also create
                a sense of belonging among the elderly and vulnerable persons.
                Being in an environment where core values of Love, Care,
                Respect, Understanding, Companionship, Compassion, Friendship,
                and Family are in place, will enable them to live healthy lives
                so that they can age gracefully amid good care. The Home so far
                has received -------Residents but currently we have 10 with 1
                assisted living resident. The Home is registered under the
                Catholic Diocese of Uromi’s CAC.
              </p>
            </div>
          </div>
          <div className="col-span-12 mt-10 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-12 md:gap-6 h-fit ">
              <div className="col-span-12 lg:col-span-6">
                <div className="bg-[url('/images/about-blue-card-bg.svg')] bg-no-repeat rounded-2xl w-fit lg:w-full flex flex-col gap-8 justify-start items-start bg-[#DEF2E6] px-5 pb-10 pt-5 md:px-10 md:py-[60px] h-full w-full lg:max-w-[638px]">
                  <div className="flex flex-col gap-5 md:gap-6 justify-stat items-start w-full z-0">
                    <div className="w-full flex gap-4 justify-between items-center flex-wrap">
                      <p className="text-[#1F1C17] text-xl md:text-2xl font-bold">
                        Vision
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
                      A world where the elderly are treated with care and
                      respect
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6 mt-6 lg:mt-0">
                <div className="bg-[url('/images/about-pink-cards-bg.svg')] bg-no-repeat rounded-2xl w-fit lg:w-full flex flex-col gap-8 justify-start items-start bg-[#FCEDF2] px-5 pb-10 pt-5 md:px-10 md:py-[60px] h-full w-full lg:max-w-[638px]">
                  <div className="flex flex-col gap-5 md:gap-6 justify-stat items-start w-full">
                    <div className="w-full flex gap-4 justify-between items-center flex-wrap">
                      <p className="text-[#1F1C17] text-xl md:text-2xl font-bold">
                        Mission Statement
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
                      Caring for the elderly in our community by providing a
                      comfortable home, community, friendship, companionship,
                      and respect, thus reducing loneliness and enabling our
                      elderly to remain relevant in today’s world.
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

export default History;
