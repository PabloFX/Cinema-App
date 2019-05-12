import React from 'react' 

//import Cinema from './actions/fetchMovies'
import FetchMovies from './actions/fetchMovies(WOJTEK)'



class MoviesInfoBlock extends React.Component {
    state = {
        movieArr: [{id: null, vote_average:null, title: null, poster_path: null}]
    }
    
    componentDidMount() {
        FetchMovies().then(a => { this.setState({movieArr: a}) })
    }
    render () {
        
        return (
            <div className="moviesHolder">
                {this.state.movieArr.map(m => { return (    
                <div className="particularMovie" key={m.id}>
                <img alt={m.title} src={`http://image.tmdb.org/t/p/w185/${m.poster_path}`} />
                    <div className="movieInfo">
                        <p className="movieName">{m.title}</p>
                        <p className="genre">Thriller, comedy</p>
                        <p className="durationAndCountry">120 min, USA</p>
                    </div>
                    <div className="ratingBookmark">
                        <p className="ratingHolder">
                         <i className="tiny material-icons">star_border</i>{m.vote_average}</p>
                    </div>
                </div>
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