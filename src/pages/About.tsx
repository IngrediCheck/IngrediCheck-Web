// import AboutBanner from "../components/screen/About/AboutBanner";
import AboutContact from "../components/screen/About/AboutContact";
import AboutFounder from "../components/screen/About/AboutFounder";
import AboutMission from "../components/screen/About/AboutMission";

const About = () => {
  return (
    <>
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
