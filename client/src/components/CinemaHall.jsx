import React from 'react';


//row__seat--reserved  ---- class to show reserved place
class CinemaHall extends React.Component {
    constructor(props) {
    super(props)
    //const ticketPrice = 0;
    this.state = {
        price: 10
    }
    }
   
    
    chooseSeat = (e) => {
        console.log(e.target.className)
        if (e.target.className === "row__seat--reserved"){
            return
        }else {
            e.target.classList.toggle("row__seat--selected");
            //this.ticketPrice + 10
            // this.setState({price: +10 })    
        }
    }

    render() {
        return (
            <div className="plan">
                <h3 className="plan__title">Seating Plan</h3>
                <div className="rows rows--mini">
                    <div className="row">
                        <div className="row__seat tooltip row__seat--reserved" onClick={this.chooseSeat} data-tooltip="A1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="A18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="B18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="C18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="D18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="E18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="F18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="G18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="H18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="I18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="J18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="K18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="L18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="M18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="N18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="O18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="P18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="Q18"></div>
                    </div>
                    <div className="row">
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R1"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R2"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R3"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R4"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R5"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R6"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R7"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R8"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R9"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R10"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R11"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R12"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R13"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R14"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R15"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R16"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R17"></div>
                        <div className="row__seat tooltip" onClick={this.chooseSeat} data-tooltip="R18"></div>
                    </div>
                </div>
                
			<ul className="legend">
                    <li className="legend__item legend__item--free">Free</li>
                    <li className="legend__item legend__item--reserved">Reserved</li>
                    <li className="legend__item legend__item--selected">Selected</li>
                </ul>
                <div className="price">Price: {this.state.price}$</div>
                <button className="action action--buy">Buy tickets</button>
            </div>
        )
    }
}

export default CinemaHall