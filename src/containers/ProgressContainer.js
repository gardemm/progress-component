import { connect } from 'react-redux'
import ProgressComponent from '../components/ProgressComponent'


function mapStateToProps(state) {
    return {
        tasks: state.tasks,
    }
}


export default connect(mapStateToProps)(ProgressComponent)
