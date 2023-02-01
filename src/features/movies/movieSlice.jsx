import {createSlice,createAsyncThunk } from "@reduxjs/toolkit";

//Action

export const getMovies = createAsyncThunk(
    "movies/getMovies", 
    async(data, thunkApi) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=2b12c92ea9849ea241a9feb3b899fcaa`
        );
        return await response.json();
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

const initialState = {
    loading: false,
    error: null,
    data: null,
}

const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(getMovies.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getMovies.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload;
        });
        builder.addCase(getMovies.rejected,(state,action) =>{
            state.loading = false;
            state.error = action.payload
        })
    }
})

export default movieSlice.reducer;