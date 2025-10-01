import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import ErrorBoundary from "../components/common/ErrorBoundary";

const RootLayout = () => {
  return (
    <>
      <header>
        <ErrorBoundary>
          <Navbar />
        </ErrorBoundary>
      </header>

      <main>
        <ScrollRestoration />
        <ErrorBoundary>
          <Outlet />
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
