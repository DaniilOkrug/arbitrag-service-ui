import React, { FC } from "react";
import { IconProps } from "./IconProps";

const EthIcon: FC<IconProps> = ({ width = 26, height = 26 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
        fill="white"
      />
      <path
        d="M13.1126 4.875L13.0037 5.24529V15.9902L13.1126 16.0989L18.1002 13.1507L13.1126 4.875Z"
        fill="#343434"
      />
      <path
        d="M13.1126 4.875L8.125 13.1507L13.1126 16.099V10.8837V4.875Z"
        fill="#8C8C8C"
      />
      <path
        d="M13.1122 17.0433L13.0508 17.1181V20.9457L13.1122 21.125L18.1028 14.0966L13.1122 17.0433Z"
        fill="#3C3C3B"
      />
      <path
        d="M13.1126 21.1249V17.0432L8.125 14.0965L13.1126 21.1249Z"
        fill="#8C8C8C"
      />
      <path
        d="M13.1131 16.0989L18.1006 13.1507L13.1131 10.8838V16.0989Z"
        fill="#141414"
      />
      <path
        d="M8.125 13.1507L13.1126 16.0989V10.8838L8.125 13.1507Z"
        fill="#393939"
      />
    </svg>
  );
};

export default EthIcon;
