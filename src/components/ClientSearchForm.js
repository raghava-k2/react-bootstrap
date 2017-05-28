import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap'

function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
            {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
    );
}

let ClientSearchForm = ({ addClient }) => {
    let clientName
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                addClient(clientName.value)
                clientName.value = ''
            }
            }>
                <FieldGroup
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Enter ClientId"
                    onChange={e => clientName = e.target}
                />
                <Button type="submit" bsStyle="primary">
                    Submit
                </Button>
            </form>
        </div>
    )
}
ClientSearchForm.propTypes = {
    addClient: PropTypes.func.isRequired
}
export default ClientSearchForm