import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Scheduler from '../../components/schedulerCom/Scheduler'

const mapStateToProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => {
    return {}
}

const SchedulerContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Scheduler))
export default SchedulerContainer