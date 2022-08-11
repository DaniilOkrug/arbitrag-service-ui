import React, { FC, useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import {
  deleteExchange,
  getNext,
  switchShowBuyExchangeModal,
  switchShowSellExchangeModal,
} from "../../../store/reducers/UserSlice";

import "./DeleteExchangeModal.css";

interface DeleteExchageProps {
  isBuy: boolean;
  exchangeName: string;
  pair: string;
}

const DeleteExchangeModal: FC<DeleteExchageProps> = ({
  isBuy,
  exchangeName,
  pair,
}) => {
  const dispatch = useAppDispatch();
  const {
    buyExchange,
    sellExchange,
    availableExchanges,
    showBuyExchangeModal,
    showSellExchangeModal,
    deleteModalActiveState
  } = useAppSelector((state) => state.userReducer);

  return (
    <ReactModal
      overlayClassName="ReactModal__Overlay_exchanges"
      className="exchanges-modal-content"
      isOpen={isBuy ? showBuyExchangeModal : showSellExchangeModal}
      ariaHideApp={false}
    >
      <div className="modal-content">
        <p>Исключить биржу {deleteModalActiveState.exchange} из связки {deleteModalActiveState.pair.split('/')[0]}</p>

        <div className="button-container">
          <button
            className="btn active"
            onClick={() => {
              dispatch(
                deleteExchange({
                  side: isBuy ? "buy" : "sell",
                  pairName: deleteModalActiveState.pair,
                  exchange: deleteModalActiveState.exchange,
                })
              );

              dispatch(
                getNext({
                  name: deleteModalActiveState.pair,
                  side: isBuy ? "buy" : "sell",
                  exchangeName: deleteModalActiveState.exchange,
                })
              );

              if (isBuy) {
                dispatch(switchShowBuyExchangeModal());
              } else {
                dispatch(switchShowSellExchangeModal());
              }
            }}
          >
            Да
          </button>
          <button
            className="btn"
            onClick={() => {
              if (isBuy) {
                dispatch(switchShowBuyExchangeModal());
              } else {
                dispatch(switchShowSellExchangeModal());
              }
            }}
          >
            Нет
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default DeleteExchangeModal;
