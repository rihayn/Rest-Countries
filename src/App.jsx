import React from "react";
import Countries from "./components/countries";
import Header from "./components/Header";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import { Country } from "./components/Country";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed w-full z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/countries/:name" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
