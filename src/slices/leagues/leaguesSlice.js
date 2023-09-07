import { createSlice } from "@reduxjs/toolkit";

export const leaguesSlice = createSlice({
  name: 'leagues',
  initialState: {
    leagues: [],
    isLoading: false
  },
  reducers: {
    startLoadingLeagues: (state) => {
      state.isLoading = true;
    },
    setLeagues: (state, {payload}) => {
      state.isLoading = false;
      state.leagues = payload.leagues.response;
    }
  }
});

export const {startLoadingLeagues, setLeagues} = leaguesSlice.actions;