// src/layouts/DefaultLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-800 text-white p-4 shadow-lg">
        <span className="text-white text-xl font-bold">fitback</span>
  </header>
);

// Componente Footer
const Footer = () => (
  <footer className="bg-gray-800 text-gray-400 text-center p-3 text-xs mt-auto">
    FITBACK 2025 ®
  </footer>
);


const DefaultLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> 
      <Header />
      
      <main className="flex-grow max-w-7xl w-full mx-auto"> 
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default DefaultLayout;