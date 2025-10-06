/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";

// Lazy load non-critical pages
const About = lazy(() => import("../pages/About"));
const TermsAndConditions = lazy(() => import("../pages/TermsAndConditions"));
const PrivacyPolicy = lazy(() => import("../pages/PrivacyPolicy"));
const DeleteAccount = lazy(() => import("../pages/DeleteAccount"));

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
      {
        path: "/delete-account",
        element: <DeleteAccount />,
      },
    ],
  },
]);
