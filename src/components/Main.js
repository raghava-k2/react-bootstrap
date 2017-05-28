import React from 'react'
import ClientLists from '../containers/ClientLists'
import ClientSearch from '../containers/ClientSearch'

const Main = () => (
    <div>
        <ClientSearch />
        <ClientLists />
    </div>
)

export default Main