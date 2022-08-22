import React, { useState } from "react";
import { useAppSelector } from "../../hooks/redux";

import FilterButton from "../FilterButton/FilterButton";
import BudgetContainer from "../Footer/components/BudgetContainer/BudgetContainer";
import DemoModal from "../Modals/Demo/DemoModal";
import ReturnButton from "../ReturnButton/ReturnButton";

import "./FooterDemo.css";

const FooterDemo = () => {
  const { hideFilter } = useAppSelector((state) => state.budgetReducer);

  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="footer">
      <ReturnButton />

      {hideFilter && <FilterButton onClick={() => setShow(true)} />}

      <BudgetContainer />

      <DemoModal show={show} onClose={() => setShow(false)} />
    </div>
  );
};

export default FooterDemo;
