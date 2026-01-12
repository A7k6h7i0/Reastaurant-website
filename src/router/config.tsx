import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const RoomsPage = lazy(() => import('../pages/rooms/page'));
const PackagesPage = lazy(() => import('../pages/packages/page'));
const BlogPage = lazy(() => import('../pages/Blog/BlogPage'));
const ExperiencesPage = lazy(() => import('../pages/experiences/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/rooms',
    element: <RoomsPage />,
  },
  {
    path: '/packages',
    element: <PackagesPage />,
  },
  {
    path: '/experiences',
    element: <ExperiencesPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
