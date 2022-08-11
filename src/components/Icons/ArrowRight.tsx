import React, { FC } from "react";
import { IconProps } from "./IconProps";

const ArrowRight: FC<IconProps> = ({ width = 13, height = 11 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18604 4.3H1"
        stroke="#8255FF"
        strokeWidth="1.86"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.11646 1L9.18622 4.3L6.11646 7.6"
        stroke="#8255FF"
        strokeWidth="1.86"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
