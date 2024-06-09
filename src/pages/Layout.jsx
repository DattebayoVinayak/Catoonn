import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
