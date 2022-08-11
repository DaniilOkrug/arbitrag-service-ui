import React, { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";

import RecordExchages from "./RecordExchanges/RecordExchanges";

import "./TableExchanges.css";

interface TableProps {
  cases: any;
}

const TableExchanges: FC<TableProps> = ({ cases }) => {
  const { deletedExchanges } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    if (Object.keys(cases).length > 0) {
    }
  }, []);

  const sortedCoins = [
    "BTC/USDT",
    "ETH/USDT",
    "LTC/USDT",
    "BCH/USDT",
    "XRP/USDT",
    "ADA/USDT",
    "SOL/USDT",
    "DOT/USDT",
    "DOGE/USDT",
  ];

  return (
    <div className="table-container">
      <table className="table-cases table-exchanges">
        <thead>
          <tr className="table-cases_header">
            <th className="align-left">Монета</th>
            <th className="align-left">Покупаем</th>
            <th></th>
            <th className="align-left">Продаём</th>
            <th className="align-left">Профит</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cases).length > 0 &&
            sortedCoins.map((coin, index) => {
              return index === 0 ? (
                <RecordExchages
                  key={`Record ${coin}`}
                  name={coin}
                  recordCase={cases[coin]}
                  isFirst
                />
              ) : (
                <RecordExchages
                  key={`Record ${coin}`}
                  name={coin}
                  recordCase={cases[coin]}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableExchanges;
