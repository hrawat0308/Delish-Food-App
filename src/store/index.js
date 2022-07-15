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
    initialState: { id: "", name: "", price: "", quantity:"", totalPrice:"", addedItemArray : [] , isClicked : false },
    reducers : {
        addItemToCart(state, action){
                    state.id = action.payload.id;
                    state.name = action.payload.name;
                    state.price = action.payload.price;
                    state.quantity = action.payload.quantity;
                    state.totalPrice = action.payload.totalPrice;
                    
                    const existingIndex = state.addedItemArray.findIndex((item)=>item.id === state.id);
                    if(existingIndex !== -1){
                        state.addedItemArray[existingIndex].quantity = Number(state.addedItemArray[existingIndex].quantity) + Number(state.quantity);
                        state.addedItemArray[existingIndex].totalPrice += state.totalPrice;
                    }else{
                       
                            state.addedItemArray = [...state.addedItemArray,{
                            id : state.id,
                            name : state.name,
                            price : state.price,
                            quantity : state.quantity,
                            totalPrice : state.totalPrice
                            }];
                        
                    }
   
                },

            addItemToCartButtonClick(state){
                state.isClicked = !state.isClicked;
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