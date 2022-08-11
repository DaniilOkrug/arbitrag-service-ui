import React from "react";
import WarningIcon from "../Icons/WarningIcon";

import "./FooterExchanges.css";

const FooterExchanges = () => {
  return (
    <div className="footer-exchanges">
      <WarningIcon />
      &nbsp;&nbsp;
      <p className="text-yellow">Сканер не учитывает</p>
      &nbsp;
      <p>комиссии переводов. Всегда проверяйте спред.</p>
    </div>
  );
};

export default FooterExchanges;
