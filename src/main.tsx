import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Property } from './components/pages/Property.tsx';
import { NavBar } from './components/NavBar.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/property',
    element: <Property />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar></NavBar>
    <RouterProvider router={router} />
  </React.StrictMode>
);
