import HomeAbout from "../components/screen/Home/HomeAbout";
import HomeBanner from "../components/screen/Home/HomeBanner";
import HomeFeatures from "../components/screen/Home/HomeFeatures";
import HomePricing from "../components/screen/Home/HomePricing";
import HomeSlider from "../components/screen/Home/HomeSlider";
import SEO from "../components/common/SEO";

const Home = () => {
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'IngrediCheck',
    description:
      'IngrediCheck is a smart food label scanner that helps people with dietary restrictions and allergies quickly verify if products fit their needs.',
    applicationCategory: 'HealthApplication',
    applicationSubCategory: 'MobileApplication',
    operatingSystem: 'iOS 16.0 or later',
    url: 'https://ingredicheck.app/',
    downloadUrl: 'https://apps.apple.com/us/app/ingredicheck/id6477521615',
    image: 'https://www.ingredicheck.app/bgs/homeMobileTemp.png',
    screenshot: ['https://www.ingredicheck.app/bgs/homeMobileTemp.png'],
    publisher: {
      '@type': 'Organization',
      name: 'FUNGEE LLC',
      url: 'https://ingredicheck.app/',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://apps.apple.com/us/app/ingredicheck/id6477521615',
    },
    inLanguage: 'en',
  };

  return (
    <>
      <SEO
        title="IngrediCheck - Smart Food Scanner for Dietary Restrictions"
        description="Scan food labels instantly to check if they fit your dietary needs. IngrediCheck makes grocery shopping pain-free for everyone with dietary restrictions, allergies, and food preferences."
        keywords="food scanner, dietary restrictions, food allergies, grocery shopping, ingredient checker, food safety, dietary preferences, barcode scanner, food app, scan food labels, dietary needs"
        url="https://ingredicheck.app/"
        structuredData={softwareApplicationSchema}
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
