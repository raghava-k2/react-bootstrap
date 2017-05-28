import { connect } from 'react-redux'
import searchClientAction from '../actions'
import ClientSearchForm from '../components/ClientSearchForm'

const mapStateToProps = (state) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addClient: (value) => {
            dispatch(searchClientAction(value))
        }
    }
}

const ClientSearch = connect(mapStateToProps, mapDispatchToProps)(ClientSearchForm)
export default ClientSearch