import React, { FC } from "react";
import { IconProps } from "./IconProps";

const LtcIcon: FC<IconProps> = ({ width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 12C9.31373 12 12 9.31373 12 6C12 2.68629 9.31373 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12Z"
        fill="#345D9D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.91013 7.20525L3.375 7.413L3.633 6.37838L4.1745 6.16088L4.95488 3H6.87825L6.30862 5.3235L6.83737 5.10938L6.58237 6.14062L6.04725 6.35475L5.72925 7.66088H8.625L8.29763 9H3.4695L3.91013 7.20525Z"
        fill="white"
      />
    </svg>
  );
};

export default LtcIcon;
