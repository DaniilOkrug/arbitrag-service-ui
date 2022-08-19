import React, { FC, useEffect, useState } from "react";
import "./Header.css";

import BinanceWhiteIcon from "../Icons/BinanceWhiteIcon";

interface HeaderProps {
  cases: any[];
}

const Header: FC<HeaderProps> = ({ cases }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const date = new Date();
    setTime(date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));
    setInterval(() => {
      const date = new Date();
      setTime(date.getHours() + ":" + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()));
    });
  }, []);

  return (
    <div className="header">
      <div className="title-container">
        <BinanceWhiteIcon />
        <p>Binance P2P</p>
      </div>

      <p className="time">{time}</p>

      <div className="cases-container">
        <p className="cases">{cases.length} связок</p>
      </div>
    </div>
  );
};

export default Header;
