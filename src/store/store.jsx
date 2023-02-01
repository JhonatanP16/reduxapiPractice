import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice'
import movieReducer from '../features/movies/movieSlice'
export const store = configureStore({
    reducer:{
        darkTheme: themeReducer,
        movies: movieReducer
    }    
});