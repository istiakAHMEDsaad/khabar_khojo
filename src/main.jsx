import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router/dom';
import { ToastContainer } from 'react-toastify';
import router from './Routes/router.jsx';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import './index.css';

const root = document.getElementById('root');

createRoot(root).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
