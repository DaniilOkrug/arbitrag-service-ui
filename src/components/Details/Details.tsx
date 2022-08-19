import React from "react";
import { useAppSelector } from "../../hooks/redux";

import "./Details.css";

const Details = () => {
  const { activeCase } = useAppSelector((state) => state.budgetReducer);

  return (
    <div className="details-wrapper">
      <div className="details-container">
        <div className="details-item first">
          <p className="yellow">1</p>
        </div>
        <div className="details-item">
          <p className="yellow">{activeCase.coinFrom}</p>
          <p>через {activeCase.bankFrom}</p>
        </div>
        <div className="details-item last">
          <p className="sub">получаем</p>
          <p className="yellow">
            {activeCase.buyCoins} {activeCase.coinFrom}
          </p>
        </div>
      </div>

      {activeCase.coinFrom !== activeCase.coinTo && (
        <div className="details-container">
          <div className="details-item first">
            <p className="yellow">2</p>
          </div>
          <div className="details-item">
            <p className="sub">меняем</p>
            <p className="blue">
              {activeCase.coinFrom} на {activeCase.coinTo}
            </p>
          </div>
          <div className="details-item last">
            <p className="sub">получаем</p>
            <p className="blue">
              {activeCase.sellCoins} {activeCase.coinTo}
            </p>
          </div>
        </div>
      )}

      <div className="details-container">
        <div className="details-item first">
          <p className="yellow">
            {activeCase.coinFrom !== activeCase.coinTo ? 3 : 2}
          </p>
        </div>
        <div className="details-item">
          <p className="sub">продаём</p>
          <p>на {activeCase.bankTo}</p>
        </div>
        <div className="details-item">
          <p className="sub">по курсу</p>
          <p className="yellow">{activeCase.sellPrice}</p>
        </div>
        <div className="details-item last">
          <p className="sub">профит</p>
          <p className="green">{activeCase.profit} ₽</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
