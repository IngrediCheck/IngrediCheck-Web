import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const RootLayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <ScrollRestoration />
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
