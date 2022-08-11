import React, { FC, useMemo } from "react";

import AdaIcon from "../../../../Icons/AdaIcon";
import BchIcon from "../../../../Icons/BchIcon";
import BtcIcon from "../../../../Icons/BtcIcon";
import DogeIcon from "../../../../Icons/DogeUsdt";
import DotIcon from "../../../../Icons/DotIcon";
import EthIcon from "../../../../Icons/EthIcon";
import LtcIcon from "../../../../Icons/LtcIcon";
import SolIcon from "../../../../Icons/SolIcon";
import XrpIcon from "../../../../Icons/XrpIcon";

import "./CoinCell.css";

interface CoinCellProps {
  coinName: string;
}

type coinNamesType = {
  [key: string]: JSX.Element;
};

const CoinCell: FC<CoinCellProps> = ({ coinName }) => {
  const availableCoinNames: coinNamesType = useMemo(() => {
    return {
      BTC: <BtcIcon width={12} height={12} />,
      ETH: <EthIcon width={12} height={12} />,
      LTC: <LtcIcon width={12} height={12} />,
      BCH: <BchIcon width={12} height={12} />,
      XRP: <XrpIcon width={12} height={12} />,
      ADA: <AdaIcon width={12} height={12} />,
      SOL: <SolIcon width={12} height={12} />,
      DOT: <DotIcon width={12} height={12} />,
      DOGE: <DogeIcon width={12} height={12} />,
    };
  }, []);

  return (
    <div className="coin_cell">
      <p className="coin-name">{coinName}</p>
      {availableCoinNames[coinName]}
    </div>
  );
};

export default CoinCell;
