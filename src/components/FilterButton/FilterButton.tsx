import React, { FC } from "react";
import GearIcon from "../Icons/GearIcon";

import "./FilterButton.css";

interface FilterButtonProps {
  onClick: any;
}

const FilterButton: FC<FilterButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="filter-button">
      <p>Фильтр</p>

      <GearIcon />
    </button>
  );
};

export default FilterButton;
