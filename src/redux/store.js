import { configureStore } from "@reduxjs/toolkit";
import valueReducer from './slices/valueSlice';


const store = configureStore({
  reducer: {
    getting: valueReducer,
    myName: "my_name",
  }, 
});

export default store;
