import React, { useState } from "react";

import CountryItem from "./CountryItem/CountryItem";

// import uzflag from "../../assets/uzFlag.png";

import "./CountrySelector.css";

const CountrySelector = () => {
  const [isRuActive, setIsRuActive] = useState<boolean>(true);
  const [isUzActive, setIsUzActive] = useState<boolean>(false);
  const [isKzActive, setIsKzActive] = useState<boolean>(false);
  const [isTrActive, setIsTrActive] = useState<boolean>(false);

  const resetActiveFlags = () => {
    setIsRuActive(false);
    setIsUzActive(false);
    setIsKzActive(false);
    setIsTrActive(false);
  };

  return (
    <div className="country_selector">
      <div
        // onClick={() => {
        //   resetActiveFlags();
        //   setIsRuActive(true);
        // }}
      >
        <CountryItem
          active={isRuActive}
          children={
            <img src={require("./ruFlag.png")} alt="" width={20} height={13} />
          }
        />
      </div>

      <div
        // onClick={() => {
        //   resetActiveFlags();
        //   setIsUzActive(true);
        // }}
      >
        <CountryItem
          active={isUzActive}
          children={
            <img src={require("./uzFlag.png")} alt="" width={20} height={15} />
          }
        />
      </div>

      <div
        // onClick={() => {
        //   resetActiveFlags();
        //   setIsKzActive(true);
        // }}
      >
        <CountryItem
          active={isKzActive}
          children={
            <img src={require("./kzFlag.png")} alt="" width={20} height={17} />
          }
        />
      </div>

      <div
        // onClick={() => {
        //   resetActiveFlags();
        //   setIsTrActive(true);
        // }}
      >
        <CountryItem
          active={isTrActive}
          children={
            <img src={require("./trFlag.png")} alt="" width={20} height={14} />
          }
        />
      </div>
    </div>
  );
};

export default CountrySelector;
