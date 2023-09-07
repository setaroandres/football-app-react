import { leaguesApi } from "../../apis";
import { setLeagues, startLoadingLeagues } from "./leaguesSlice";

export const getLeagues = (id) => {
  return async(dispatch) => {
    
    dispatch(startLoadingLeagues());

    try {

      const {data} = await leaguesApi.get(`?code=${id}`);
      dispatch(setLeagues({leagues: data}));

    } catch (error) {

        if (error.response) {
          // The client was given an error response (5xx, 4xx)
          console.log('Error en thunk de leagues con la response', error.response);
          throw new Error('Error con la llamada a ligas con la response');
        } else if (error.request) {
            // The client never received a response, and the request was never left
            console.log('Error en thunk de leagues con la request', error.request);
            throw new Error('Error con la llamada a ligas con la request');
        } else {
            // Anything else
            console.log('Error en thunk de leagues', error.message);
            throw new Error('Error con la ligas a paises');
        }
      
    }
  }
}