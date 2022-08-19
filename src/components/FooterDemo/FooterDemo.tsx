import React, { useState } from "react";

import FilterButton from "../FilterButton/FilterButton";
import BudgetContainer from "../Footer/components/BudgetContainer/BudgetContainer";
import DemoModal from "../Modals/Demo/DemoModal";
import ReturnButton from "../ReturnButton/ReturnButton";

import "./FooterDemo.css";

const FooterDemo = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="footer">
      <ReturnButton />

      <FilterButton onClick={() => setShow(true)} />

      <BudgetContainer />

      <DemoModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default FooterDemo;
