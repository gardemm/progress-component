import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
import { createAction } from '../helpers/reduxHelper'

export const toggleTaskAction = (taskId) => (dispatch, getState) => {
    const { tasks: { list } } = getState()

    const newListObj = { list }
    for (let i = 0; i < list.length; i++) {
        if (list[i].id === taskId) {
            if (!list[i].complete) { // задача не завершена, завершаем
                // первый элемент с остальными не активными
                if (i === 0 && !list[i + 1].complete && !list[i].complete) {
                    // активируем
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }
                // если задача активировать, то если текущий элемент отрицательный,
                // а предыдущий положительный, то активируем в плюс/
                if (i > 0 && list[i - 1].complete && !list[i].complete) {
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }
            } else {
                // если задача отменить, то если следующий элемент отрицательный,
                // а текущий положительный, то сбрасываем

                // если не последний, то проверяем как на условии выше
                if (i < list.length - 1 && list[i].complete && !list[i + 1].complete) {
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }

                if (i === list.length - 1 && list[i].complete) {
                    newListObj.list[i].complete = !newListObj.list[i].complete
                }
            }

            // если задача отменить, то если следующий элемент отрицательный,
            // а этот положительный, то сбрасываем
        }
    }
    // const newTaskList = list.map(task => {
    //     const lastItemWasCompleted = true
    //
    //     if (lastItemWasCompleted) {
    //
    //     }
    //
    //     return (task.id === taskId)
    //         ? { ...task, complete: !task.complete }
    //         : task
    // })

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
