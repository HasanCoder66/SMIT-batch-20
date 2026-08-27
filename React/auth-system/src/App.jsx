import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Dashboard/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetailPage from "./pages/UserDetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<UserDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
