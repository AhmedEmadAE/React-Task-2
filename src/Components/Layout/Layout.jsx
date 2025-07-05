import React from "react";
import Navbar from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="row">
          <Outlet />
        </div>
      </div>


      <Footer />
    </>
  );
}
