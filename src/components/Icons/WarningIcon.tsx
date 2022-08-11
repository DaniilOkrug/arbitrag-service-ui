import React, { FC } from "react";
import { IconProps } from "./IconProps";

const WarningIcon: FC<IconProps> = ({ width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00008 8.74675V6.25342"
        stroke="#FFE03F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99942 10.7499C7.90742 10.7499 7.83275 10.8246 7.83342 10.9166C7.83342 11.0086 7.90808 11.0833 8.00008 11.0833C8.09208 11.0833 8.16675 11.0086 8.16675 10.9166C8.16675 10.8246 8.09208 10.7499 7.99942 10.7499"
        stroke="#FFE03F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.35267 2.75938L14.4587 11.6954C15.052 12.734 14.302 14.0267 13.106 14.0267H2.894C1.69734 14.0267 0.947338 12.734 1.54134 11.6954L6.64734 2.75938C7.24534 1.71204 8.75467 1.71204 9.35267 2.75938Z"
        stroke="#FFE03F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default WarningIcon;
