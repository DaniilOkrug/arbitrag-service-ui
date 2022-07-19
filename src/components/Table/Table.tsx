import React, { FC, useEffect, useState } from "react";
import "./Table.css";

import Record from "./Record/Record";

interface TableProps {
  cases: any[];
}

const Table: FC<TableProps> = ({cases}) => {
  return (
    <div className="table-container">
      <table className="table-cases">
        <thead>
          <tr className="table-cases_header">
            <th className="align-left">Тейкер</th>
            <th className="coin">Монета</th>
            <th className="align-left">Покупаем</th>
            <th className="coin">Обмен</th>
            <th className="align-left">Продаём</th>
            <th className="align-left">По цене</th>
            <th className="profit align-right">Профит</th>
          </tr>
        </thead>
        <tbody>
          {cases.length > 0 &&
            cases.map((element, index) => (
              <Record
                key={index}
                coinFrom={element.buy.asset}
                coinTo={element.sell.asset}
                methodFrom={element.buy.payType}
                methodTo={element.sell.payType}
                priceFrom={element.buy.price}
                priceTo={element.sell.price}
                profit={element.profit}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
