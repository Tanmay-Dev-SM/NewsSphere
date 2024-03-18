import React from "react";
import { Outlet } from "react-router-dom";

// OUR COMPONENTS
import Header from "./components/Header/Header";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
