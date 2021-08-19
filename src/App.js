import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Feed from "./Components/Pages/Feed";
import Login from "./Components/Pages/Login/LoginRoutes";
import Header from "./Components/Partials/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
