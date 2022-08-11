import React, { FC } from "react";
import { IconProps } from "./IconProps";

const ArrowLeft: FC<IconProps> = ({ width = 13, height = 11 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.81396 4.7L10 4.7"
        stroke="#8255FF"
        strokeWidth="1.86"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.8833 8L1.81354 4.7L4.8833 1.4"
        stroke="#8255FF"
        strokeWidth="1.86"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
