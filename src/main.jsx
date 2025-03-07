import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Root from './pages/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import FilteredProducts from './components/FilteredProducts.jsx';
import ProductDetail from './components/ProductDetail.jsx';
import Dashboard from './components/Dashboard.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/MyData.json'), // Updated path
      },
      {
        path: '/Products',
        element: <FilteredProducts />,
        loader: () => fetch('/MyData.json'), // Updated path
      },
      {
        path: 'details/:detailsId',
        element: <ProductDetail />,
        loader: () => fetch('/MyData.json'), // Updated path
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: () => fetch('/MyData.json'), // Updated path
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
