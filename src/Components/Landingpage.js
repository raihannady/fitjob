import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import About from "./About";
import Jobs from "./Jobs";
import Login from "./Login";
import Register from "./Register";

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Jobs />
            </>
          }
        />
        <Route
          path="/about/:id"
          element={
            <>
              <About />
              <Jobs />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Landingpage;
