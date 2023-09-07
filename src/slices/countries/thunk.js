import { countryApi } from "../../apis";
import { setCountries, startLoadingCountries } from "./countriesSlice";

export const getCountries = () => {
  return async(dispatch) => {
    
    dispatch(startLoadingCountries());

    try {

      const {data} = await countryApi.get();
      dispatch(setCountries({countries: data}));

    } catch (error) {

        if (error.response) {
          // The client was given an error response (5xx, 4xx)
          console.log('Error en thunk de countries con la response', error.response);
          throw new Error('Error con la llamada a paises con la response');
        } else if (error.request) {
            // The client never received a response, and the request was never left
            console.log('Error en thunk de countries con la request', error.request);
            throw new Error('Error con la llamada a paises con la request');
        } else {
            // Anything else
            console.log('Error en thunk de countries', error.message);
            throw new Error('Error con la llamada a paises');
        }
      
    }
  }
}