import React, { FC } from "react";
import { IconProps } from "./IconProps";

const SolIcon: FC<IconProps> = ({ width = 12, height = 12 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="black" />
      <path
        d="M3.50162 7.53804C3.54703 7.49267 3.6086 7.46718 3.6728 7.46718H9.59625C9.70415 7.46718 9.75817 7.59766 9.68184 7.67393L8.51138 8.84346C8.46596 8.88884 8.40439 8.91433 8.34019 8.91433H2.41675C2.30884 8.91433 2.25482 8.78384 2.33115 8.70757L3.50162 7.53804Z"
        fill="url(#paint0_linear_275_4242)"
      />
      <path
        d="M3.50162 3.16877C3.54703 3.12339 3.6086 3.0979 3.6728 3.0979H9.59625C9.70415 3.0979 9.75817 3.22838 9.68184 3.30465L8.51138 4.47418C8.46596 4.51956 8.40439 4.54505 8.34019 4.54505H2.41675C2.30884 4.54505 2.25482 4.41457 2.33115 4.33829L3.50162 3.16877Z"
        fill="url(#paint1_linear_275_4242)"
      />
      <path
        d="M8.51138 5.33949C8.46596 5.29411 8.40439 5.26862 8.34019 5.26862H2.41675C2.30884 5.26862 2.25482 5.39911 2.33115 5.47538L3.50162 6.64491C3.54703 6.69028 3.6086 6.71577 3.6728 6.71577H9.59625C9.70415 6.71577 9.75817 6.58529 9.68184 6.50902L8.51138 5.33949Z"
        fill="url(#paint2_linear_275_4242)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_275_4242"
          x1="7.31324"
          y1="1.50242"
          x2="3.21372"
          y2="9.35466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_275_4242"
          x1="7.31324"
          y1="1.50242"
          x2="3.21372"
          y2="9.35466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_275_4242"
          x1="7.31324"
          y1="1.50242"
          x2="3.21372"
          y2="9.35466"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SolIcon;
