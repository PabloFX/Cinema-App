import jsonPlaceholderTop100_1 from '../../apis/jsonPlaceholderTop100_1';
import jsonPlaceholderTop100_2 from '../../apis/jsonPlaceholderTop100_2';
import jsonPlaceholderTop100_3 from '../../apis/jsonPlaceholderTop100_3';


export const FetchTop100 = async dispatch => {
    const response1 = await jsonPlaceholderTop100_1.get();
    const arrayTop100_1 = response1.data.results;
    const response2 = await jsonPlaceholderTop100_2.get();
    const arrayTop100_2 = response2.data.results;
    const response3 = await jsonPlaceholderTop100_3.get();
    const arrayTop100_3 = response3.data.results;

    const fullArray = arrayTop100_1.concat(arrayTop100_2, arrayTop100_3);
    //console.log(arrayMovie);
    // dispatch({
    //     type: 'FETCH_MOVIES',
    //     payload: response.data
    // })

    function getNumberOfWeek() {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }

    function getTop100Movie() {
        const topMovieOfTheWeek = fullArray[getNumberOfWeek()];
        return topMovieOfTheWeek;
    }

    //wywołania///////////////////////////////////////////////////
    //console.log(weekNumber);
    const top100MovieOfTheWeek = getTop100Movie();
    return top100MovieOfTheWeek; 
};


export default FetchTop100;
