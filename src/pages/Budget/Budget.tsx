import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import MoneyIcon from "../../components/Icons/MoneyIcon";
import RubleIcon from "../../components/Icons/RubleIcon";
import Spacer from "../../components/Spacer/Spacer";
import { useAppDispatch } from "../../hooks/redux";
import { setBudget } from "../../store/reducers/BudgetSlice";

import "./Budget.css";

const Budget = () => {
  const dispatch = useAppDispatch();

  const [amount, setAmount] = useState<string>("10000");
  const budgetFieldRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const continueHandler = useCallback(() => {
    console.log(Number(amount));

    if (!isNaN(Number(amount)) && Number(amount) > 0) {
      dispatch(setBudget(Number(amount)));
    }
  }, [amount]);

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);

  return (
    <div className="budget-container">
      <img className="banner" src={require("./Looper.png")} alt="" />

      <div className="budget-header">
        <p className="sub-title">сканер</p>
        <p className="title">BINANCE – P2P</p>
      </div>

      <div ref={containerRef} className="budget-form">
        <p>Стартовый</p>
        <p>бюджет</p>

        <div className="input-container">
          <MoneyIcon />
          <input
            type="text"
            ref={budgetFieldRef}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            // onFocus={() => {

            //   if (containerRef.current) {
            //     containerRef.current.style.height = `${262 * 2}px`;
            //   }
            // }}
            // onBlur={() => {
            //   if (containerRef.current) {
            //     containerRef.current.style.height = `262px`;
            //   }
            // }}
          />

          <div className="ruble-container">
            <RubleIcon />
          </div>
        </div>

        <div className="button-container">
          <button className="continue-btn" onClick={continueHandler}>
            Продолжить
          </button>
        </div>
        <Spacer></Spacer>
      </div>
    </div>
  );
};

export default Budget;
