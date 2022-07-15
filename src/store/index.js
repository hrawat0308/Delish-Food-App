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

const addItemToCartSlice = createSlice({
    name : 'addedItem',
    initialState: { id: "", name: "", price: "", quantity:"", totalPrice:"", addedItemArray : [] },
    reducers : {
        addItemToCart(state, action){
                    state.id = action.payload.id;
                    state.name = action.payload.name;
                    state.price = action.payload.price;
                    state.quantity = action.payload.quantity;
                    state.totalPrice = action.payload.totalPrice;

                    state.addedItemArray = [...state.addedItemArray,{
                        id : state.id,
                        name : state.name,
                        price : state.price,
                        quantity : state.quantity,
                        totalPrice : state.totalPrice
                    }];
                }
        }
    });

const store = configureStore({
    reducer: {
        isCartShowing : showCartSlice.reducer,
        addedItem : addItemToCartSlice.reducer,
    }
});

export const isCartShowingActions = showCartSlice.actions;
export const addItemToCartActions = addItemToCartSlice.actions;
export default store;