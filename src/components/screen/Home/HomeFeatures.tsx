import { featuresData, FeaturesDataType } from "../../../data/featuresData";
import SectionHeading from "../../common/SectionHeading";

const HomeFeatures = () => {
  return (
    <section className="bg-[url(/bgs/featuresBg.svg)] bg-no-repeat bg-cover pt-[10rem] pb-[13.2rem] md:pb-[27rem]">
      <div className="container">
        <div className="text-white">
          <SectionHeading headign="Features at Your Fingertips" />
        </div>
        <ul className="mt-[4rem] md:mt-[8rem] flex flex-wrap justify-between gap-y-[1.6rem] md:gap-y-[2.4rem]">
          {featuresData.map((item: FeaturesDataType) => {
            return (
              <li
                key={item.id}
                className="bg-white p-[3.2rem] md:p-[5rem] rounded-[1.218rem] md:rounded-[2rem] md:w-[calc(100%_/_2_-_2.4rem)] h-[22rem] md:h-[36.2rem] flex flex-col justify-between"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[4rem] md:w-[8rem]"
                />
                <h3 className="font-bold text-dark-dark text-[1.6rem] md:text-[2.4rem]">
                  {item.title}
                </h3>
                <p className="text-dark-dark2 text-[1.4rem] md:text-[1.6rem] leading-[1.8rem] md:leading-[3rem]">
                  {item.desc}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default HomeFeatures;
