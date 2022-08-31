import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MultipleStocksLayout from "./pages/MultipleStocksLayout/MultipleStocksLayout";
import BinanceLayout from "./pages/BinanceLayout/BinanceLayout";
import Footer from "./components/Footer/Footer";
import FooterDemo from "./components/FooterDemo/FooterDemo";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/exchanges" element={<MultipleStocksLayout />} />
          {/* 
          <Route path="/binance" element={<BinanceLayout />}>
            <Route path="*" element={<FooterDemo />} />
          </Route> */}

          <Route path="/" element={<BinanceLayout />}>
            <Route path="/" element={<Navigate to="/binance" />} />
            <Route path="*" element={<Navigate to="/binance" />} />
            <Route path="/binance" element={<FooterDemo />} />
            <Route path="/new" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
