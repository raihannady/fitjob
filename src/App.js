import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Landingpage />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
