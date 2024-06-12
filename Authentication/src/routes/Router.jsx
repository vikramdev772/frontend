import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Home from "../screens/Home";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/h" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
