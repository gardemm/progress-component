// @flow
import { createReducer, updateProp } from '../helpers/reduxHelper'
import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from '../constants/actions/tasksActionsNames'

// Types
export type taskType = {
    id: number,
    title: string,
    complete: boolean,
}

export type tasksInitialStateType = {
    list: Array<taskType>,
    hasError: boolean
}

export type tasksImportedStateType = {
  tasks: tasksInitialStateType
}

// State
export const tasksInitialState: tasksInitialStateType = {
    hasError: false,
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
        [TOGGLE_TASK]: updateProp('list'),
        [ADD_TASK]: updateProp('list'),
        [DELETE_TASK]: updateProp('list'),
    },
})
