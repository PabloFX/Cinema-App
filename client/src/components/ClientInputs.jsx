import React from 'react';

import { TextInput,Button,Icon } from 'react-materialize';

class ClientInputs extends React.Component {
   

    render() {
        return (
            <div className="formHolder">
                <h3>Your personal information</h3>
                <form className="inputsHolder">
                    <TextInput label="Name" />
                    <TextInput label="Surname" />
                    <TextInput email validate label="Email" />
                    <TextInput validate label="Phone" />
                    <TextInput label="Credit card number" />

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