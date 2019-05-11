import React from 'react';
import { connect } from 'react-redux';
import fetchMoviesWojtek  from './actions/fetchMovies(WOJTEK)';
// import UserHeader from './UserHeader';

class PostMovies extends React.Component {
    // componentDidMount() {
    //     this.props.fetchMovies();
    
    // }

    // renderList() {
    //     return this.props.movies.results.title.map(result => {
    //         return (
    //             <div className="item" key={result.id}>
    //             </div>
    //         );
    //     })
    // }

    

    render() {
        return (
            <div className="ui relaxed divided list"></div>
        );
    }
}

const mapStateToProps = state => {
    return { movies: state.movies };
};


export default connect(
    mapStateToProps,
    { fetchMoviesWojtek }
)(PostMovies);

