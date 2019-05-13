import jsonPlaceholderMovies from '../../apis/jsonPlaceholderMovies';

export const FetchMovies = async dispatch => {
    const response = await jsonPlaceholderMovies.get();
    const arrayMovie = response.data.results;


    // console.log(arrayMovie);
    // dispatch({
    //     type: 'FETCH_MOVIES',
    //     payload: response.data
    // })


    //funkcja modyfikująca tablicę obiektów
    function cuttingMovies(movies) {

        for (let i = 0; i < 20; i++) {
            delete movies[i].adult;
            delete movies[i].vote_count;
            delete movies[i].popularity;
            delete movies[i].video;
            delete movies[i].backdrop_path;
            delete movies[i].original_language;
            delete movies[i].original_title;
        }

        //console.log(movies);
        return movies;
    }

    function sortingMovies(movies) {

        const sorted = movies.sort((a, b) => {
            return b.vote_average - a.vote_average
        })

        return sorted;
    }

    function stringifyGenre(movies) {
        for (let i = 0; i < 20; i++){
            for (let j = 0; j < 5;j++){
                // eslint-disable-next-line default-case
                switch (movies[i].genre_ids[j]) {
                    case 28:
                        movies[i].genre_ids[j] = "Action";
                        continue;
                    case 12:
                        movies[i].genre_ids[j] = "Adventure";
                        continue;
                    case 16:
                        movies[i].genre_ids[j] = "Animation";
                        continue;
                    case 35:
                        movies[i].genre_ids[j] = "Comedy";
                        continue;
                    case 80:
                        movies[i].genre_ids[j] = "Crime";
                        continue;
                    case 99:
                        movies[i].genre_ids[j] = "Documentary";
                        continue;
                    case 18:
                        movies[i].genre_ids[j] = "Drama";
                        continue;
                    case 10751:
                        movies[i].genre_ids[j] = "Family";
                        continue;
                    case 14:
                        movies[i].genre_ids[j] = "Fantasy";
                        continue;
                    case 36:
                        movies[i].genre_ids[j] = "History";
                        continue;
                    case 27:
                        movies[i].genre_ids[j] = "Horror";
                        continue;
                    case 10402:
                        movies[i].genre_ids[j] = "Music";
                        continue;
                    case 9648:
                        movies[i].genre_ids[j] = "Mystery";
                        continue;
                    case 10749:
                        movies[i].genre_ids[j] = "Romance";
                        continue;
                    case 878:
                        movies[i].genre_ids[j] = "Science Fiction";
                        continue;
                    case 10770:
                        movies[i].genre_ids[j] = "TV Movie";
                        continue;
                    case 53:
                        movies[i].genre_ids[j] = "Thriller";
                        continue;
                    case 10752:
                        movies[i].genre_ids[j] = "War";
                        continue;
                    case 37:
                        movies[i].genre_ids[j] = "Western";
                        continue;

                        
                }
            }
        }
    }


    //wywołania///////////////////////////////////////////////////
    const shortArr = cuttingMovies(arrayMovie);
    const sortedArr = sortingMovies(shortArr);
    const finalArr = stringifyGenre(sortedArr);
    console.log(finalArr);

    return sortedArr
};


export default FetchMovies;
