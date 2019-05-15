import React from 'react'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Say', 'Sun'],
            day: null,
            type: null,
            time: null
        }
        this.typeRef = React.createRef();
        this.dayRef = React.createRef();
        this.timeRef = React.createRef();
    }
    
    chooseOption(ref) {
        let divP = ref.current.children
        
        for (let i = 0; i < divP.length; i++) {
            divP[i].addEventListener('click', function (e) {
                for (let y = 0; y < divP.length; y++) {
                    divP[y].classList.remove('focusOn')
                }
                e.target.classList.toggle('focusOn')
                if (ref.current.classList.contains('time')) {
                    this.setState({time: e.target.firstChild})
                    console.log(this.state.time)
                }
                console.log(ref.current)
            })
        }
    }

    componentDidMount() {
       this.chooseOption(this.typeRef)
        this.chooseOption(this.dayRef)
        this.chooseOption(this.timeRef)
    }

    setDay() {
        let el = []
        
        for (let i = new Date().getDay(); i < this.state.days.length; i++) {
                
               el.push(<p key={i}>{this.state.days[i]}</p>)
               
        }
        return el
    }
   

    render() {
    return (
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
                <p>09:15</p>
                <p>10:15</p>
                <p>11:15</p>
                <p>12:15</p>
                <p>13:15</p>
                <p>14:15</p>
                <p>15:15</p>
                <p>16:15</p>
                <p>17:15</p>
                <p>18:15</p>
                <p>19:15</p>
                <p>20:15</p>
                <p>21:15</p>
                <p>22:15</p>
            </div>
            <div className='goToCinemaHall'><i className="material-icons">arrow_forward</i></div>
        </div>
    )
    }
}

export default SideBar
