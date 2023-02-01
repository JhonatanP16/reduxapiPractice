import { createSlice } from "@reduxjs/toolkit";

const themeFromLocalStorage = !!localStorage.getItem('movie-theme');

const initialState = themeFromLocalStorage;

const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme: (state) => {
            if(state){
                localStorage.removeItem('movie-theme')
            }else{
                localStorage.setItem('movie-theme',"_")
            }
            return (state = !state);
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
