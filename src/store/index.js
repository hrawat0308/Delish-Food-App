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
            },

            incrementItem(state, action){
                const index = state.addedItemArray.findIndex((item) => item.id === action.payload.id);
                state.addedItemArray[index].quantity++;
                state.addedItemArray[index].totalPrice = state.addedItemArray[index].price * state.addedItemArray[index].quantity; 
                 
            },

            decrementItem(state, action){
                const index = state.addedItemArray.findIndex((item) => item.id === action.payload.id);
                state.addedItemArray[index].quantity--;
                if(state.addedItemArray[index].quantity !== 0){
                    state.addedItemArray[index].totalPrice = state.addedItemArray[index].price * state.addedItemArray[index].quantity;
                }
                else{
                    state.addedItemArray = state.addedItemArray.filter((item)=>{
                        return item.id !== action.payload.id;
                    });
                }
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