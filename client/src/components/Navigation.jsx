import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ParticularMovie from './ParticularMovie';
import MainPage from './MainPage.jsx';

class Navigation extends React.Component {
    render() {
        return (
            <BrowserRouter>

                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/particularMovie" component={ParticularMovie} />
                </Switch>

            </BrowserRouter>
        );
    }
}

export default Navigation;