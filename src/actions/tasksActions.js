import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
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

export const addTaskAction = (taskTitle) => (dispatch, getState) => {
    const { tasks: { list } } = getState()

    const task = {
        id: list.length + 1,
        title: taskTitle,
        complete: false,
    }

    const newTaskList = list.concat(task)

    dispatch(createAction(ADD_TASK)({
        list: newTaskList,
    }))
}


export const deleteTaskAction = (taskId) => (dispatch, getState) => {
    const { tasks: { list } } = getState()

    const newTaskList = list.filter(task => task.id !== taskId)

    dispatch(createAction(DELETE_TASK)({
        list: newTaskList,
    }))
}
