// import React from 'react';
// import jsonPlaceholder from '../../apis/jsonPlaceholder';


// const getArray = (variable) => {
//     return async dispatch => {
//         const response = await jsonPlaceholder.get("title");
//         const arrayMovie = response.data.results;
//         //console.log(arrayMovie);
//         dispatch({
//             type: 'FETCH_MOVIES',
//             payload: response.data
//         })


//         //funkcja modyfikująca tablicę obiektów
//         function cuttingMovies(movies) {

//             for (let i = 0; i < 20; i++) {
//                 delete movies[i].adult;
//                 delete movies[i].vote_count;
//                 delete movies[i].popularity;
//                 delete movies[i].video;
//                 delete movies[i].backdrop_path;
//                 delete movies[i].original_language;
//                 delete movies[i].original_title;
//             }

//             //console.log(movies);
//             return movies;
//         }

//         function sortingMovies(movies) {

//             const sorted = movies.sort((a, b) => {
//                 return b.vote_average - a.vote_average
//             })

//             return sorted;
//         }


//         const shortArray = cuttingMovies(arrayMovie);
//         variable = sortingMovies(shortArray);
    
//     };
    
// }

// class CreateArray extends React.Component {
//     constructor(props) {
//     super(props);

//     this.state = {
//         array: null,
//     };

//     getArray(this.state.array)

// }
// render() {
//     return (
//         <div>{this.state.array}</div>
//     )
// }
// }


// export default CreateArray