import goldEllipse from "../../../assets/images/i/goldEllipse.svg";
import SectionHeading from "../../common/SectionHeading";
const HomePricing = () => {
  return (
    <section className="h-[100vh] sm:h-[150vh]  md:h-[180vh] lg:h-auto lg:pb-[20rem] relative bg-[url(/bgs/goldBg.svg)] bg-no-repeat bg-cover flex items-center justify-center">
      <img
        src={goldEllipse}
        alt="gold ellips"
        className="hidden lg:block absolute left-[50%] top-0 translate-y-[-30%] translate-x-[-50%] -z-10"
      />
      <div className="container lg:pt-[30rem] z-30 relative ">
        <div className="text-green-dark">
          <SectionHeading headign="Pricing" />
        </div>
        <div className="mt-[3.2rem] md:mt-[7.6rem] py-[8rem] px-[3.2rem] h-[48.5rem] md:h-[40.6rem] bg-white w-[99%] md:w-[80%] mx-auto rounded-[2rem]">
          <div className="max-w-[67.3rem] mx-auto">
            <div className="text-dark-dark2">
              <SectionHeading headign="Coming Soon" />
            </div>
            <div className="text-[1.4rem] sm:text-[1.8rem] mt-[2.4rem] text-dark-dark2 leading-[3.4rem]">
              <p>
                We are finalizing IngrediCheck's pricing to ensure it remains
                accessible and affordable. Please stay tuned for updates!
              </p>
              <p>
                In the meantime, we highly value your feedback and encourage you
                to share your thoughts with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HomePricing;
