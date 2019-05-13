import jsonPlaceholderMovies from '../../apis/jsonPlaceholderMovies';

export const FetchID = async dispatch => {
    const response = await jsonPlaceholderMovies.get();
    const arrayMovie = response.data.results;


    //console.log(arrayMovie);
    // dispatch({
    //     type: 'FETCH_MOVIES',
    //     payload: response.data
    // })


    function sortingMovies(movies) {

        const sorted = movies.sort((a, b) => {
            return b.vote_average - a.vote_average
        })

        return sorted;
    }

    function gettingID(movies) {
        let arrayID = [];
        for (let i = 0; i < 20; i++) {
            arrayID.push(movies[i].id);
        }

        //console.log(arrayID);
        return arrayID;
    }


    //wywołania///////////////////////////////////////////////////
    const sortedArr = sortingMovies(arrayMovie);
    const arrayIDD = gettingID(sortedArr);
    console.log(arrayIDD);
    return sortedArr
};


export default FetchID;
