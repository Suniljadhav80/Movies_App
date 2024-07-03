import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        data:[],        
    },
    reducers:{
        setProducts(state,action){
            state.data=action.payload;
        },
    }
})

export const {add,remove}=productSlice.actions;
export default productSlice.reducer;