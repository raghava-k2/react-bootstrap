import React from 'react'
import PropTypes from 'prop-types'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import './ClientList.css'
let ClientList = ({ clientArray, search }) => {
    return (
        <div className='listContainer'>
            <ListGroup > {
                clientArray.map((obj, i) =>
                    <ListGroupItem onClick={
                        e => {
                            e.preventDefault()
                            search(e.target.innerText)
                        }
                    } key={i}>{obj.clientId}</ListGroupItem>
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
    }).isRequired).isRequired,
    search: PropTypes.func.isRequired
}
export default ClientList