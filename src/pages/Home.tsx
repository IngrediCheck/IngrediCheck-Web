import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";
import HomePricing from "../components/screen/Home/HomePricing";
import HomeSlider from "../components/screen/Home/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <section aria-label="About IngrediCheck">
        <HomeAbout />
      </section>
      <section aria-label="App Features">
        <HomeFeatures />
      </section>
      <section aria-label="User Testimonials">
        <HomeSlider />
      </section>
      <section aria-label="Pricing Information">
        <HomePricing />
      </section>
    </>
  );
};
export default Home;
