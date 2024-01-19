/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
    isLoading: false,
};

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        deposit(state, action) {
            // state.balance = state.balance + action.payload;
            state.balance += action.payload;
            state.isLoading = false;
        },
        withdraw(state, action) {
            if (state.balance < action.payload) return;
            state.balance -= action.payload;
            // state.balance = state.balance - action.payload;
        },
        requestLoan: {
            prepare(amount, purpose) {
                return {
                    payload: { amount, purpose },
                };
            },

            reducer(state, action) {
                if (state.loan > 0) return;
                state.loan = action.payload.amount;
                state.balance = state.balance + action.payload.amount;
                state.loanPurpose = action.payload.amount;
            },
        },
        payLoan(state) {
            if (state.balance < state.loan) return;
            state.balance -= state.loan;
            state.loan = 0;
            state.loanPurpose = "";
        },
        convertingCurrency(state) {
            state.isLoading = true;
        },
    },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
    if (currency === "USD") return { type: "account/deposit", payload: amount };

    return async function (dispatch, getState) {
        dispatch({ type: "account/convertingCurrency" });
        try {
            const response = await fetch(
                `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
            );
            // https://api.frankfurter.app/latest?amount=
            // console.log(`response:-`, response);
            const data = await response.json();
            // console.log(`data`, data);
            const converted = data.rates.USD;

            // retun action
            dispatch({ type: "account/deposit", payload: converted });
        } catch {
            console.log();
        }
    };
}

export default accountSlice.reducer;

/*
export default function accountReducer(state = initialStateAccount, action) {
    switch (action.type) {
        case "account/deposit":
            return {
                ...state,
                balance: state.balance + action.payload,
                isLoading: false,
            };
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload };
        case "account/requetLoan":
            if (state.loan > 0) return state;
            return {
                ...state,
                loan: action.payload.amount,
                loanPurpose: action.payload.purpose,
                balance: state.balance + action.payload.amount,
            };
        case "account/payLoan":
            return {
                ...state,
                loan: 0,
                loanPurpose: "",
                balance: state.balance - state.loan,
            };
        case "account/convertingCurrency":
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}

export function deposit(amount, currency) {
    if (currency === "USD") return { type: "account/deposit", payload: amount };

    return async function (dispatch, getState) {
        dispatch({ type: "account/convertingCurrency" });
        try {
            const response = await fetch(
                `https://api.frankfurter.app/lates?amount=${amount}&from=${currency}&to=USD`
            );
            const data = await response.json();
            const converted = data.rates.USD;

            // retun action
            dispatch({ type: "account/deposit", payload: converted });
        } catch {
            console.log();
        }
    };
}

export function withdraw(amount) {
    return { type: "account/withdraw", payload: amount };
}

export function requetLoan(amount, purpose) {
    return {
        type: "account/requetLoan",
        payload: { amount, purpose },
    };
}

export function payLoan() {
    return { type: "account/payLoan" };
}
*/
