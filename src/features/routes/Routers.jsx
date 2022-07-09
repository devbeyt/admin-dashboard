import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./../components/nav/Nav";
import Home from "./../pages/home/Home";
import './routers.css'

function Routers() {
  return (
    <div className="routers">
    <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Routers;
