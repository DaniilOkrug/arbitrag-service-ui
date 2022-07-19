import React, { FC } from "react";
import "./Header.css";

import BinanceIcon from "../Icons/BinanceIcon";

interface HeaderProps {
  cases: any[];
}

const Header: FC<HeaderProps> = ({ cases }) => {
  return (
    <div className="header">
      <div className="title-container">
        <BinanceIcon />
        <p>Binance – P2P</p>
      </div>

      <p className="time">11:03</p>

      <div className="cases-container">
        <p className="cases">{cases.length} связок</p>
      </div>
    </div>
  );
};

export default Header;
