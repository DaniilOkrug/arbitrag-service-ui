import React, { FC } from "react";
import "./Record.css";

import BnbIcon from "../../Icons/BnbIcon";
import BtcIcon from "../../Icons/BtcIcon";
import BusdIcon from "../../Icons/BusdIcon";
import EthIcon from "../../Icons/EthIcon";
import UsdtIcon from "../../Icons/UsdtIcon";

interface RecordProps {
  methodFrom: string;
  coinFrom: string;
  priceFrom: string;
  methodTo: string;
  coinTo: string;
  priceTo: string;
  profit: string;
}

type bankNamesType = {
  [key: string]: string
}

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
  [key: string]: JSX.Element
}

const coinIcons: coinIconsType = {
  BNB: <BnbIcon />,
  BTC: <BtcIcon />,
  BUSD: <BusdIcon />,
  ETH: <EthIcon />,
  USDT: <UsdtIcon />
}

const Record: FC<RecordProps> = ({
  coinFrom,
  coinTo,
  methodFrom,
  methodTo,
  priceFrom,
  priceTo,
  profit,
}) => {
  return (
    <tr>
      <td className="align-left">{bankNames[methodFrom]}</td>
      <td className="coin">{coinIcons[coinFrom]}</td>
      <td className="align-left">{priceFrom}</td>
      <td className="coin">{coinFrom !== coinTo ? coinIcons[coinTo] : ''}</td>
      <td className="align-left">{bankNames[methodTo]}</td>
      <td className="align-left">{priceTo}</td>
      <td className={+profit < 3 ? 'align-right orange' : 'align-right green'}>{profit}%</td>
    </tr>
  );
};

export default Record;
