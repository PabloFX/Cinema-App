// import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchMovies = () => {
    return async dispatch => {
        const response = await jsonPlaceholder.get("title");
        
        dispatch({ type: 'FETCH_MOVIES', payload: response.data })
    };
};

//obrobic funkcje fetch do pobierania danych