import React, { FC } from "react";

import "./CloseButton.css";

interface CloseButtonProps {
  text: string;
  onClick: any;
}

const CloseButton: FC<CloseButtonProps> = ({ text, onClick}) => {
  return <button className="close-button" onClick={onClick}>{text}</button>;
};

export default CloseButton;
