import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import RootLayout from './RootLayout';
import Header from './files/Header/header';
import Footer from './files/Footer/footer';
import Home from './files/Home/home';
import Projects from './files/Projects/projects';
import CoCurricular from './files/CC/cc';
import Certifications from './files/Certifications/cert';
import CodingProfiles from './files/CP/cp';
import RoutingError from './RoutingError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <RoutingError />, 
    children: [
      { index: true, element: <Home /> }, 
      { path: 'projects', element: <Projects /> },
      { path: 'co-curricular', element: <CoCurricular /> },
      { path: 'certifications', element: <Certifications /> },
      { path: 'coding-profiles', element: <CodingProfiles /> },
      { path: '*', element: <Navigate to="/" replace /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;