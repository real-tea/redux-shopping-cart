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
        setShowCart(state , actions){
            state.showCart = false;
        }
    }

})
export const cartActions = cartSlice.actions;

export default cartSlice;