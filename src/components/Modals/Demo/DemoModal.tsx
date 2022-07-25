import React, { FC } from "react";
import ReactModal from "react-modal";

import CloseButton from "../CloseButton/CloseButton";
import BankItem from "../Filter/BankItem/BankItem";

import "./DemoModal.css";

interface DemoModalProps {
  show: boolean;
  onClose: any;
}

const DemoModal: FC<DemoModalProps> = ({ show, onClose }) => {
  return (
    <ReactModal className="demo-modal-content" isOpen={show} ariaHideApp={false}>
      <div className="modal-content">
        <img src={require("./eyes.png")} alt="" />
        <p className="demo-text">Фильтров нет в Демо</p>
      </div>

      <CloseButton text="Закрыть" onClick={onClose} />
    </ReactModal>
  );
};

export default DemoModal;
