import React, { FC, useEffect, useState } from "react";
import io from "socket.io-client";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import CoinFilter from "../../components/CoinFilter/CoinFilter";
import Budget from "../Budget/Budget";
import { useAppSelector } from "../../hooks/redux";
import DetailsHeader from "../../components/DetailsHeader/DetailsHeader";
import Details from "../../components/Details/Details";

const BinanceLayout: FC = () => {
  const { page } = useAppSelector((state) => state.budgetReducer);

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

  switch (page) {
    case "Budget":
      return (
        <>
          <Budget />
        </>
      );
    case "List":
      return (
        <>
          <Header cases={cases} />
          <CoinFilter />

          <Table cases={cases} />

          <Outlet />
        </>
      );
    case "Details":
      return (
        <>
          <Header cases={cases} />

          <DetailsHeader />

          <Details />

          <Outlet />
        </>
      );

    default:
      return <></>;
  }
};

export default BinanceLayout;
