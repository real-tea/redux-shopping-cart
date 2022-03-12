import {configureStore} from '@reduxjs/toolkit';
import authSlice from './auth-slice';


const store = configureStore({
    reducer : {
        auth : authSlice.reducer, //name of the state can be accessed by useSelector
    }
})

export default store;