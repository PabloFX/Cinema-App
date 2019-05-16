import React from 'react' 
import { Link } from 'react-router-dom'

//import Cinema from './actions/fetchMovies'
import FetchMovies from './actions/fetchMovies(WOJTEK)'
import FetchTop100 from './actions/fetchTop100'





class MoviesInfoBlock extends React.Component {
    state = {
        movieArr: [{id: null, vote_average:null, title: null, poster_path: null, genre_ids: [null,null]}]
    }

   

    componentDidMount() {
        FetchMovies().then(a => { this.setState({movieArr: a}) })
        FetchTop100().then(a => { console.log(a) })
    }

    render () {
        
        return (
            <div className="moviesHolder">
                {this.state.movieArr.map(m => { return (    
                    <Link key={m.id} to={{
                        pathname:'/particularMovie',
                        state: {
                            image: `http://image.tmdb.org/t/p/w500//${m.poster_path}`,
                            genreOne: m.genre_ids[0],
                            genreSec: m.genre_ids[1],
                            title: m.title,
                            vote: m.vote_average,
                            overview: m.overview
            }
            }}>
                    <div className="particularMovie" key={m.id}>
                <img alt={m.title} src={`http://image.tmdb.org/t/p/w185/${m.poster_path}`} />
                    <div className="movieInfo">
                        <p className="movieName">{m.title}</p>
                            <p className="genre">{m.genre_ids[0]}, {m.genre_ids[1]}</p>
                        <p className="durationAndCountry">120 min, USA</p>
                    </div>
                    <div className="ratingBookmark">
                        <p className="ratingHolder">
                         <i className="tiny material-icons">star_border</i>{m.vote_average}</p>
                    </div>
                </div>
                    </Link>
                )})}
            </div>
        )
    }
}

export default MoviesInfoBlock


    // < div className = "particularMovie" >
    //     <img src={avengers} alt="Movie poster" />
    //     <div className="movieInfo">
    //         <p className="movieName">Avengers</p>
    //         <p className="genre">Thriller, comedy</p>
    //         <p className="durationAndCountry">120 min, USA</p>
    //     </div>
    //     <div className="ratingBookmark">
    //         <p className="ratingHolder">
    //             <i className="tiny material-icons">star_border</i>5.9</p>
    //     </div>
    //             </div >

    