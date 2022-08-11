import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";
import { getBack, getNext } from "../../../../../store/reducers/UserSlice";

import ArrowLeft from "../../../../Icons/ArrowLeft";
import ArrowRight from "../../../../Icons/ArrowRight";

import "./ProfitCell.css";

interface ProfitCellProps {
  profit: string;
  name: string;
}

const ProfitCell: FC<ProfitCellProps> = ({ profit, name }) => {
  const dispatch = useAppDispatch();
  const { buyExchange, availableExchanges } = useAppSelector(
    (state) => state.userReducer
  );

  return (
    <div className="profit_cell">
      <p className="profit">{profit}%</p>

      <div className="button-group">
        <button
          onClick={() =>
            dispatch(
              getBack({
                name,
                side: "buy",
                exchangeName: buyExchange[name].name,
              })
            )
          }
          className="arrow-button"
        >
          <ArrowLeft />
        </button>
        <button
          onClick={() =>
            dispatch(
              getNext({
                name,
                side: "buy",
                exchangeName: buyExchange[name].name,
              })
            )
          }
          className="arrow-button arrow-button-left"
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProfitCell;
