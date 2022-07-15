import { createSlice, configureStore } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
    name: 'isCartShowing',
    initialState: { isCartShowing : false},
    reducers: {
        showCart(state, action){
            state.isCartShowing = !state.isCartShowing;
        }
    }
});

const store = configureStore({
    reducer: {
        isCartShowing : showCartSlice.reducer,
    }
});

export const isCartShowingActions = showCartSlice.actions;

export default store;