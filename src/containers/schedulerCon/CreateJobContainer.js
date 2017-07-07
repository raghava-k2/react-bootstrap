import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {showDialog} from '../../actions'
import CreateJob from '../../components/schedulerCom/CreateJob'

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {
        showCreateJobDialog: (status) => {
            dispatch(showDialog(status))
        }
    }
}

const CreateJobContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateJob))
export default CreateJobContainer