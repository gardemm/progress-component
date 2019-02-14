// @flow
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { tasksInitialState } from './tasksReducer'
import { addTaskAction, deleteTaskAction } from '../actions/tasksActions'
import type { tasksStateType, taskType } from './tasksReducer'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

expect.extend({
    toBeWithinRange(received, floor, ceiling = '') {
        const pass = received >= floor && received <= ceiling
        if (pass) {
            return {
                message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            }
        }
        return {
            message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
            pass: false,
        }
    },
})

// reducer
describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(tasksInitialState)
    })
})

// actions
describe('tasks actions', () => {
    it('ADD_TASKS: should add a new task at the end of list', () => {
        const tasksList: Array<taskType> = []
        const newTaskName = 'new task'
        const newTask: taskType = {
            id: tasksList.length + 1,
            title: newTaskName,
            complete: false,
        }
        const resultState: tasksStateType = {
            tasks: {
                list: tasksList.concat(newTask),
                hasError: false,
            },
        }
        const store = mockStore({ tasks: { list: tasksList } })
        store.dispatch(addTaskAction(newTaskName))
        setTimeout(() => expect(store.getState()).toEqual(resultState))
    })


    it('DELETE_TASKS: should delete the task by id from list', () => {
        const tasksList: Array<taskType> = [{
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
                list: tasksList.splice(1, 1),
                hasError: false,
            },
        }
        const store = mockStore({ tasks: { list: tasksList } })
        store.dispatch(deleteTaskAction(deleteTaskId))
        setTimeout(() => expect(store.getState()).toEqual(resultState))
    })
})

describe('There\'s a minimum step of two and a maximum of five', () => {
    it('The initialState task list count is between two and five tasks', () => {
        // $FlowFixMe
        expect(tasksInitialState.list.length).toBeWithinRange(2, 5, 1)
    })
})


/*
Number of steps is dynamic
There's a minimum step of two and a maximum of five
You can't jump over a step
Write a simple test to check if the state has changed after click
* */
