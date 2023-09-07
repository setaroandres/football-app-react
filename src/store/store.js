import { configureStore } from "@reduxjs/toolkit";
import { countriesSlice } from "../slices/countries";
import { leaguesSlice } from "../slices/leagues";


export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer,
    leagues: leaguesSlice.reducer
  }
});