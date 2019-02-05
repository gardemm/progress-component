import React from 'react'
import { connect } from 'react-redux'
import ProgressComponent from '../components/ProgressComponent'


function mapStateToProps(state) {
    return {
        tasks: state.tasks,
    }
}

class ProgressContainer extends React.Component {
    toggleTask = (id) => (e) => {
        console.log(id, e)
    }

    render() {
        const { tasks } = this.props
        return (<ProgressComponent tasks={tasks} onClick={this.toggleTask} />)
    }
}


export default connect(mapStateToProps)(ProgressContainer)
