import React from 'react';
import NavBar from "./NavBar";
import CalendarAndSort from "./CalendarAndSort"
import MoviesInfoBlock from "./MoviesInfoBlock"
import PostMovies from './PostMovies'


class MainPage extends React.Component {
    render() {
    return(
        <main>
        <NavBar />
        <CalendarAndSort />
        <MoviesInfoBlock />
        <PostMovies />
        </main>
    )   
    }
}

export default MainPage