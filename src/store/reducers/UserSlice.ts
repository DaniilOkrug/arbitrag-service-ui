import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";

type availableExchangesType = {
    [key: string]: string[];
}

interface UserState {
    activeBanks: string[];
    buyExchange: {
        [key: string]: {
            name: string;
            price: string;
            index: number;
        }
    };
    sellExchange: {
        [key: string]: {
            name: string;
            price: string;
            index: number;
        }
    };
    availableExchanges: availableExchangesType;
    deletedExchanges: {
        [key: string]: {
            [key: string]: string[];
        }
    };
    showBuyExchangeModal: boolean;
    showSellExchangeModal: boolean;
    deleteModalActiveState: {
        pair: string;
        exchange: string;
    };
}

const initialState: UserState = {
    activeBanks: ["Tinkoff", "RosBank", "RaiffeisenBankRussia", "QIWI", "YandexMoney", "PostBankRussia", "ABank"],
    availableExchanges: {} as availableExchangesType,
    buyExchange: {},
    sellExchange: {},
    deletedExchanges: {
        buy: {},
        sell: {}
    },
    showBuyExchangeModal: false,
    showSellExchangeModal: false,
    deleteModalActiveState: {
        exchange: "",
        pair: ""
    }
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        //Bank reducers
        addBank(state, action: PayloadAction<string>) {
            if (!state.activeBanks.includes(action.payload)) {
                state.activeBanks.push(action.payload);
            }
        },

        deleteBank(state, action: PayloadAction<string>) {
            if (state.activeBanks.includes(action.payload)) {
                const index = state.activeBanks.indexOf(action.payload);
                if (index > -1) {
                    state.activeBanks.splice(index, 1);
                }

            }
        },

        setBankNames(state, action: PayloadAction<string[]>) {
            state.activeBanks = action.payload;
        },

        //Exchanges reducers
        setBuyExchange(state, action: PayloadAction<{ name: string, exchange: string, price: string }>) {
            state.buyExchange[action.payload.name] = {
                name: action.payload.exchange,
                price: action.payload.price,
                index: state.availableExchanges[action.payload.name].length - 1
            };
        },

        setSellExchange(state, action: PayloadAction<{ name: string, exchange: string, price: string }>) {
            state.sellExchange[action.payload.name] = {
                name: action.payload.exchange,
                price: action.payload.price,
                index: 0,
            };
        },

        setAvailbaleExchanges(state, action: PayloadAction<{ name: string; exchanges: any; }>) {
            state.availableExchanges[action.payload.name] = action.payload.exchanges;
        },

        getNext(state, action: PayloadAction<{ side: string, name: string, exchangeName: string }>) {
            const element = state.availableExchanges[action.payload.name].find(exchange => {
                return Object.keys(exchange)[0] === action.payload.exchangeName;
            });

            if (!element) return;

            const index = state.availableExchanges[action.payload.name].indexOf(element);

            let newIndex = action.payload.side === 'buy' ? index - 1 : index + 1;

            if (newIndex < 0) {
                newIndex = state.availableExchanges[action.payload.name].length - 1;
            }

            if (state.deletedExchanges[action.payload.side][action.payload.name]) {
                for (let i = state.availableExchanges[action.payload.name].length - 1; i > 0; i--) {
                    const newExchange = state.availableExchanges[action.payload.name][newIndex];
                    if (!newExchange) break;

                    const [[newExchangeName, newExchangePrice]] = Object.entries(newExchange);

                    if (state.deletedExchanges[action.payload.side][action.payload.name].includes(newExchangeName)) {
                        if (action.payload.side === 'buy') {
                            newIndex--;

                            if (newIndex < 0) {
                                newIndex = state.availableExchanges[action.payload.name].length - 1;
                            }
                        } else {
                            newIndex++;

                            if (newIndex > state.availableExchanges[action.payload.name].length - 1) {
                                newIndex = 0;
                            }
                        }
                    } else {
                        break;
                    }
                }
            }

            console.log(newIndex, state.availableExchanges[action.payload.name].length - 1);

            const newExchange = state.availableExchanges[action.payload.name][newIndex];

            if (!newExchange) return;

            const [[newExchangeName, newExchangePrice]] = Object.entries(newExchange);

            if (action.payload.side === 'buy') {
                state.buyExchange[action.payload.name] = {
                    name: newExchangeName,
                    price: newExchangePrice,
                    index: newIndex,
                }
            } else {
                state.sellExchange[action.payload.name] = {
                    name: newExchangeName,
                    price: newExchangePrice,
                    index: newIndex
                }
            }
        },

        getBack(state, action: PayloadAction<{ side: string, name: string, exchangeName: string }>) {
            const element = state.availableExchanges[action.payload.name].find(exchange => {
                return Object.keys(exchange)[0] === action.payload.exchangeName;
            });

            if (!element) return;

            const index = state.availableExchanges[action.payload.name].indexOf(element);

            let newIndex = action.payload.side === 'buy' ? index + 1 : index - 1;
            if (newIndex > state.availableExchanges[action.payload.name].length - 1) {
                newIndex = 0;
            }

            if (state.deletedExchanges[action.payload.side][action.payload.name]) {
                for (let i = 0; i < state.availableExchanges[action.payload.name].length - 1; i++) {
                    const newExchange = state.availableExchanges[action.payload.name][newIndex];
                    if (!newExchange) break;

                    const [[newExchangeName, newExchangePrice]] = Object.entries(newExchange);

                    if (state.deletedExchanges[action.payload.side][action.payload.name].includes(newExchangeName)) {
                        if (action.payload.side === 'buy') {
                            newIndex++;

                            if (newIndex > state.availableExchanges[action.payload.name].length - 1) {
                                newIndex = 0;
                            }
                        }
                        else {
                            newIndex--;

                            if (newIndex < 0) {
                                newIndex = state.availableExchanges[action.payload.name].length - 1;
                            }
                        }
                    } else {
                        break;
                    }
                }
            }

            console.log(newIndex, state.availableExchanges[action.payload.name].length - 1);



            const newExchange = state.availableExchanges[action.payload.name][newIndex];

            if (!newExchange) return;

            const [[newExchangeName, newExchangePrice]] = Object.entries(newExchange);

            if (action.payload.side === 'buy') {
                state.buyExchange[action.payload.name] = {
                    name: newExchangeName,
                    price: newExchangePrice,
                    index: newIndex,
                }
            } else {
                state.sellExchange[action.payload.name] = {
                    name: newExchangeName,
                    price: newExchangePrice,
                    index: newIndex
                }
            }
        },

        deleteExchange(state, action: PayloadAction<{ side: string, pairName: string, exchange: string }>) {
            if (state.deletedExchanges[action.payload.side][action.payload.pairName]) {
                state.deletedExchanges[action.payload.side][action.payload.pairName].push(action.payload.exchange);
            } else {
                state.deletedExchanges[action.payload.side][action.payload.pairName] = [action.payload.exchange];
            }

            console.log(current(state.deletedExchanges[action.payload.side]));
        },

        switchShowBuyExchangeModal(state) {
            state.showBuyExchangeModal = !state.showBuyExchangeModal;
        },

        switchShowSellExchangeModal(state) {
            state.showSellExchangeModal = !state.showSellExchangeModal;
            console.log(state.showSellExchangeModal);

        },

        setDeleteActiveStateModal(state, action: PayloadAction<{ pair: string, exchange: string }>) {
            state.deleteModalActiveState.pair = action.payload.pair;
            state.deleteModalActiveState.exchange = action.payload.exchange;
        },
    },
});

export const { getBack, setDeleteActiveStateModal, switchShowSellExchangeModal, switchShowBuyExchangeModal, deleteExchange, getNext, addBank, deleteBank, setBankNames, setBuyExchange, setSellExchange, setAvailbaleExchanges } = userSlice.actions;

export default userSlice.reducer;