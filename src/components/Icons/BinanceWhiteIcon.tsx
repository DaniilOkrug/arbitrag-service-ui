import React, { FC } from "react";
import { IconProps } from "./IconProps";

const BinanceWhiteIcon: FC<IconProps> = ({ width = 14, height = 14 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.2822 5.88263L7.00134 3.16468L9.72159 5.88484L11.3029 4.3025L7.00134 0L2.69981 4.3014L4.2822 5.88263ZM0 7.00024L1.58181 5.41848L3.16362 7.00024L1.58181 8.582L0 7.00024ZM7.00134 10.8364L4.2822 8.11737L2.69759 9.6975L2.69981 9.69971L7.00134 14L11.3029 9.6975L11.304 9.69639L9.72159 8.11626L7.00134 10.8364ZM10.8364 7.00063L12.4182 5.41887L14 7.00063L12.4182 8.58239L10.8364 7.00063ZM7.00134 5.39389L8.60585 6.99945H8.60695L8.60585 7.00055L7.00134 8.60611L5.39683 7.00276L5.39462 6.99945L5.39683 6.99724L5.67771 6.71637L5.81482 6.58036L7.00134 5.39389Z"
        fill="white"
      />
    </svg>
  );
};

export default BinanceWhiteIcon;
