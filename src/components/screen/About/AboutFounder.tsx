// import founderImage from "../../../assets/images/founderImage/founderImage.png";
import founderImg from "../../../assets/images/founderImage/founderImg.png";
const AboutFounder = () => {
  return (
    <section>
      <div className="container">
        <div className="md:max-w-[78rem] mx-auto py-[5.6rem] md:pt-[6.9rem] md:pb-[14.5rem] px-[1.6rem] lg:px-0 [&_p]:text-dark [&_p]:mt-[2.17rem] [&_p]:md:mt-[3.2rem] [&_p]:text-[1.4rem] [&_p]:md:text-[2rem] [&_p]:leading-[2.02rem] [&_p]:md:leading-[3.2rem]">
          <div className="text-center">
            <h2 className="font-fredoka font-semibold text-[2.2rem] md:text-[3.65rem] text-green-dark">
              About the founder
            </h2>
          </div>
          <div className="text-center">
            <div className="w-[12rem] h-[12rem] md:w-[15.5rem] md:h-[15.5rem] flex justify-center items-center rounded-full mx-auto bg-[linear-gradient(281.71deg,_#96CB02_16.78%,_#FAB222_73.53%)] mt-[2.4rem] md:mt-[3rem] [&_p]:font-inter">
                <img src={founderImg} alt="founderImg"  className="w-[10.5rem] h-[10.5rem] md:w-[13.5rem] md:h-[13.5rem] rounded-full"/>
            </div>
            {/* <div>
              <img src={founderImage} alt="founderImage" className="mx-auto" />
            </div> */}
            <p>
              <span className="font-bold">Sanket Patel</span>, Founder of
              IngrediCheck{" "}
            </p>
          </div>
          <div>
            <p>
              After spending 16 years as a software engineer at Microsoft, I
              decided to channel my energy into creating something meaningful
              for people like us. Living in Seattle with my wife and two kids, I
              wanted to make grocery shopping easier and safer for families
              dealing with dietary restrictions. IngrediCheck is my way of
              helping out, and I hope it makes a difference in your life too.
            </p>
            <p>
              Teaming up with the folks at StudioSalt for design, we've worked
              hard to make an app that's not just functional but also a joy to
              use. Here's to making grocery shopping a little less stressful and
              a lot more fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
