import React from 'react'
import PropTypes from 'prop-types'

let GoogleList = ({ googleArray }) => {
    return (
        <div>
            {googleArray.isFetching &&
                <h2>Loading.........</h2>
            }
            {
                !googleArray.isFetching && googleArray.data.length === 0 &&
                <span>Search is Empty</span>
            }
            {
                !googleArray.isFetching && googleArray.data.length !== 0 &&
                <span> {JSON.stringify(googleArray)}</span>
            }
        </div>
    )
}
GoogleList.propTypes = {
    googleArray: PropTypes.object.isRequired
}
export default GoogleList