import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ParticularMovie from './ParticularMovie';
import MainPage from './MainPage';
import CinemaHall from './CinemaHall';

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/particularMovie" component={ParticularMovie} />
                    <Route path="/hall" component={CinemaHall} />
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Navigation;