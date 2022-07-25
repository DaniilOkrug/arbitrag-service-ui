import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import io from "socket.io-client";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

import "./App.css";
import FooterDemo from "./components/FooterDemo/FooterDemo";

function App() {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Арбитраж";

    const socket = io("http://localhost:5000");

    socket.on("cases", (data) => {
      console.log(data);
      setCases(
        data.sort((a: any, b: any) => {
          return Number(b.profit) - Number(a.profit);
        })
      );
    });
  }, []);

  return (
    <div className="App">
      <Header cases={cases} />
      <Table cases={cases} />

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<FooterDemo />} />
            <Route path="/new" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
