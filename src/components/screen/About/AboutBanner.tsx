const AboutBanner = () => {
  return (
    <section className="bg-[url(/bgs/homeBannerTemp.jpg)] bg-no-repeat bg-cover bg-center rounded-b-[1.3rem] md:rounded-b-[1.3rem]">
      <div className="container flex flex-col items-start sm:items-center ">
        <div className="py-11">
          <h1 className="font-fredoka font-medium text-white text-[4rem] lg:text-[6.2rem] leading-[1.3em]">
            About
          </h1>
          <p className="font-inter text-white text-[1.5rem] md:text-[2rem] max-w-[32.3rem] md:max-w-[91.9rem] leading-[3.2rem] mt-[2rem] lg:mt-[2.4rem] lg:mb-[3rem] mb-[4rem]">
            Discover our story of innovation and collaboration—how we started
            IngrediCheck to make grocery shopping seamless and enjoyable for
            everyone
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
