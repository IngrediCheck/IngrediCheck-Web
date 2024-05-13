import { GoDotFill } from "react-icons/go";

const PrivacyTerms = () => {
  return (
    <section>
      <div className="container px-[1.6rem] md:pl-[6.4rem] pb-[10rem] md:pb-[10.9rem]">
        <div className="flex flex-col gap-y-[3.1rem] [&_h3]:font-inter [&_h3]:font-bold [&_h3]:text-[2rem] [&_h3]:md:text-[2.4rem] [&_h3]:text-dark [&_p]:font-inter [&_p]:text-[1.4rem] [&_p]:text-dark ">
          {/* term 1 */}
          <div>
            <h3>I. Introduction</h3>
            <p className="mt-[3rem]">
              Welcome to blaz.ai. We are dedicated to maintaining the privacy
              and protection of your personal data. This Privacy Notice outlines
              the information we collect, how we use it, and your rights
              concerning that information.
            </p>
          </div>
          {/* term 1 */}

          {/* term 2*/}
          <div>
            <h3>II. Information We Collect</h3>
            <p className="mt-[3rem]">
              While using blaz.ai, we may collect the following information:
            </p>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Personal identification information: such as name, email
                address, and organization name.
              </p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Technical data: such as IP addresses, browser type, operating
                system, and other related information.
              </p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Contract data: the specifics of the smart contracts you test
                with our service (although we endeavor to work with anonymized
                or non-sensitive data when possible).
              </p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Usage data: analytics about how you use and interact with our
                platform.
              </p>
            </div>
          </div>
          {/* term 2 */}

          {/* term 3 */}
          <div>
            <h3>III. How We Use Your Information</h3>
            <p className="mt-[3rem]">We use the information we collect to: </p>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>Improve and personalize our services.</p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>Address customer service requests and support needs.</p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Aggregate usage analytics to identify trends and improve user
                experience.
              </p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>Ensure the security and integrity of our platform.</p>
            </div>
            <div className="flex items-center gap-x-[0.8rem]">
              <GoDotFill className="text-dark" />
              <p>
                Communicate updates, promotions, and news about our services.
              </p>
            </div>
          </div>
          {/* term 3 */}

          {/* term 4 */}
          <div>
            <h3>IV. Data Protection</h3>
            <p className="mt-[3rem]">
              We implement robust security measures to protect your data,
              including [specific security methods, e.g., SSL, encryption,
              regular vulnerability assessments].
            </p>
          </div>
          {/* term 4 */}

          {/* term 5 */}
          <div>
            <h3>V. Cookies</h3>
            <p className="mt-[3rem]">
              We utilize cookies to enhance user experience, track site usage,
              and facilitate other features. You can choose to disable cookies
              through your browser settings, but doing so may affect some
              platform functionalities.
            </p>
          </div>
          {/* term 5 */}

          {/* term 6 */}
          <div>
            <h3>VI. Third-Party Services</h3>
            <p className="mt-[3rem]">
              Blaz.ai may integrate with third-party services to enhance its
              functionalities. These third-party services have their own privacy
              policies, and we encourage users to review them.
            </p>
          </div>
          {/* term 6 */}

          {/* term 7 */}
          <div>
            <h3>VII. Your Rights</h3>
            <p className="mt-[3rem]">
              Depending on your jurisdiction, you may have rights related to
              your personal information. This can include the right to access,
              correct, or delete your data. If you wish to exercise any of these
              rights, please contact us at [Contact Email/Details].
            </p>
          </div>
          {/* term 7 */}

          {/* term 8 */}
          <div>
            <h3>VIII. Changes to this Notice</h3>
            <p className="mt-[3rem]">
              We may periodically update this Privacy Notice. When changes are
              significant, we will notify users through the platform or via
              email.
            </p>
          </div>
          {/* term 8 */}

          {/* term 9 */}
          <div>
            <h3>IX. Contact Us</h3>
            <p className="mt-[3rem]">
              For any concerns or questions about this Privacy Notice or your
              data, please reach out to us at:
            </p>
          </div>
          {/* term 9 */}
        </div>
      </div>
    </section>
  );
};

export default PrivacyTerms;
