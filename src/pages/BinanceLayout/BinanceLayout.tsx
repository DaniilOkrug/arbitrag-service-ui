import React, { FC, useEffect, useState } from "react";
import io from "socket.io-client";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

const BinanceLayout: FC = () => {
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
    <div>
      <Header cases={cases} />
      <Table cases={cases} />

      <Outlet />
    </div>
  );
};

export default BinanceLayout;
