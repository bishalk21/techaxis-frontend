import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <Header />

      <main style={{ minHeight: "calc(100vh - 200px)" }} className="container">
        {children}
      </main>

      <Footer />
    </div>
  );
};
