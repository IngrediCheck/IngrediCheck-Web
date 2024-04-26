import appStore from "../../../assets/images/i/appStore.svg";
import googlePlay from "../../../assets/images/i/googlePlay.svg";
const HomeBanner = () => {
  return (
    <section className="bg-[url(/bgs/homeBannerTemp.jpg)] bg-no-repeat bg-cover bg-center relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center  justify-center pt-[4.4rem] md:pt-[10.8rem] gap-[4rem] md:gap-0">
          <div className="relative md:translate-x-[45%] md:translate-y-[-50%] ">
            <img
              src="/bgs/Line124.svg"
              alt="I"
              className="hidden md:inline-block absolute top-[-10%] md:top-[-5%] left-[-6%]"
            />
            <img
              src="/bgs/Line123.svg"
              alt="I"
              className="inline-block md:hidden absolute top-[-5%] left-[-6%] rotate-180 w-[3.3rem]"
            />
            <h1 className="font-fredoka font-bold text-white text-[4rem] lg:text-[6.2rem] leading-[1.3em]">
              Welcome to <span className="block">IngrediCheck</span>
            </h1>
            <p className="font-inter text-white text-[2rem] max-w-[25.3rem] md:max-w-[49.9rem] leading-[3.2rem] mt-[4rem] lg:mt-[2.4rem] lg:mb-[3rem] mb-[4rem]">
              The pain-free way to shop for everyone's tastes and dietary needs.
            </p>
            <div className="flex gap-[1.6rem] md:gap-[3.9rem]">
              <a href="#">
                <img src={appStore} alt="appStore" />
              </a>
              <a href="#">
                <img src={googlePlay} alt="googlePlay" />
              </a>
            </div>
            <img
              src="/bgs/banenrBgArrow.svg"
              alt="I"
              className="absolute top-[50%] -translate-y-[180%] right-[-30%] hidden  lg:inline-block"
            />
          </div>

          <div>
            <figure className="">
              <img
                src="/bgs/homeMobileTemp.png"
                alt="ingrediCheck"
                className="w-full"
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[.1%] w-full">
        <img
          className="absolute w-full"
          src="/bgs/ExcludeTemp.svg"
          alt="ingrediCheck"
        />
        <img
          src="/bgs/ExcludeWhite.svg"
          alt="ingrediCheck"
          className="w-full"
        />
      </div>
    </section>
  );
};
export default HomeBanner;
