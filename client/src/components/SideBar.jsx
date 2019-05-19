import React from 'react'
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.typeRef = React.createRef();
        this.dayRef = React.createRef();
        this.timeRef = React.createRef();
        this.state = {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Say', 'Sun'],
            day: null,
            type: 'All',
            time: null,
            refs: [this.typeRef, this.dayRef, this.timeRef],
            showDayArr: this.setTimeForToday()
        }
        
        this.chooseValue = this.chooseValue.bind(this);
        this.chooseDay = this.chooseDay.bind(this)
    }
    
    chooseOption = () => {
        for (let y = 0; y < this.state.refs.length; y++){
            let divP = this.state.refs[y].current.children
       
           
            for (let i = 0; i < divP.length; i++) {
                divP[i].addEventListener('click', this.chooseValue)
                
                }
        }
        for (let x = 0; x < this.dayRef.current.children.length; x++) {
            this.dayRef.current.children[x].addEventListener('click',this.chooseDay)
        }
        
    }
    
    chooseDay(e) {
      
         if (e.target.classList.contains('checked')) {
                this.setState({ showDayArr: this.setTimeForToday() })
            }else{
             this.setState({ showDayArr: this.setTimeForOtherDays()}) 
            }
            for (let c = 0; c < this.timeRef.current.children.length; c++) {
            this.timeRef.current.children[c].addEventListener('click', this.chooseValue)

        }
    }

    chooseValue(e){
       
        let parent = e.target.parentNode.children
            for (let y = 0; y < parent.length; y++) {
                parent[y].classList.remove('focusOn')
            }
            e.target.classList.toggle('focusOn')
            if (e.target.parentNode.classList.contains('time')) {
                this.setState({time: e.target.innerHTML})
               
            } else if (e.target.parentNode.classList.contains('ticketType')) {
                this.setState({ type: e.target.innerHTML })
                
                
            } else if (e.target.parentNode.classList.contains('chooseDay')) {
                this.setState({ day: e.target.innerHTML })
                
            }
            this.checkAllFillValues()
    }

    checkAllFillValues = () => {
        if (this.state.time && this.state.day && this.state.type !== null) {
            return ( 
                <Link to={{
                    pathname: '/hall',
                    state: {
                    }
                }} > 
                    <div className='goToCinemaHall'><i className="material-icons">arrow_forward</i></div>
                </Link>
            )
    }
}

    componentDidMount() {
       this.setDay()
       this.chooseOption()
       this.dayRef.current.children[0].classList.add('focusOn')
       this.dayRef.current.children[0].classList.add('checked')
       this.setState({ day: this.state.days[new Date().getDay()]})
        for (let c = 0; c < this.timeRef.current.children.length; c++) {
            this.timeRef.current.children[c].addEventListener('click', this.chooseValue)

        }

        M.AutoInit();
        
    }

    setDay = () => {
        let el = []
        
        for (let i = new Date().getDay(); i < this.state.days.length; i++) {
               el.push(<p key={i}>{this.state.days[i]}</p>)
        }
        for (let y = 0; y < new Date().getDay(); y++) {
            el.push(<p key={y}>{this.state.days[y]}</p>)
        }
        
        return el
    }



    setTimeForToday() {
        const d = new Date();
        const hours = d.getHours() - 1;
        const minutes = d.getMinutes();
        const timeArr = [];
        let hourMore = hours + 1
        
        
        if (minutes > 15) {
            for (let i = 0; i < 22 - hours; i++) {
                hourMore = hourMore + 1
                timeArr.push(<p key={i}>{hourMore}:15</p>)
            }
        }else {
            for (let i = 0; i < 22 - hours; i++) {
                timeArr.push(<p key={i}>{hourMore}:15</p>)
                hourMore = hourMore + 1
            }
        }
        return timeArr
    }

    setTimeForOtherDays() {
        const timeArr =[];
        for (let i = 8; i < 24 ; i++) {
            timeArr.push(<p key={i}>{i}:15</p>)
        }
        
        return timeArr
    }

//     for(let i = 0; i <standartHour + 1; i++) {
//     standartHour = standartHour + 1;
//     timeArr.push(<p>{standartHour} + ":" + "15"</p>)
// }
   

    render() {
    return (
        <section>
        <div id="slide-out" className="sidenav sidebar">
            <div ref={this.typeRef} className="ticketType">
                <p className="focusOn">All</p>
                <p>2D</p>
                <p>3D</p>
            </div>
            <div ref={this.dayRef} className="chooseDay">
                {this.setDay()}
            </div>
            <div ref={this.timeRef} className="time">
                {this.state.showDayArr}
            </div>
           {this.checkAllFillValues()}
        </div>
            <div className="buyTicket sidenav-trigger" data-target="slide-out" >
                <i className="material-icons">credit_card</i>
            </div>
            <script>
             
    </script>
        </section>
    )
    }
}

export default SideBar
