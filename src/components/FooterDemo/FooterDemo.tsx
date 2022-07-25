import React, { FC, useState } from "react";

import CountrySelector from "../CountrySelector/CountrySelector";
import FilterButton from "../FilterButton/FilterButton";
import DemoModal from "../Modals/Demo/DemoModal";
import FilterModal from "../Modals/Filter/FilterModal";

import "./FooterDemo.css";

const FooterDemo = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="footer">
      <CountrySelector />

      <FilterButton onClick={() => setShow(true)} />

      <DemoModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default FooterDemo;