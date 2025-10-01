import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";
import HomePricing from "../components/screen/Home/HomePricing";
import HomeSlider from "../components/screen/Home/HomeSlider";
import SEO from "../components/common/SEO";

const Home = () => {
  return (
    <>
      <SEO
        title="IngrediCheck - Smart Food Scanner for Dietary Restrictions"
        description="Scan food labels instantly to check if they fit your dietary needs. IngrediCheck makes grocery shopping pain-free for everyone with dietary restrictions, allergies, and food preferences."
        keywords="food scanner, dietary restrictions, food allergies, grocery shopping, ingredient checker, food safety, dietary preferences, barcode scanner, food app, scan food labels, dietary needs"
        url="https://ingredicheck.app/"
      />
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
