import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import reducer, { tasksInitialState } from './tasksReducer'
import { addTaskAction } from '../actions/tasksActions'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(tasksInitialState)
    })
})

describe('tasks actions', () => {
    it('ADD_TASKS should add new task in the end of task list', () => {
        const tasksMockList = tasksInitialState.list.splice(0, 2)
        const newTaskName = 'new task'

        const newTask = {
            id: tasksMockList[tasksMockList.length - 1].id + 1,
            title: newTaskName,
            complete: false,
        }
        const resultState = { tasks: { list: tasksMockList.concat(newTask) } }

        const store = mockStore({ tasks: { list: tasksMockList } })
        store.dispatch(addTaskAction(newTaskName))
        setTimeout(() => expect(store.getState()).toEqual(resultState))
    })
})
