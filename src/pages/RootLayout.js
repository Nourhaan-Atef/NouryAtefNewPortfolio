import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
const RootLayout = () => {
  return (
    <>
      <div className="h-full bg-veryDarkVioletMain">
        <NavBar />
   
          <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
