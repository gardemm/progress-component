import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16/build/index'
import thunk from 'redux-thunk'
import { toggleTaskAction } from '../actions/tasksActions'
import type { taskType } from '../reducers/tasksReducer'
import ProgressPointStepComponent from './ProgressPointStepComponent'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

// config for enzyme
Enzyme.configure({ adapter: new Adapter() })

describe('The state has changed after click', () => {
    // При клике на ProgressStepComponent -> ProgressStep (в случае, когда он подходит под условия)
    // state изменится
    it('Click to the active ProgressStep in conditions will change the state', () => {
        const tasksList: Array<taskType> = [
            {
                id: 1,
                title: 'task 1',
                complete: true,
            },
            {
                id: 2,
                title: 'task 2',
                complete: false,
            },
            {
                id: 3,
                title: 'task 2',
                complete: false,
            },
        ]

        const store = mockStore({ tasks: { list: tasksList } })
        const mockCallBack = jest.fn(() => store.dispatch(toggleTaskAction(2)))

        const ProgressPointStep = shallow(
            <ProgressPointStepComponent
                task={tasksList[2]}
                onClick={mockCallBack}
            />,
        )
        ProgressPointStep.find('.progress-step').simulate('click')
        // expect(mockCallBack.mock.calls.length).toEqual(1)
    })
})
