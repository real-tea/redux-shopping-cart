import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name : "cart",
    initialState  : {
        itemList : [],
        totalQuantity : 0,
        showCart : false,
        changed : false
    },
    reducers : {
        addToCart(state , action){
            const newItem = action.payload;
            const ExistingItem  = state.itemList.find(
                (item) => item.id === newItem.id
            );
            if(ExistingItem){
                ExistingItem.quantity++;
                ExistingItem.totalPrice += newItem.price;

            }else{
                state.itemList.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.name
                });
                state.totalQuantity++;
            }
        },
        setShowCart(state ){
            state.showCart = !state.showCart;
        },

        removeFromCart(state , action){
            state.changed = true;
            const id = action.payload;
            const existingItem = state.itemList.find((item)=>item.id === id);

            if(existingItem.quantity === 1){
                state.itemList = state.itemList.filter((item)=>item.id!==id);
                state.totalQuantity--;
            }else{
                existingItem.quantity --;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    }

})
export const cartActions = cartSlice.actions;

export default cartSlice;