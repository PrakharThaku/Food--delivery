import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],   
  reducers: {
    addItem: (state, action) => {
      
    let existsElement = state.find((item)=>item.id===action.payload.id)
if(existsElement){
  return state = state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))
}else{
  state.push(action.payload)
}
    },
    removeItem:(state,action)=>{
      return state.filter((item)=>item.id!== action.payload)
    },
    incrementQty:(state,action)=>{
      return state = state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty+1}:item))

    },
    decrementQty:(state,action)=>{
      return state = state.map((item)=>(item.id===action.payload.id?{...item,qty:item.qty-1}:item))

    },
  }
})

export const { addItem,removeItem,incrementQty,decrementQty} = cartSlice.actions
export default cartSlice.reducer


