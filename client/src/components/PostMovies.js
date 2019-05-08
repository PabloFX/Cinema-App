import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
// import UserHeader from './UserHeader';

class PostMovies extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderList() {
        return this.props.movies.results.title.map(result => {
            return (
                <div className="item" key={result.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{result.title}</h2>
                        </div>
                    </div>
                </div>
            );
        })
    }

    

    render() {
        console.log(this.props.movies.results);
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
    { fetchMovies }
)(PostMovies);

