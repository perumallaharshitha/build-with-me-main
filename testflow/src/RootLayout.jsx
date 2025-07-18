// src/components/RootLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './files/Header/header';
import Footer from './files/Footer/footer';

function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
