import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroData: []
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setHeroData: (state, action) =>{
      state.heroData = action.payload
    }
  }
})

export const { setHeroData } = moviesSlice.actions

export default moviesSlice.reducer
