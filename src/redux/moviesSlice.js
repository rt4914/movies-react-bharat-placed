import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroData: [],
  imageBaseUrl: '',
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setHeroData: (state, action) =>{
      state.heroData = action.payload
    },
    setImageBaseUrl: (state, action) =>{
      state.imageBaseUrl = action.payload
    }
  }
})

export const { setHeroData, setImageBaseUrl } = moviesSlice.actions

export default moviesSlice.reducer
