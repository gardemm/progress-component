/* eslint-disable implicit-arrow-linebreak */
export const createAction = (type, fn = e => e) => payload => ({ type, payload: fn(payload) })

export const createReducer = ({ initialState = {}, actions = {} }) =>
    (state = initialState, { type, payload }) => {
        if (!actions[type]) return state
        return actions[type](state, payload)
    }
