import React from 'react'
import { connect } from 'react-redux'
import ProgressComponent from '../components/ProgressComponent'
import { toggleTaskAction } from '../actions/tasksActions'


const mapStateToProps = state => ({
    tasks: state.tasks,
})

const mapDispatchToProps = dispatch => ({
    toggleTask: (task) => dispatch(toggleTaskAction(task)),
})

class ProgressContainer extends React.Component {
    toggleTask = (id) => () => {
        const { toggleTask } = this.props
        toggleTask(id)
    }

    render() {
        const { tasks } = this.props
        return (<ProgressComponent tasks={tasks} onClick={this.toggleTask} />)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainer)
