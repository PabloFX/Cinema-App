import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ParticularMovie from './ParticularMovie';
import MainPage from './MainPage';
import CinemaHall from './CinemaHall';
import ClientInputs from './ClientInputs';

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/particularMovie" component={ParticularMovie} />
                    <Route path="/hall" component={CinemaHall} />
                    <Route path="/inputs" component ={ClientInputs} />
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Navigation;