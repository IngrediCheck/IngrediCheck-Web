import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";
import HomePricing from "../components/screen/Home/HomePricing";
import HomeSlider from "../components/screen/Home/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeFeatures />
      <HomeSlider />
      <HomePricing />
    </>
  );
};
export default Home;
