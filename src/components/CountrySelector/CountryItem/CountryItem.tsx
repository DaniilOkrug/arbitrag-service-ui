import React, { FC } from "react";

import "./CountryItem.css";

interface CountryItemProps {
  children: React.ReactNode;
  active?: boolean;
}

const CountryItem: FC<CountryItemProps> = ({active = false, children}) => {
  return (
    <div className={active ? "country-item active" : "country-item"}>
      {children}
    </div>
  );
};

export default CountryItem;
