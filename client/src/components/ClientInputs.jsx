import React from 'react';
import Cleave from 'cleave.js/react';
import CleavePhone from 'cleave.js/dist/addons/cleave-phone.i18n';
import { TextInput,Button,Icon } from 'react-materialize';

class ClientInputs extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            creditCardRawValue: '',
            phoneRawValue: '',
            customRawValue: ''
        };

        this.onCreditCardChange = this.onCreditCardChange.bind(this);
        this.onCreditCardFocus = this.onCreditCardFocus.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);

    }

    onCreditCardChange(event) {
        this.setState({ creditCardRawValue: event.target.rawValue });
    }

    onCreditCardFocus(event) {
        // update some state
    }

    onPhoneChange(event) {
        this.setState({ phoneRawValue: event.target.rawValue });
    }

    

    render() {
        return (
            <div className="formHolder">
                <h3>Your personal information</h3>
                <form className="inputsHolder">
                    <TextInput label="Name" />
                    <TextInput label="Surname" />
                    <TextInput email validate label="Email" />
                    <Cleave className="css-phone inputs" value="+48" options={{ phone: true, phoneRegionCode: 'PL' }}
                        onChange={this.onPhoneChange} />

                <Cleave className="inputs" label="Surname" placeholder="Enter your credit card number" options={{ creditCard: true }}
                    onChange={this.onCreditCardChange}
                    onFocus={this.onCreditCardFocus} />

            <Button type="submit" waves="light">
                Submit
            <Icon right>
                send
                </Icon>
                </Button>
         
                    
                </form>
            </div>
        );
    }
}

export default ClientInputs