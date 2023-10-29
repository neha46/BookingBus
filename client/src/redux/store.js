import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './alertSlice.js';
import userReducer from './userSlice.js';

const store=configureStore({
    reducer:{
        alert:alertReducer,
        users:userReducer,
    }
})
export default store;