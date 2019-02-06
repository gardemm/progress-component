import { createReducer } from '../helpers/reduxHelper'
import { ADD_TASK, TOGGLE_TASK } from '../constants/actions/tasksActionsNames'

export const tasksInitialState = {
    list: [
        {
            id: 1,
            title: 'Protect',
            complete: true,
        },
        {
            id: 2,
            title: 'Compile',
            complete: true,
        },
        {
            id: 3,
            title: 'Discover',
            complete: false,
        },
        {
            id: 4,
            title: 'Update',
            complete: false,
        },
        {
            id: 5,
            title: 'Finish more results',
            complete: false,
        },
    ],
}

export default createReducer({
    initialState: tasksInitialState,
    actions: {
        [TOGGLE_TASK]: (state, payload) => ({
            ...state,
            list: payload.list,
        }),
        [ADD_TASK]: (state, payload) => ({
            ...state,
            list: payload.list,
        }),
    },
})
