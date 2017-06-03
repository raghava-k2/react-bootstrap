import { connect } from 'react-redux'
import ClientList from '../components/ClientList'
import { fetchResults } from '../actions'

const mapStateToProps = (state) => {
    return {
        clientArray: state.searchClientReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        search: (searchValue) => {
            dispatch(fetchResults(searchValue))
        }
    }
}

const ClientLists = connect(mapStateToProps, mapDispatchToProps)(ClientList)
export default ClientLists