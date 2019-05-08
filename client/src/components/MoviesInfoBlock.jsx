import React from 'react' 
import avengers from '../avengers.jpg'

class MoviesInfoBlock extends React.Component {
    render () {
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