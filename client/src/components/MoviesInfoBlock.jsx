import React from 'react' 
import avengers from '../avengers.jpg'
//import Cinema from './actions/fetchMovies'
import FetchMovies from './actions/fetchMovies(WOJTEK)'
import FetchID from './actions/fetchID'



class MoviesInfoBlock extends React.Component {

    render () {
        console.log(FetchMovies().then(a => { console.log(a) }))
        console.log(FetchID().then(a => { console.log(a) }))
        
        return (
            <div className="moviesHolder">
        
                <div className="particularMovie">
                    <img src={avengers} alt="Movie poster"/>
                    <div className="movieInfo">
                    <p className="movieName">Avengers</p>
                    <p className="genre">Thriller, comedy</p>
                    <p className="durationAndCountry">120 min, USA</p>
                    </div>
                    <div className="ratingBookmark">
                    <p className="ratingHolder">
                    <i className="tiny material-icons">star_border</i>5.9</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MoviesInfoBlock
//return (<div>{array.map(m => { return (<p>{m.title}</p>)})}</div>)