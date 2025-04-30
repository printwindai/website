// Final code for index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contactsales';
import Product from './pages/product';
// import Support from './pages/support';
// import Investors from './pages/investors';
import Careers from './pages/careers';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home />,
  },
  {
    path:"/Product",
    element: <Product />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Careers",
    element: <Careers />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();