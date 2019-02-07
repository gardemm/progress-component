// @flow
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { tasksInitialState } from './tasksReducer'
import { addTaskAction, deleteTaskAction } from '../actions/tasksActions'
import type { tasksStateType, taskType } from './tasksReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(tasksInitialState)
    })

    it('There\'s a minimum step of two and a maximum of five', () => {
        // todo
    })
})

describe('tasks actions', () => {
    it('ADD_TASKS should add a new task at the end list', () => {
        const tasksMockList: Array<taskType> = []
        const newTaskName = 'new task'

        const newTask: taskType = {
            id: tasksMockList.length + 1,
            title: newTaskName,
            complete: false,
        }

        const resultState: tasksStateType = {
            tasks: {
                list: tasksMockList.concat(newTask),
                hasError: false,
            },
        }

        const store = mockStore({ tasks: { list: tasksMockList } })
        store.dispatch(addTaskAction(newTaskName))
        setTimeout(() => expect(store.getState()).toEqual(resultState))
    })

    it('DELETE_TASKS should delete the task by id from list', () => {
        const tasksMockList: Array<taskType> = [{
            id: 1,
            title: 'one',
            complete: false,
        }, {
            id: 2,
            title: 'two',
            complete: false,
        }]

        const deleteTaskId = 1

        const resultState: tasksStateType = {
            tasks: {
                list: tasksMockList.splice(1, 1),
                hasError: false,
            },
        }

        const store = mockStore({ tasks: { list: tasksMockList } })
        store.dispatch(deleteTaskAction(deleteTaskId))
        setTimeout(() => expect(store.getState()).toEqual(resultState))
    })
})

/*
Number of steps is dynamic
There's a minimum step of two and a maximum of five
You can't jump over a step
Write a simple test to check if the state has changed after click
* */
