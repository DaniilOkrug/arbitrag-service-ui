import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const [cases, setCases] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Арбитраж";

    const socket = io("https://mockupdealer.ru");

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
    </div>
  );
}

export default App;
