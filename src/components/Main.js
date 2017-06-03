import React from 'react'
import ClientLists from '../containers/ClientLists'
import ClientSearch from '../containers/ClientSearch'
import GoogleSearchList from '../containers/GoogleSearchList'

const Main = () => (
    <div>
        <ClientSearch />
        <ClientLists />
        <GoogleSearchList />
    </div>
)

export default Main