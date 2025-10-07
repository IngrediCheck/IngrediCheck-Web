import { Outlet, ScrollRestoration } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ErrorBoundary from "../components/common/ErrorBoundary";
import SEO from "../components/common/SEO";
import { STORE_LINKS } from "../data/storefronts";

const RootLayout = () => {
  // Organization schema - appears on all pages
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FUNGEE LLC',
    alternateName: 'IngrediCheck',
    url: 'https://ingredicheck.app/',
    logo: 'https://www.ingredicheck.app/favicon.svg',
    description:
      'FUNGEE LLC is the company behind IngrediCheck, a smart food scanning app that helps people with dietary restrictions and food allergies make safe food choices.',
    email: 'hello@ingredicheck.app',
    foundingDate: '2024',
    sameAs: [
      'https://twitter.com/realsanketp',
      STORE_LINKS.apple.url,
      STORE_LINKS.google.url,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@ingredicheck.app',
      contactType: 'Customer Support',
      availableLanguage: 'English',
    },
  };

  // WebSite schema - appears on all pages
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IngrediCheck',
    alternateName: 'IngrediCheck - Smart Food Scanner',
    url: 'https://ingredicheck.app/',
    description:
      'IngrediCheck helps people with dietary restrictions and food allergies scan food labels to instantly verify if products fit their dietary needs.',
    publisher: {
      '@type': 'Organization',
      name: 'FUNGEE LLC',
    },
    inLanguage: 'en-US',
    copyrightYear: 2024,
    copyrightHolder: {
      '@type': 'Organization',
      name: 'FUNGEE LLC',
    },
  };

  return (
    <>
      <SEO structuredData={[organizationSchema, websiteSchema]} />
      <header>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
      </header>

      <main>
        <ScrollRestoration />
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="text-[2rem] text-green-dark font-inter">Loading...</div>
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>

      <footer>
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </footer>
    </>
  );
};

export default RootLayout;
