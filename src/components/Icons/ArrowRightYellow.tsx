import React, { FC } from "react";
import { IconProps } from "./IconProps";

const ArrowRightYellow: FC<IconProps> = ({ width = 15, height = 13 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6H1"
        stroke="#FFE55C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11L15 6"
        stroke="#FFE55C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 1L15 6"
        stroke="#FFE55C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightYellow;
