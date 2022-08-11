import React, { FC, useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  setAvailbaleExchanges,
  setBuyExchange,
  setDeleteActiveStateModal,
  setSellExchange,
  switchShowBuyExchangeModal,
  switchShowSellExchangeModal,
} from "../../../store/reducers/UserSlice";

import CoinCell from "./components/CoinCell/CoinCell";
import ExchangeCell from "./components/ExchangeCell/ExchangeCell";
import ProfitCell from "./components/ProfitCell/ProfitCell";

import "./RecordExchanges.css";

interface RecordExchagesProps {
  recordCase: any;
  name: string;
  isFirst?: boolean;
}

const RecordExchages: FC<RecordExchagesProps> = ({
  recordCase,
  name,
  isFirst,
}) => {
  const dispatch = useAppDispatch();
  const {
    buyExchange,
    sellExchange,
    availableExchanges,
    showBuyExchangeModal,
    showSellExchangeModal,
    deletedExchanges,
    deleteModalActiveState,
  } = useAppSelector((state) => state.userReducer);

  const [sellCurrentExchange, setSellCurrentExchange] = useState<string>("");
  const [buyCurrentExchange, setBuyCurrentExchange] = useState<string>("");

  const buyCellRef = useRef<HTMLTableDataCellElement | null>(null);
  const sellCellRef = useRef<HTMLTableDataCellElement | null>(null);

  useEffect(() => {
    if (recordCase) {
      const exchangeNames = Object.keys(recordCase);

      //Sorting from expensive to cheapest
      exchangeNames.sort((a, b) =>
        Number(recordCase[b] - Number(recordCase[a]))
      );

      const exchangeArrWithPrices = [];
      for (const exchangeName of exchangeNames) {
        exchangeArrWithPrices.push({
          [exchangeName]: recordCase[exchangeName],
        });
      }

      //Set all available exchanges for each pair
      dispatch(
        setAvailbaleExchanges({
          exchanges: exchangeArrWithPrices,
          name,
        })
      );

      //Set exchanges at first loading
      if (!buyExchange[name]) {
        dispatch(
          setBuyExchange({
            exchange: exchangeNames[exchangeNames.length - 1],
            price: recordCase[exchangeNames[exchangeNames.length - 1]],
            name,
          })
        );

        setBuyCurrentExchange(exchangeNames[exchangeNames.length - 1]);
      }

      if (!sellExchange[name]) {
        dispatch(
          setSellExchange({
            exchange: exchangeNames[0],
            price: recordCase[exchangeNames[0]],
            name,
          })
        );

        setSellCurrentExchange(exchangeNames[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (!sellExchange[name]) return;

    sellCellRef.current!.classList.add("active");

    const timer = setTimeout(() => {
      sellCellRef.current!.classList.remove("active");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [deletedExchanges["sell"][name]]);

  useEffect(() => {
    if (!sellExchange[name]) return;

    buyCellRef.current!.classList.add("active");

    const timer = setTimeout(() => {
      buyCellRef.current!.classList.remove("active");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [deletedExchanges["buy"][name]]);

  if (!sellExchange[name] && !buyExchange[name]) {
    return <></>;
  }

  const getProfitPercent = () => {
    return (
      (Number(sellExchange[name].price) - Number(buyExchange[name].price)) /
      Number(buyExchange[name].price) * 100
    ).toFixed(2);
  };

  return (
    <tr className={isFirst ? "record_exchanges first" : "record_exchanges"}>
      <td>
        <CoinCell coinName={name.split("/")[0]} />
      </td>

      <td
        ref={buyCellRef}
        onClick={() => {
          if (!showBuyExchangeModal) {
            dispatch(
              setDeleteActiveStateModal({
                pair: name,
                exchange: buyExchange[name].name,
              })
            );

            dispatch(switchShowBuyExchangeModal());
          }
        }}
        className="color-gray exchange-buy"
      >
        <ExchangeCell
          first
          exchangeName={buyExchange[name].name}
          pair={name}
          price={buyExchange[name].price}
        />
      </td>

      <td className="transparent">__</td>

      <td
        ref={sellCellRef}
        onClick={() => {
          if (!showSellExchangeModal) {
            dispatch(
              setDeleteActiveStateModal({
                pair: name,
                exchange: sellExchange[name].name,
              })
            );
            dispatch(switchShowSellExchangeModal());
          }
        }}
        className="color-gray exchange-sell"
      >
        <ExchangeCell
          exchangeName={sellExchange[name].name}
          pair={name}
          price={sellExchange[name].price}
        />
      </td>

      <td>
        <ProfitCell name={name} profit={getProfitPercent()} />
      </td>
    </tr>
  );
};

export default RecordExchages;
