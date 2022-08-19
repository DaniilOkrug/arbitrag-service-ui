import React, { useCallback, useState } from "react";

import MoneyIcon from "../../components/Icons/MoneyIcon";
import RubleIcon from "../../components/Icons/RubleIcon";
import { useAppDispatch } from "../../hooks/redux";
import { setBudget } from "../../store/reducers/BudgetSlice";

import "./Budget.css";

const Budget = () => {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<string>("10000");

  const continueHandler = useCallback(() => {
    console.log(Number(amount));
    
    if (!isNaN(Number(amount)) && Number(amount) > 0) {
      dispatch(setBudget(Number(amount)));
    }
  }, [amount]);

  return (
    <div className="budget-container">
      <img className="banner" src={require("./Looper.png")} alt="" />

      <div className="budget-header">
        <p className="sub-title">сканер</p>
        <p className="title">BINANCE – P2P</p>
      </div>

      <div className="budget-form">
        <p>Стартовый</p>
        <p>бюджет</p>

        <div className="input-container">
          <MoneyIcon />
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <div className="ruble-container">
            <RubleIcon />
          </div>
        </div>

        <div className="button-container">
          <button className="continue-btn" onClick={continueHandler}>Продолжить</button>
        </div>
      </div>
    </div>
  );
};

export default Budget;
