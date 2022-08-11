import React, { FC, useEffect, useState } from "react";
import "./HeaderExchanges.css";

import UsdtIcon from "../Icons/UsdtIcon";

interface HeaderProps {
  cases: any;
}

const HeaderExchanges: FC<HeaderProps> = ({ cases }) => {
  const [time, setTime] = useState<string>("");
  const [casesNumber, setCasesNumber] = useState<number>(0);

  useEffect(() => {
    if (cases.time) {
      const dateParts = cases.time.split(" ");
      const timeParts = dateParts[1].split(":");
      setTime(`${timeParts[0]}:${timeParts[1]}`);

      let numberOfCases = 0;
      const keys = Object.keys(cases);
      for (const key of keys) {
        if (key === "time") continue;

        numberOfCases += factorial(Object.keys(cases[key]).length) / (factorial(Object.keys(cases[key]).length - 2) * factorial(2));
      }

      setCasesNumber(numberOfCases);
    }
  }, [cases]);

  function factorial(n: number) {
    var ans=1;
     
    for (var i = 2; i <= n; i++)
        ans = ans * i;
    return ans;
}

  return (
    <div className="header">
      <div className="title-container-exchanges">
        <UsdtIcon width={14} height={14} />
        <p>USDT</p>
      </div>

      <p className="time">{time}</p>

      <div className="cases-container">
        <p className="cases">{casesNumber} связок</p>
      </div>
    </div>
  );
};

export default HeaderExchanges;
