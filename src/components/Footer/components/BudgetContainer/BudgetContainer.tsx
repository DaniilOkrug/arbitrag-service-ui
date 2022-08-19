import React from "react";
import { useAppSelector } from "../../../../hooks/redux";

import "./BudgetContainer.css";

const BudgetContainer = () => {
  const { budget } = useAppSelector((state) => state.budgetReducer);

  return (
    <div className="budget-wrapper">
      <p>Бюджет</p>
      <p className="budget-amount">{budget} ₽</p>
    </div>
  );
};

export default BudgetContainer;
