// @flow
import React from 'react'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import reducer, { tasksInitialState } from './tasksReducer'
import { addTaskAction, deleteTaskAction } from '../actions/tasksActions'
import type { tasksStateType, taskType } from './tasksReducer'
import expect from '../helpers/expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// config for enzyme
Enzyme.configure({ adapter: new Adapter() })


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


describe('You can\'t jump over a step', () => {
    it('Test click event', () => {
        const mockCallBack = jest.fn()

        const button = shallow((<button type="button" onClick={mockCallBack}>Ok!</button>))
        button.find('button').simulate('click')
        expect(mockCallBack.mock.calls.length).toEqual(1)
    })

    // it('should activate only next step by a click or do nothing', () => {
    //     expect(true).toBe(false)
    //     // expect(store.getState()).toEqual(resultState)
    // })
})


/*
You can't jump over a step
Write a simple test to check if the state has changed after click
* */
