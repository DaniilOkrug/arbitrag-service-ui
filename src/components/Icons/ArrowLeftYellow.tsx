import React, { FC } from "react";
import { IconProps } from "./IconProps";

const ArrowLeftYellow: FC<IconProps> = ({ width = 15, height = 13 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.66663 5.49998H13.3333"
        stroke="#FFE55C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.04163 9.875L1.66663 5.5L6.04163 1.125"
        stroke="#FFE55C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftYellow;
