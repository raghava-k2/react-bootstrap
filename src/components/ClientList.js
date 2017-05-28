import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
let ClientList = ({ clientArray }) => {
    return (
        <div>
            <ListGroup > {
                clientArray.map(obj =>
                    <ListGroupItem>{obj.clientId}</ListGroupItem>
                )
            }
            </ListGroup>
        </div>
    )
}
ClientList.propTypes = {
    clientArray: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        clientId: PropTypes.string.isRequired
    }).isRequired).isRequired
}
export default ClientList