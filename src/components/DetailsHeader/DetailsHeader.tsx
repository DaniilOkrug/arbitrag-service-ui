import React from "react";
import { useAppSelector } from "../../hooks/redux";

import "./DetailsHeader.css";

const DetailsHeader = () => {
  const { activeCase } = useAppSelector((state) => state.budgetReducer);
  return (
    <div className="details-header">
      <div className="details-container">
        <div className="banks">
          <p>{activeCase.bankFrom} - {activeCase.bankTo}</p>
        </div>

        <p>{activeCase.coinFrom} - {activeCase.coinTo}</p>
      </div>

      <p className="profit">+{activeCase.profitPecent}%</p>
    </div>
  );
};

export default DetailsHeader;
