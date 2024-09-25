// src/app/Layout.tsx
import React from "react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="bg-white shadow w-full py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">User Management</h1>
          <nav>
            <a href="/login" className="text-blue-500 hover:underline mx-2">
              Login
            </a>
            <a href="/register" className="text-green-500 hover:underline mx-2">
              Register
            </a>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4">{children}</main>
      <footer className="bg-white py-4 text-center">
        <p className="text-gray-600">
          © 2024 User Management. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
