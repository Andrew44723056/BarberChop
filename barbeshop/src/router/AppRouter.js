import React from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
// import NavLink from "react-bootstrap/esm/NavLink";

function AppRouter() {
    return (
      <div className="App">
        <Navbar/>
          {/* <NavLink/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
    );
  }
export default AppRouter;
