import React, { createRef, FC, useEffect, useState } from "react";
import "./Record.css";

import BnbIcon from "../../Icons/BnbIcon";
import BtcIcon from "../../Icons/BtcIcon";
import BusdIcon from "../../Icons/BusdIcon";
import EthIcon from "../../Icons/EthIcon";
import UsdtIcon from "../../Icons/UsdtIcon";
import ArrowRightYellow from "../../Icons/ArrowRightYellow";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  goToPage,
  setActiveCase,
  setHideFilter,
} from "../../../store/reducers/BudgetSlice";

interface RecordProps {
  methodFrom: string;
  coinFrom: string;
  priceFrom: string;
  methodTo: string;
  coinTo: string;
  priceTo: string;
  sellMarketPrice: string;
  profitPecent: string;
}

type bankNamesType = {
  [key: string]: string;
};

const bankNames: bankNamesType = {
  Tinkoff: "Тиньков",
  RosBank: "Росбанк",
  RaiffeisenBankRussia: "Райф",
  QIWI: "Киви",
  YandexMoney: "Юмани",
  RUBfiatbalance: "Бинанс",
  PostBankRussia: "Почта",
  ABank: "А-Банк",
  HomeCreditBank: "Хоум",
  MTSBank: "МТС",
  Payeer: "Payeer",
  Advcash: "Adv",
  UralsibBank: "Урал",
  AkBarsBank: "Акбарс",
  Mobiletopup: "SIM",
  RussianStandardBank: "РуСт",
  RenaissanceCredit: "Ренис",
  CreditEuropeBank: "КрЕв",
  OTPBankRussia: "ОТП",
  CashInPerson: "Кеш",
};

type coinIconsType = {
  [key: string]: JSX.Element;
};

const coinIcons: coinIconsType = {
  BNB: <BnbIcon />,
  BTC: <BtcIcon />,
  BUSD: <BusdIcon />,
  ETH: <EthIcon />,
  USDT: <UsdtIcon />,
};

const Record: FC<RecordProps> = ({
  coinFrom,
  coinTo,
  methodFrom,
  methodTo,
  priceFrom,
  priceTo,
  sellMarketPrice,
  profitPecent,
}) => {
  const dispatch = useAppDispatch();
  const { budget, hideFilter } = useAppSelector((state) => state.budgetReducer);

  const [operationsStructure, setOperationsStructure] = useState<any>({
    buyCoins: 0,
    sellCoins: 0,
    profit: 0,
  });

  useEffect(() => {
    dispatch(setHideFilter(true));

    const buyCoins = budget / Number(priceFrom);

    if (coinFrom != coinTo) {
      const sellCoins =
        (coinFrom === "BNB" && (coinTo === "ETH" || coinTo === "BTC")) ||
        (coinFrom === "ETH" && coinTo === "BTC")
          ? buyCoins * Number(sellMarketPrice)
          : buyCoins / Number(sellMarketPrice);
      const profit = sellCoins * Number(priceTo) - budget;

      setOperationsStructure({
        buyCoins: buyCoins.toFixed(5),
        profit: profit.toFixed(0),
        sellCoins: sellCoins.toFixed(5),
        sellPrice: priceTo,
        bankFrom: bankNames[methodFrom],
        bankTo: bankNames[methodTo],
        coinFrom,
        coinTo,
        profitPecent,
      });
    } else {
      const profit = buyCoins * Number(priceTo) - budget;

      setOperationsStructure({
        buyCoins: buyCoins.toFixed(5),
        profit: profit.toFixed(0),
        sellCoins: 0,
        sellPrice: priceTo,
        bankFrom: bankNames[methodFrom],
        bankTo: bankNames[methodTo],
        coinFrom,
        coinTo,
        profitPecent,
      });
    }

    return () => {
      dispatch(setHideFilter(false));
    };
  }, []);

  const detailsHandler = () => {
    dispatch(setActiveCase(operationsStructure));
    dispatch(goToPage("Details"));
  };

  if (Number(operationsStructure.profit) < 0) {
    return <></>;
  }

  return (
    <tr className="record">
      <td className="first-column">
        <p className="bankname">{bankNames[methodFrom]}</p>
        <p className="coin">{coinFrom}</p>
      </td>
      <td>
        <p className="coin">{coinTo}</p>
        <p className="bankname">{bankNames[methodTo]}</p>
      </td>
      <td className="last-column">
        <div>
          <p>профит</p>
          <p className="green">{operationsStructure.profit} ₽</p>
        </div>
        <button className="open-case-btn" onClick={detailsHandler}>
          <ArrowRightYellow />
        </button>
      </td>
    </tr>
  );
};

export default Record;
