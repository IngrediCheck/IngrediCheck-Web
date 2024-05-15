import { Link } from "react-router-dom";

const PrivacyTerms = () => {
  return (
    <section>
      <div className="container px-[1.6rem] md:pl-[6.4rem] pb-[10rem] md:pb-[10.9rem]">
        <div className="flex flex-col gap-y-[3.1rem] [&_h3]:font-inter [&_h3]:font-bold [&_h3]:text-[2rem] [&_h3]:md:text-[2.4rem] [&_h3]:text-dark [&_h4]:font-inter [&_h4]:font-bold [&_h4]:text-[1.5rem] [&_h4]:md:text-[1.8rem] [&_h4]:text-dark [&_p]:font-inter [&_p]:text-[1.4rem] [&_p]:text-dark ">

          <div>
            <p>
                This Privacy Policy is a contract entered into between You ("you," "your," "yours") and FUNGEE LLC ("we," "us," "our," "FUNGEE LLC").
            </p>
            <p className="mt-[3rem]">
                This policy applies to all information collected or submitted on the IngrediCheck website (the "Site") and application (the "App"). All defined terms have the meaning assigned to them in the Terms of Use.
            </p>
            <p className="mt-[3rem]">
                We limit the collection of personal information to cases where we truly need it or is required for the operation of our products. Personal information is never shared except to comply with the law, to develop and improve our products, or to protect our rights.
            </p>
          </div>
          <div>
            <h3>Information We Collect</h3>
          </div>
          <div>
            <h4>User Data</h4>
            <p className="mt-[2rem]">
                We use <Link to='https://www.supabase.com' className='underline'>Supabase</Link> as a Backend for storing all user data. Supabase's Privacy Policy can be found <Link to='https://supabase.com/privacy' className="underline">here</Link>.
            </p>
          </div>
          <div>
            <h4>User-Generated Content</h4>
            <p className="mt-[2rem]">
                Users contribute content to a "Community Database" by taking pictures of packaged food items. This content is stored in our
                Backend Database for processing and moderation. The content of the Community Database is made available to all our users.
            </p>
          </div>
          <div>
            <h4>Usage Data</h4>
            <p className="mt-[2rem]">
                We use anonymous analytics data provided by Apple.
            </p>
          </div>
          <div>
            <h4>Payment Data and Purchase History</h4>
            <p className="mt-[2rem]">
              We use Apple as a payment provider for paid subscriptions. Apple's Privacy Policy can be found <Link to='https://www.apple.com/legal/privacy/en-ww/' className="underline">here</Link>.
            </p>
          </div>
          <div>
            <h4>User and Device Identifiers</h4>
            <p className="mt-[2rem]">
              We use randomly generated identifiers in the App to anonymously identify devices and users. These identifiers may be synced to your other devices via your iCloud account. These identifiers are associated with data sent to our servers and other third parties, including Supabase and OpenAI.
            </p>
          </div>
          <div>
            <h4>Technical Basics</h4>
            <p className="mt-[2rem]">
              Our server software and any third-party services may store basic technical information, such as your IP address, in temporary memory or logs. This information is used for operation and maintenance purposes.
            </p>
          </div>
          <div>
            <h4>Email</h4>
            <p className="mt-[2rem]">
              If you email us for support or other feedback, the emails and email addresses will be retained. The email addresses will only be used to reply to the concerns or suggestions raised and will never be used for any marketing purpose.
            </p>
          </div>
          <div>
            <h3>Information Usage</h3>
            <p className="mt-[2rem]">
                We use the information we collect ("Personal Data") to operate and improve the Site, the App, and customer support.
            </p>
            <p className="mt-[2rem]">
                We may disclose your information in response to subpoenas, court orders, or other legal requirements; to exercise our legal rights or defend against legal claims; to investigate, prevent, or take action regarding illegal activities, suspected fraud or abuse, violations of our policies; or to protect our rights and property.
            </p>
            <p className="mt-[2rem]">
                In the future, we may sell to, buy, merge with, or partner with other businesses. In such transactions, user information may be among the transferred assets.
            </p>
          </div>
          <div>
            <h4>AI Provider</h4>
            <p className="mt-[2rem]">
              We use <Link to='https://www.openai.com' className='underline'>OpenAI</Link> as an AI provider for our service. OpenAI's Privacy Policy can be found <Link to='https://openai.com/policies/privacy-policy' className="underline">here</Link>.
            </p>
          </div>
          <div>
            <h3>International Transfers of Information</h3>
            <p className="mt-[2rem]">
                Information may be processed, stored, and used outside of the country in which you are located. Data privacy laws vary across jurisdictions, and different laws may be applicable to your data depending on where it is processed, stored, or used.
            </p>
          </div>
          <div>
            <h3>Your Consent</h3>
            <p className="mt-[2rem]">
                By using the Site or the App, you consent to this privacy policy.
            </p>
          </div>
          <div>
            <h3>Contacting Us</h3>
            <p className="mt-[2rem]">
                If you have questions regarding this privacy policy, you may email privacy@ingredicheck.app.
            </p>
          </div>
          <div>
            <h3>Changes to This Policy</h3>
            <p className="mt-[2rem]">
                From time to time, we may change and/or update this Privacy Policy. We recommend you regularly review this page for updates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrivacyTerms;
