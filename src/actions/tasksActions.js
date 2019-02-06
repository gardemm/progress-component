import { TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
import { createAction } from '../helpers/reduxHelper'

export const toggleTaskAction = (taskId) => (dispatch, getState) => {
    const { tasks: { list } } = getState()

    const newTaskList = list.map(task => ((task.id === taskId)
        ? { ...task, complete: !task.complete }
        : task))

    dispatch(createAction(TOGGLE_TASK)({
        list: newTaskList,
    }))
}
