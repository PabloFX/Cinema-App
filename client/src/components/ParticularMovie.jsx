import React from 'react';
import { Tabs, Tab } from 'react-materialize';
import avengers2 from '../avengers2.jpg'
import SideBar from './SideBar'

const ParticularMovie = () => {
    return(
    <section>
        
        <img src={avengers2} id="mainPoster" alt="Poster"/>
        <i className="material-icons comeBack">arrow_back</i>
        <div className="movieMainInfo">
            <p className="movieName">Avengers</p>
            <p className="genre">Thriller, comedy</p>
            <p className="durationAndCountry">120 min, USA</p>

         <div className="ratingBookmarkMain">
            <p className="ratingHolder">
            <i className="tiny material-icons">star_border</i>5.9</p>
        </div>
        </div>
        <Tabs className="tab-demo z-depth-1" options={{swipeable: true}}>
            <Tab title="About" active id="myTabs">
                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam fugit enim deleniti. Dignissimos minus magni quia sequi eaque voluptates, adipisci odit nulla nisi quam quis enim iusto dolore quo similique.
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

export default ParticularMovie