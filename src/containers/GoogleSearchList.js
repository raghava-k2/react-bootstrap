import { connect } from 'react-redux'
import GoogleList from '../components/GoogleList'

const mapStateToProps = (state) => {
    return {
        googleArray: state.googleSearch
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const GoogleSearchList = connect(mapStateToProps, mapDispatchToProps)(GoogleList)
export default GoogleSearchList