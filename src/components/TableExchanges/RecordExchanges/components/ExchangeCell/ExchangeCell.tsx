import React, { FC } from "react";
import CloseIcon from "../../../../Icons/CloseIcon";
import DeleteExchangeModal from "../../../../Modals/DeleteExchange/DeleteExchangeModal";

import "./ExchangeCell.css";

interface ExchangeCellProps {
  exchangeName: string;
  price: string;
  pair: string;
  first?: boolean;
}

const ExchangeCell: FC<ExchangeCellProps> = ({
  exchangeName,
  pair,
  price,
  first,
}) => {
  return (
    <div className="exchange_cell">
      <p>{exchangeName}</p>
      <p className={first ? "price color-yellow" : " price color-red"}>
        ${price}
      </p>

      <div className="close_button">
        <CloseIcon />
      </div>

      <DeleteExchangeModal
        exchangeName={exchangeName}
        pair={pair}
        isBuy={first ? first : false}
      />
    </div>
  );
};

export default ExchangeCell;
