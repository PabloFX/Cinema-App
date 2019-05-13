import React from 'react';

class Seats extends React.Component {
    state = {
        price: 10,
    }

    settingTicketPrice(e) {
        if (e.target.classList.contains("row__seat--selected")){
            this.setState({ price: this.state.price + 10 })
            this.props.callBackFromParent(this.state.price)
        }else {
            this.setState({ price: this.state.price - 10 })
            this.props.callBackFromParent(this.state.price)
        }
        
    }

    chooseSeat = (e) => {
        
        if (e.target.classList.contains("row__seat--reserved")) {
            return
        } else {
            e.target.classList.toggle("row__seat--selected");
            this.settingTicketPrice(e)
        }
    }

    createRow = () => {
        const rows = []
        const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'K', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R']
        for (let y = 0; y < 18; y++) {
            rows.push(
                <div
                    className="row__seat tooltip"
                    onClick={this.chooseSeat}
                    data-tooltip={`${letters[y]}${[y]}`}
                    key={`${letters[y]}${[y]}`}>
                </div>
            )
        }
            return rows
    }

    createElement = () => {
        const items = []
        for (let i = 0; i < 18; i++) {
            items.push(
            <div className="row" key={`Row${[i]}`}>
            {this.createRow()}
             </div>)
        }
        return items
    }

render() {
    
    return (
        <div>
        {this.createElement()}
        </div>
    )
}
}

export default Seats
// /* <div className="row__seat tooltip row__seat--reserved" onClick={this.chooseSeat} data-tooltip="A1"></div>
    