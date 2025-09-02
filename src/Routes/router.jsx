import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import BrowsePage from '../Pages/BrowsePage';
import AboutPage from '../Pages/AboutPage';
import FilterByCategory from '../Pages/FilterByCategory';
import MealCardDetails from '../components/Card_Item/MealCardDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/browse',
        element: <BrowsePage />,
      },
      {
        path: '/category',
        element: <FilterByCategory />,
      },
      {
        path: '/browse/:id',
        element: <MealCardDetails />,
      },
    ],
  },
]);

export default router;
