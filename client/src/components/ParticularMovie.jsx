import React from 'react';
import { Tabs, Tab } from 'react-materialize';

import SideBar from './SideBar'


class  ParticularMovie extends React.Component {
   

    redirectToTarget = () => {
        this.props.history.push(`/`)
    }

    componentDidMount() {
        
    }

    render() {
     return(
    <section>
       
        <img src={this.props.location.state.image} id="mainPoster" alt="Poster"/>
        <i className="material-icons comeBack" onClick={this.redirectToTarget}>arrow_back</i>
        <div className="movieMainInfo">
                 <p className="movieName">{this.props.location.state.title}</p>
                 <p className="genre">{this.props.location.state.genreOne}, {this.props.location.state.genreSec}</p>
            <p className="durationAndCountry">120 min, USA</p>

         <div className="ratingBookmarkMain">
            <p className="ratingHolder">
                         <i className="tiny material-icons">star_border</i>{this.props.location.state.vote}</p>
        </div>
        </div>
        <Tabs className="tab-demo z-depth-1" options={{swipeable: true}}>
            <Tab title="About" active id="myTabs">
                     {this.props.location.state.overview}
            </Tab>
            <Tab title="Actors">
                    <div className="actors">
                <p className="cast">Cast :</p>    
                Emilia Klark,
                Matthew Karpenko,
                Wojcieh Pawłak,
                Michał Halicki,
                Paweł Zaic  
            </div>
            </Tab>
            <Tab title="Tickets">
            Test 3
            </Tab>
        </Tabs>
            <div className="buyTicket sidenav-trigger" data-target="slide-out" >
                <i className="material-icons">credit_card</i>
        </div>
        <SideBar /> 
        
    </section>
    )
     }
}

export default ParticularMovie