import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";
import Home from "./Pages/Home";
import Watches from "./Pages/Watches";
import Watches_Detail from "./Pages/Watches_Detail";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/watches" element={<Watches />}></Route>
      <Route path="/watches/:id" element={<Watches_Detail />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
}
