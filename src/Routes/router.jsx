import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import HomePage from '../Pages/HomePage';
import BrowsePage from '../Pages/BrowsePage';
import FilterByCategory from '../Pages/FilterByCategory';
import MealCardDetails from '../components/Card_Item/MealCardDetails';
import CategoryPage from '../Pages/CategoryPage';

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
      {
        path: '/category/:id',
        element: <CategoryPage/>,
      },
      {
        path: '/category/details/:id',
        element: <MealCardDetails/>,
      }
    ],
  },
]);

export default router;
