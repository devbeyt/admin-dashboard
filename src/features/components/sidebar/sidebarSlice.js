import { createSlice,createEntityAdapter } from "@reduxjs/toolkit";
import { sidebarData } from "./sidebarData";



export const sidebarAdapter = createEntityAdapter({
        selectId: (item) =>item.id,
        sortComparer: (prevItem,nexItem) => prevItem.id.localCompare(nexItem.id)
})



const initialState = {
      status: 'idle',
      error: null,
      links:sidebarData
     
}


const sidebarSlice = createSlice({
    name: 'categories',
    initialState,
    reducers:{},
    extraReducers:{}
})


export const sidebarSelector = sidebarAdapter.getSelectors((state)=>state.links.links)
export default sidebarSlice.reducer;