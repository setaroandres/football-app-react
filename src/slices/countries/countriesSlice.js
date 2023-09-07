import { createSlice } from "@reduxjs/toolkit";


export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    isLoading: false
  },
  reducers: {
    startLoadingCountries: (state) => {
      state.isLoading = true;
    },
    setCountries: (state, {payload}) => {
      state.isLoading = false;
      state.countries = payload.countries.response;
    }
  }

});

export const {startLoadingCountries, setCountries} = countriesSlice.actions;