import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);
        },
        remove(state,action){
           return state.filter(item=>item.id !== action.payload)
        },
        update(state,action){
          const {id,movie,release}=action.payload;
          const uu = state.find(f=>f.id==id);
          if(uu){
            uu.id=id;
            uu.movie=movie;
            uu.releaseYear=release
          }
        }
    }
})

export const {add,remove,update}=cartSlice.actions;
export default cartSlice.reducer;