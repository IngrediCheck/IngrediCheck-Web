import { Link } from "react-router-dom";
import vector1 from "../../../assets/images/aboutContactImages/vector1.png";
import vector2 from "../../../assets/images/aboutContactImages/vector2.png";
import vector3 from "../../../assets/images/aboutContactImages/vector3.png";
import vector4 from "../../../assets/images/aboutContactImages/vector4.png";
const AboutContact = () => {
  return (
    <section>
      <div className="container py-[4.8rem] md:py-[10rem] ">
        <div className="bg-green-light bg-no-repeat bg-cover bg-center pt-[6rem] pb-[8.3rem] px-[1.6rem] lg:px-0 rounded-[20px] relative">
          <h2 className="font-fredoka font-medium text-[2.4rem] md:text-[4rem] text-white text-center">
            Get in touch
          </h2>
          <div className="max-w-[87.8rem] mx-auto">
            <p className="text-white mt-[2.17rem] md:mt-[3.2rem] text-[1.4rem] md:text-[2rem] leading-[3.2rem]">
              For help with any Issues, email me at <Link to='mailto:support@ingredicheck.app' className="underline">support@ingredicheck.app</Link>.
            </p>
            <p className="text-white mt-[2.17rem] md:mt-[3.2rem] text-[1.4rem] md:text-[2rem] leading-[3.2rem]">
              Send me any Feedback or High-Fives at <Link to='mailto:hello@ingredicheck.app' className="underline">hello@ingredicheck.app</Link>.
            </p>
            <p className="text-white mt-[2.17rem] md:mt-[3.2rem] text-[1.4rem] md:text-[2rem] leading-[3.2rem]">
              I'd love to hear from you! Every little detail matters, so please
              don't hesitate to reach out!
            </p>
          </div>
          <div>
            <img
              src={vector1}
              alt=""
              className="absolute top-0 left-[7%] md:block hidden"
            />
          </div>
          <div>
            <img
              src={vector2}
              alt=""
              className="absolute top-0 right-[0%] md:block hidden"
            />
          </div>
          <div>
            <img
              src={vector3}
              alt=""
              className="absolute top-0 left-[7%] md:hidden block"
            />
          </div>
          <div>
            <img
              src={vector4}
              alt=""
              className="absolute top-0 right-[0%] md:hidden block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContact;
