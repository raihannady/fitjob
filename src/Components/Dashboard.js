import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Datatable from "./Datatable";
import Dataform from "./Dataform";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="*" element={<Datatable />} />
        <Route path="/dataform" element={<Dataform />} />
      </Routes>
    </>
  );
};

export default Dashboard;
