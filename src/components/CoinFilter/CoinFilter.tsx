import React, { useMemo, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { setCoinFilter } from "../../store/reducers/BudgetSlice";

import "./CoinFilter.css";

const CoinFilter = () => {
  const dispatch = useAppDispatch();

  const [filter, setFilter] = useState<string>("Все");

  const filterList = useMemo(() => {
    return ["Все", "USDT", "BTC", "BNB", "ETH", "BUSD"];
  }, []);

  return (
    <div className="coin-filter">
      {filterList.map((item, index) => {
        return (
          <div
            className={
              filter === item ? "coin-filter-item active" : "coin-filter-item"
            }
            onClick={() => {
              setFilter(item);
              dispatch(setCoinFilter(item === "Все" ? "All" : item));
            }}
          >
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoinFilter;
