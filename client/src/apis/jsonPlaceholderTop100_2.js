import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/top_rated?api_key=73459706ef1474208ddc7b1990a073ed&language=en-US&page=2'
});
