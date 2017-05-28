import { connect } from 'react-redux'
import ClientList from '../components/ClientList'

const mapStateToProps = (state) => {
    return {
        clientArray: state.searchClientReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const ClientLists = connect(mapStateToProps, mapDispatchToProps)(ClientList)
export default ClientLists