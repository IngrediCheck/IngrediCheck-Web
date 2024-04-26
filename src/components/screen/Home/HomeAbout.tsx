// import bgOne from "../../../assets/images/i/shape_1.png";
// import bgTwo from "../../../assets/images/i/shape_2.png";
import bgTwo from "../../../assets/images/i/bgTwoTemp.svg";
import bgOne from "../../../assets/images/i/bgOne.svg";
// import imgUpload from "../../../assets/images/i/image-upload.svg";
// import checkCircle from "../../../assets/images/i/check-circle.svg";
// import product1 from "../../../assets/images/products/prodcut1.png";
import meals from "../../../assets/images/products/meals.svg";
import HomeAboutTextBox from "../../common/Home/HomeAboutTextBox";
const HomeAbout = () => {
  return (
    <>
      <section className="mt-[5.6rem] md:mt-0 relative pb-[15rem] md:pb-[20.7rem]">
        <div className="container lg:p-[8rem]">
          {/* 1st start */}
          <div className="flex items-center justify-between flex-col md:flex-row gap-[3.2rem] md:gap-0">
            <div className="relative">
              <figure className="w-[31.115rem] md:w-full">
                <img src={bgOne} alt="ingrediCheck" />
              </figure>
              {/* <div className="bg-white/70 backdrop-blur-[2.51636rem] shadow-[0_0_1.09985rem_rgba(0,0,0,0.1)] flex flex-col items-center gap-[.901rem] md:gap-[1.6rem] rounded-[.831rem] md:rounded-[1.32rem] max-w-[18.459rem] md:max-w-[29.3rem] h-[25.326rem] md:h-[40.2rem] pt-[1.481rem] md:pt-[2.3rem] absolute top-[12%] md:left-[13%] left-[18%]">
                <div className="bg-green rounded-[.831rem] md:rounded-[1.32rem] translate-x-[.867rem] md:translate-x-[2.3rem] p-[1.3rem] md:p-[2rem] max-w-[18.823rem] md:max-w-[29.879rem] h-[14.949rem] md:h-[23.634rem] flex gap-[.847rem] md:gap-[1.3rem]">
                  <img
                    src={product1}
                    alt="Milk"
                    className="w-[11rem] md:w-[17.5rem]"
                  />
                  <div className="bg-white flex items-center justify-center flex-col text-center  rounded-[.88rem] w-[7rem]">
                    <img
                      src={imgUpload}
                      alt="imgUpload"
                      className="w-[2.272rem] md:w-[4.399rem]"
                    />
                    <p className="text-green font-semibold text-[.901rem] md:text-[1.43rem] w-[90%]">
                      Upload a photo
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center text-green-btnText bg-green-btnBg gap-[.923rem] w-[90%] h-[4.922rem]">
                  <img
                    src={checkCircle}
                    alt="C"
                    className="w-[1.551rem] md:w-auto"
                  />
                  <p className="font-bold text-[.969rem] md:text-[1.538rem]">
                    Matched
                  </p>
                </div>
                <div className="w-[90%]">
                  <h6 className="font-semibold text-dark-dark2 text-[.824rem] md:text-[1.308rem]">
                    Ingredients
                  </h6>
                  <p className=" text-dark mt-[.504rem] md:mt-[.8rem] text-[.727rem] md:text-[1.154rem] leading-[1.5em] tracking-[-0.012rem] md:tracking-[-0.018rem] ">
                    Menthol (4.8 Mg), Cough Suppressant, Oral Anesthetic.
                    Inactive Ingredients: Color (Caramel),
                  </p>
                </div>
              </div> */}
            </div>
            <HomeAboutTextBox
              heading="Tired of Reading Labels? IngrediCheck made it easy"
              para="Grocery shopping with dietary restrictions just got easier.
              IngrediCheck lets you scan food labels to instantly see if they fit
              your dietary needs. For you or your loved ones, bring home the right
              food without the guesswork. Simple, quick, no hassle."
            />
          </div>
          {/* 1st end */}
          {/* 2nd start */}
          <div className="mt-[5.6rem] md:mt-[12rem] flex items-center justify-between flex-col md:flex-row-reverse gap-[3.2rem] md:gap-0">
            <div className="relative">
              <figure className="w-[31.115rem] md:w-full">
                <img src={bgTwo} alt="ingrediCheck" />
              </figure>
              {/* <div className="bg-white/70 backdrop-blur-[2.51636rem] shadow-[0_0_1.09985rem_rgba(0,0,0,0.1)] flex flex-col items-center gap-[.901rem] md:gap-[1.6rem] rounded-[.831rem] md:rounded-[1.32rem] max-w-[18.459rem] md:max-w-[29.3rem] h-[25.326rem] md:h-[40.2rem] pt-[1.481rem] md:pt-[2.3rem] absolute top-[12%] md:left-[13%] left-[18%]">
                <div className="bg-green rounded-[.831rem] md:rounded-[1.32rem] translate-x-[.867rem] md:translate-x-[2.3rem] p-[1.3rem] md:p-[2rem] max-w-[18.823rem] md:max-w-[29.879rem] h-[14.949rem] md:h-[23.634rem] flex gap-[.847rem] md:gap-[1.3rem]">
                  <img
                    src={product1}
                    alt="Milk"
                    className="w-[11rem] md:w-[17.5rem]"
                  />
                  <div className="bg-white flex items-center justify-center flex-col text-center  rounded-[.88rem] w-[7rem]">
                    <img
                      src={imgUpload}
                      alt="imgUpload"
                      className="w-[2.272rem] md:w-[4.399rem]"
                    />
                    <p className="text-green font-semibold text-[.901rem] md:text-[1.43rem] w-[90%]">
                      Upload a photo
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center text-green-btnText bg-green-btnBg gap-[.923rem] w-[90%] h-[4.922rem]">
                  <img
                    src={checkCircle}
                    alt="C"
                    className="w-[1.551rem] md:w-auto"
                  />
                  <p className="font-bold text-[.969rem] md:text-[1.538rem]">
                    Matched
                  </p>
                </div>
                <div className="w-[90%]">
                  <h6 className="font-semibold text-dark-dark2 text-[.824rem] md:text-[1.308rem]">
                    Ingredients
                  </h6>
                  <p className=" text-dark mt-[.504rem] md:mt-[.8rem] text-[.727rem] md:text-[1.154rem] leading-[1.5em] tracking-[-0.012rem] md:tracking-[-0.018rem] ">
                    Menthol (4.8 Mg), Cough Suppressant, Oral Anesthetic.
                    Inactive Ingredients: Color (Caramel),
                  </p>
                </div>
              </div> */}
            </div>
            <HomeAboutTextBox
              heading="Discover and Remember Your Foodie Favorites"
              para="Forgot the name of a new favorite food? IngrediCheck ends the guesswork. Save and collect your top food finds with a tap, ensuring your favorites are always remembered."
            />
          </div>
          {/* 2nd end */}
        </div>
        <div className="absolute -bottom-[.1%] sm:bottom-0 w-full">
          <img src="/bgs/ExcludeTwo.svg" alt="exclude" className="w-full" />
          <img
            className="absolute left-[50%] top-[-50%] md:top-[-25%]  translate-x-[-50%] w-[20.7rem] md:w-[30rem] lg:w-[37.8rem] xl:w-[37.8rem] 2xl:w-[59.8rem]"
            src={meals}
            alt="meals"
          />
        </div>
      </section>
    </>
  );
};
export default HomeAbout;
