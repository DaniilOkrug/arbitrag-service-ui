import React, { FC } from "react";
import { useAppSelector } from "../../hooks/redux";

import "./Table.css";

import Record from "./Record/Record";

interface TableProps {
  cases: any[];
}

const Table: FC<TableProps> = ({ cases }) => {
  const { activeBanks } = useAppSelector((state) => state.userReducer);
  const { budget, coinFilter } = useAppSelector((state) => state.budgetReducer);

  return (
    <div className="table-container">
      <table className="table-cases">
        <tbody>
          {cases.length > 0 &&
            cases
              .filter((element) => {
                const coinFiter =
                  element.sell.asset === coinFilter || coinFilter === "All";

                return (
                  element.buy.minAvailabelAmount < budget &&
                  element.buy.maxAvailableAmount > budget &&
                  coinFiter
                );
              })
              .map((element, index) => {
                if (
                  activeBanks.includes(element.buy.payType) &&
                  activeBanks.includes(element.sell.payType)
                ) {
                  return (
                    <Record
                      key={index}
                      coinFrom={element.buy.asset}
                      coinTo={element.sell.asset}
                      methodFrom={element.buy.payType}
                      methodTo={element.sell.payType}
                      priceFrom={element.buy.price}
                      priceTo={element.sell.price}
                      sellMarketPrice={element.sell.marketPrice}
                      profitPecent={element.profit}
                    />
                  );
                } else {
                  return <></>;
                }
              })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
