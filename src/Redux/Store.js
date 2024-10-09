import { configureStore } from "@reduxjs/toolkit";
import { todoslice } from "./Slice";

const Store = configureStore({
    reducer:{
        Todo:todoslice
    },
})

export default Store;