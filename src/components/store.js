import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "../features/accounts/accountSlice";
import customerReducer from "../features/customers/customerSlice";
import viewSlice from "../features/views/viewSlice";

const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer,
        view: viewSlice,
    },
});

export default store;
