// import AboutBanner from "../components/screen/About/AboutBanner";
import AboutContact from "../components/screen/About/AboutContact";
import AboutFounder from "../components/screen/About/AboutFounder";
import AboutMission from "../components/screen/About/AboutMission";
import SEO from "../components/common/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About IngrediCheck - Our Mission to Simplify Grocery Shopping"
        description="Learn about IngrediCheck's mission to make grocery shopping pain-free for families with dietary restrictions. Meet our founder Sanket Patel and discover how we're revolutionizing food scanning technology."
        keywords="about IngrediCheck, food scanner app, dietary restrictions, grocery shopping, founder story, mission statement, food technology, ingredient checking"
        url="https://ingredicheck.app/about"
      />
      {/* <AboutBanner /> */}
      <section aria-label="About the Founder">
        <AboutFounder />
      </section>
      <section aria-label="Our Mission">
        <AboutMission />
      </section>
      <section aria-label="Contact Information">
        <AboutContact />
      </section>
    </>
  );
};
export default About;
