import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    darkMode:true,
}

const darkModeSlice = createSlice({
    name:"darkMode",
    initialState,
    reducers:{
        toggleTheme: (state)=>{
            state.darkMode = !state.darkMode
        }
    }
})

export const {toggleTheme} = darkModeSlice.actions;
export default darkModeSlice.reducer
