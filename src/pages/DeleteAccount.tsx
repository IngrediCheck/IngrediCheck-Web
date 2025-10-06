import SEO from "../components/common/SEO";
import { generateBreadcrumbSchema } from "../utils/breadcrumbSchema";

const DeleteAccount = () => {
  const breadcrumbSchema = generateBreadcrumbSchema("/delete-account");

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Delete your IngrediCheck account',
    description:
      'Follow these steps in the IngrediCheck mobile app to delete your account and associated data.',
    totalTime: 'PT1M',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Open the IngrediCheck app',
        text: 'Launch IngrediCheck on your iOS or Android device and sign in if needed.',
      },
      {
        '@type': 'HowToStep',
        name: 'Go to Settings',
        text: 'From the home screen, tap the menu icon to open Settings.',
      },
      {
        '@type': 'HowToStep',
        name: "Tap 'Delete Data & Account'",
        text: "Scroll to the Account section. If you signed in with Google or Apple, select 'Delete Data & Account'. If you use a guest session, select 'Reset App State'.",
      },
      {
        '@type': 'HowToStep',
        name: 'Confirm deletion',
        text: 'Follow the on-screen confirmation to permanently delete your account and remove stored preferences.',
      },
    ],
  } as const;

  return (
    <>
      <SEO
        title="Delete Account - IngrediCheck"
        description="Learn how to delete your IngrediCheck account and remove your personal data. Go to Settings in the app, tap Delete Data & Account, and contact owner@ingredicheck.app for help."
        keywords="IngrediCheck delete account, IngrediCheck data deletion, IngrediCheck account removal"
        url="https://ingredicheck.app/delete-account"
        structuredData={[breadcrumbSchema, howToSchema]}
      />
      <section className="bg-[#FCF0D5]">
        <div className="container px-[1.6rem] md:px-[6.4rem]">
          <div className="py-[3.2rem] md:py-[6.4rem]">
            <h1 className="font-inter font-bold text-[2.4rem] md:text-[4rem] text-dark-dark">
              Delete Data & Account
            </h1>
            <p className="font-inter text-[1.6rem] md:text-[1.8rem] text-dark mt-[1.6rem] max-w-[72rem]">
              You can request deletion of your IngrediCheck account directly from within the mobile app. Follow the steps below to remove your profile, saved preferences, and any data stored on your device.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[4.8rem] md:py-[8rem]">
        <div className="container px-[1.6rem] md:px-[6.4rem] max-w-[96rem]">
          <div className="bg-light shadow-lg rounded-[2.4rem] md:rounded-[3.2rem] p-[2.4rem] md:p-[4rem] space-y-[2.4rem]">
            <div className="space-y-[1.6rem]">
              <h2 className="font-inter font-semibold text-[2rem] md:text-[2.8rem] text-dark-dark">
                Delete your account in the app
              </h2>
              <ol className="list-decimal list-inside space-y-[1.2rem] text-[1.6rem] md:text-[1.8rem] text-dark">
                <li>Open the IngrediCheck app on your device.</li>
                <li>Tap the settings icon on the home screen to open <strong>Settings</strong>.</li>
                <li>
                  Scroll to the <strong>Account</strong> section. If you signed in with Google or
                  Apple, choose <strong>Delete Data &amp; Account</strong>. If you use a guest session,
                  choose <strong>Reset App State</strong> to clear your data.
                </li>
                <li>Confirm your choice to permanently delete your data and account.</li>
              </ol>
              <p className="text-[1.6rem] md:text-[1.8rem] text-dark">
                The deletion process removes your local preferences and, when you choose Delete Data &amp; Account,
                signals our support team to complete removal of any associated records.
              </p>
            </div>

            <div className="rounded-[2rem] bg-green-extraLight p-[2.4rem] md:p-[3.2rem] space-y-[1.2rem]">
              <h3 className="font-inter font-semibold text-[1.8rem] md:text-[2.2rem] text-green-dark">
                Need help?
              </h3>
              <p className="text-[1.6rem] md:text-[1.8rem] text-dark">
                Email us at{' '}
                <a
                  className="text-green-dark underline decoration-green-dark/40 underline-offset-4"
                  href="mailto:owner@ingredicheck.app"
                >
                  owner@ingredicheck.app
                </a>{' '}
                if you have questions about your data or run into any issues completing the steps above.
              </p>
            </div>

            <figure className="space-y-[1.2rem]">
              <img
                src="/images/delete-account-settings.jpeg"
                alt="IngrediCheck app settings screen showing account management options"
                className="w-full rounded-[2.4rem] border border-green-light/30"
                loading="lazy"
              />
              <figcaption className="text-[1.4rem] md:text-[1.6rem] text-dark-light">
                IngrediCheck Settings screen showing the Account section where Delete Data &amp; Account or Reset App State can be selected.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeleteAccount;
