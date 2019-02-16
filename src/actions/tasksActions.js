import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
import { createAction } from '../helpers/reduxHelper'


export const toggleTaskAction = (taskId) => (dispatch, getState) => {
    const { tasks: { list } } = getState()
    const newListObj = { list }
    let isActivateNextTasks = false // обнуляем завершение всех следующих тасков

    for (let i = 0; i < list.length; i++) {
        if (isActivateNextTasks) {
            newListObj.list[i].complete = false
        } else if (list[i].id === taskId) { // попали в id клика
            if (!list[i].complete) { // задача не завершена, завершаем
                // первый элемент с остальными не активными
                if (i === 0 && !list[i + 1].complete && !list[i].complete) {
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }
                // если задача активировать, то если текущий элемент отрицательный,
                // а предыдущий положительный, то активируем в плюс
                if (i > 0 && list[i - 1].complete && !list[i].complete) {
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }
            } else { // задача завершена
                newListObj.list[i].complete = false
                isActivateNextTasks = true
            }
        }
    }

    return dispatch(createAction(TOGGLE_TASK)({
        ...newListObj,
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

    return dispatch(createAction(ADD_TASK)({
        list: newTaskList,
    }))
}


export const deleteTaskAction = (taskId) => (dispatch, getState) => {
    const { tasks: { list } } = getState()

    const newTaskList = list.filter(task => task.id !== taskId)

    return dispatch(createAction(DELETE_TASK)({
        list: newTaskList,
    }))
}
