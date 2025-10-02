import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

// Lazy load non-critical pages
const About = lazy(() => import("../pages/About"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/terms-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
]);
