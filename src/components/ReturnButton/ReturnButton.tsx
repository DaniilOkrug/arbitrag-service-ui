import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { goToPage } from "../../store/reducers/BudgetSlice";

import ArrowLeftYellow from "../Icons/ArrowLeftYellow";

import "./ReturnButton.css";

const ReturnButton = () => {
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.budgetReducer);

  return (
    <button
      className="return-btn"
      onClick={() => {
        if (page == "List") dispatch(goToPage("Budget"));
        if (page == "Details") dispatch(goToPage("List"));
      }}
    >
      <ArrowLeftYellow />
    </button>
  );
};

export default ReturnButton;
