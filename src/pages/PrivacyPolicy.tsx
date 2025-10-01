import PrivacyNotice from "../components/screen/PrivacyPolicy/PrivacyNotice";
import PrivacyTerms from "../components/screen/PrivacyPolicy/PrivacyTerms";
import SEO from "../components/common/SEO";
import { generateBreadcrumbSchema } from "../utils/breadcrumbSchema";

const PrivacyPolicy = () => {
  const breadcrumbSchema = generateBreadcrumbSchema('/privacy-policy');
  
  return (
    <>
      <SEO
        title="Privacy Policy - IngrediCheck Data Protection & Privacy"
        description="Read IngrediCheck's privacy policy to understand how we collect, use, and protect your personal information. Learn about our data practices, third-party integrations, and your privacy rights."
        keywords="privacy policy, data protection, personal information, privacy rights, data collection, user privacy, GDPR compliance, data security"
        url="https://ingredicheck.app/privacy-policy"
        structuredData={breadcrumbSchema}
      />
      <PrivacyNotice />
      <PrivacyTerms />
    </>
  );
};
export default PrivacyPolicy;
