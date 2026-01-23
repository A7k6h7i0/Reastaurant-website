import { lazy } from "react";
import { RouteObject } from "react-router-dom";

/* ================= PAGES ================= */
const HomePage = lazy(() => import("../pages/home/page"));
const AboutPage = lazy(() => import("../pages/about/page"));
const RoomsPage = lazy(() => import("../pages/rooms/page"));
const PackagesPage = lazy(() => import("../pages/packages/page"));

const BookPackagePage = lazy(() => import("../pages/book/BookPackage"));
const BookOtherIslandPackage = lazy(
  () => import("../pages/book/BookOtherIslandPackage")
);

const BlogPage = lazy(() => import("../pages/Blog/BlogPage"));
const ExperiencesPage = lazy(() => import("../pages/experiences/page"));
const ContactPage = lazy(() => import("../pages/contact/page"));

const TermsPage = lazy(() => import("../pages/policies/TermsPage"));
const RefundPolicyPage = lazy(() => import("../pages/policies/RefundPolicyPage"));
const PrivacyPolicyPage = lazy(() => import("../pages/policies/PrivacyPolicyPage"));

const NotFound = lazy(() => import("../pages/NotFound"));

/* ================= ROUTES ================= */
const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/rooms", element: <RoomsPage /> },
  { path: "/packages", element: <PackagesPage /> },

  /* Booking Routes */
  { path: "/book/:id", element: <BookPackagePage /> },
  { path: "/book/other/:id", element: <BookOtherIslandPackage /> },

  /* Other Pages */
  { path: "/experiences", element: <ExperiencesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <BlogPage /> },

  /* Policies */
  { path: "/terms-and-conditions", element: <TermsPage /> },
  { path: "/refund-policy", element: <RefundPolicyPage /> },
  { path: "/privacy-policy", element: <PrivacyPolicyPage /> },

  /* Fallback */
  { path: "*", element: <NotFound /> },
];

export default routes;
