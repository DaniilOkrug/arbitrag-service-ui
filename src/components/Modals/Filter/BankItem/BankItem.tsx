import React, { FC } from "react";

import "./BankItem.css";

interface BankItemProps {
  text: string;
  active?: boolean;
  onClick?: any;
}

const BankItem: FC<BankItemProps> = ({ text, active, onClick }) => {
  return (
    <button
      className={active ? "bank-button active" : "bank-button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default BankItem;
