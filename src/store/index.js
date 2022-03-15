import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';
import cartSlice from './cart-slice';


const store = configureStore({
    reducer : {
        auth : authSlice.reducer, //name of the state can be accessed by useSelector
        cart : cartSlice.reducer,
    }
})

export default store;