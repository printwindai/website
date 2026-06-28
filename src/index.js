import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './product.css';
import './about.css';
import './blog.css';
import './careers.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home    from './pages/home';
import About   from './pages/about';
import Contact from './pages/contactsales';
import Product from './pages/product';
import Careers from './pages/careers';
import BlogCoffee from './pages/blog-coffee';
import NotFound from './pages/notfound';

const router = createBrowserRouter([
  { path: '/',        element: <Home /> },
  { path: '/product', element: <Product /> },
  { path: '/about',   element: <About /> },
  { path: '/blog/solarola-coffee-vendors', element: <BlogCoffee /> },
  { path: '/contact', element: <Contact /> },
  { path: '/careers', element: <Careers /> },
  { path: '/Product', element: <Product /> },
  { path: '/About',   element: <About /> },
  { path: '/Contact', element: <Contact /> },
  { path: '/Careers', element: <Careers /> },
  { path: '*',        element: <NotFound /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
