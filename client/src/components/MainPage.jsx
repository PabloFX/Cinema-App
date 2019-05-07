import React from 'react';
import NavBar from "./NavBar";
import CalendarAndSort from "./CalendarAndSort"
import MoviesInfoBlock from "./MoviesInfoBlock"

class MainPage extends React.Component {
    render() {
    return(
        <main>
        <NavBar />
        <CalendarAndSort />
        <MoviesInfoBlock />
        </main>

    )   
    }
}

export default MainPage