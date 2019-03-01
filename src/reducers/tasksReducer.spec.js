// @flow
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { tasksInitialState } from './tasksReducer'
import { addTaskAction, deleteTaskAction, toggleTaskAction } from '../actions/tasksActions'
import type { taskType } from './tasksReducer'
import expect from '../helpers/expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// reducer
describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(tasksInitialState)
    })
})

// actions
describe('tasks actions', () => {
    it('ADD_TASKS: should add a new task at the end of list', async () => {
        const tasksList: Array<taskType> = []
        const newTaskName = 'new task'
        const newTask: taskType = {
            id: tasksList.length + 1,
            title: newTaskName,
            complete: false,
        }
        const resultList: Array<taskType> = tasksList.concat(newTask)
        const store = mockStore({ tasks: { list: tasksList } })
        const result = await store.dispatch(addTaskAction(newTaskName))
        expect(result.payload.list).toEqual(resultList)
    })


    it('DELETE_TASKS: should delete the task by id from list', async () => {
        const tasksList: Array<taskType> = [{
            id: 1,
            title: 'one',
            complete: false,
        }, {
            id: 2,
            title: 'two',
            complete: false,
        },
        {
            id: 3,
            title: 'three',
            complete: false,
        }]
        const resultList = [].concat(tasksList.slice(0, 1), tasksList.slice(2, 3))
        const store = mockStore({
            tasks: {
                hasError: false,
                list: tasksList,
            },
        })
        const result = await store.dispatch(deleteTaskAction(2))
        expect(result.payload.list).toEqual(resultList)
    })

    it('TOGGLE_TASK: should activate only next task, or disable all previous tasks', async () => {
        const tasksList: Array<taskType> = tasksInitialState.list.slice()

        expect(tasksList[0].complete).toEqual(true)
        expect(tasksList[1].complete).toEqual(true)
        expect(tasksList[2].complete).toEqual(false)
        expect(tasksList[3].complete).toEqual(false)
        expect(tasksList[4].complete).toEqual(false)

        const store = mockStore({ tasks: { list: tasksList } })

        const toggle1 = await store.dispatch(toggleTaskAction(tasksList[0].id))
        expect(toggle1.payload.list[0].complete).toEqual(false)
        expect(toggle1.payload.list[1].complete).toEqual(false)

        const toggle2 = await store.dispatch(toggleTaskAction(tasksList[0].id))
        expect(toggle2.payload.list[0].complete).toEqual(true)

        const toggle2again = await store.dispatch(toggleTaskAction(tasksList[1].id))
        expect(toggle2again.payload.list[1].complete).toEqual(true)

        const toggleLastItem = await store.dispatch(toggleTaskAction(tasksList[4].id))
        expect(toggleLastItem.payload.list[4].complete).toEqual(false)

        const toggleOutOfRange = await store.dispatch(toggleTaskAction(999))
        expect(toggleOutOfRange.payload.list).toEqual(store.getState().tasks.list)

        const toggleUndefined = await store.dispatch(toggleTaskAction(undefined))
        expect(toggleUndefined.payload.list).toEqual(store.getState().tasks.list)
    })
})


describe('There\'s a minimum step of two and a maximum of five', () => {
    it('The initialState task list count is between two and five tasks', () => {
        // $FlowFixMe
        expect(tasksInitialState.list.length).toBeWithinRange(2, 5, 1)
    })
})


/*
You can't jump over a step
Write a simple test to check if the state has changed after click
* */
