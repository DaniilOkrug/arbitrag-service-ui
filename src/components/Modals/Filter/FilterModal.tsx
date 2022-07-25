import React, { FC, useState } from "react";
import ReactModal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { addBank, deleteBank, setBankNames } from "../../../store/reducers/UserSlice";

import CloseButton from "../CloseButton/CloseButton";
import BankItem from "./BankItem/BankItem";

import "./FilterModal.css";

interface FilterModalProps {
  show: boolean;
  onClose: any;
}

type bankNamesType = {
  [key: string]: string;
};

const bankNames: bankNamesType = {
  Тиньков: "Tinkoff",
  "Альфа Банк": "RosBank",
  Райф: "RaiffeisenBankRussia",
  Киви: "QIWI",
  Юмани: "YandexMoney",
  Почта: "PostBankRussia",
  "А-Банк": "ABank",
};

const FilterModal: FC<FilterModalProps> = ({ show, onClose }) => {
  const dispatch = useAppDispatch();
  const { activeBanks } = useAppSelector((state) => state.userReducer);

  // const [currentBanks, setCurrentBanks] = useState<string[]>(activeBanks);

  return (
    <ReactModal
      className="main-modal-content"
      isOpen={show}
      ariaHideApp={false}
    >
      <p className="modal-header-text">Банки и платёжки</p>

      <div className="banks-list">
        {Object.keys(bankNames).map((bankName, index) => {
          if (activeBanks.includes(bankNames[bankName])) {
            return (
              <BankItem
                key={index}
                text={bankName}
                active
                onClick={() => dispatch(deleteBank(bankNames[bankName]))}
              />
            );
          } else {
            return (
              <BankItem
                key={index}
                text={bankName}
                onClick={() => dispatch(addBank(bankNames[bankName]))}
              />
            );
          }
        })}
      </div>

      <CloseButton
        text="Применить"
        onClick={() => {
          onClose();
        }}
      />
    </ReactModal>
  );
};

export default FilterModal;
