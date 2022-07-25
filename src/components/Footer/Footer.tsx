import React, { FC, useState } from "react";

import CountrySelector from "../CountrySelector/CountrySelector";
import FilterButton from "../FilterButton/FilterButton";
import DemoModal from "../Modals/Demo/DemoModal";
import FilterModal from "../Modals/Filter/FilterModal";

import "./Footer.css";

const Footer = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="footer">
      <CountrySelector />

      <FilterButton onClick={() => setShow(true)} />

      <FilterModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default Footer;
