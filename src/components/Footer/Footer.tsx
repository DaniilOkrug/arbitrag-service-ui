import React, { FC, useState } from "react";

import CountrySelector from "../CountrySelector/CountrySelector";
import FilterButton from "../FilterButton/FilterButton";
import DemoModal from "../Modals/Demo/DemoModal";
import FilterModal from "../Modals/Filter/FilterModal";
import ReturnButton from "../ReturnButton/ReturnButton";
import BudgetContainer from "./components/BudgetContainer/BudgetContainer";

import "./Footer.css";

const Footer = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="footer">
      <ReturnButton />

      <FilterButton onClick={() => setShow(true)} />

      <BudgetContainer /> 

      <FilterModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default Footer;
