/* eslint-disable implicit-arrow-linebreak */
export const createAction = (type, fn = e => e) => payload => ({ type, payload: fn(payload) })

export const createReducer = ({ initialState = {}, actions = {} }) =>
    (state = initialState, { type, payload }) => {
        if (!actions[type]) return state
        return actions[type](state, payload)
    }

export const toggleProp = (name) => (state) => ({
    ...state,
    [name]: !state[name],
})

export const updateProp = (name) => (state, payload) => ({
    ...state,
    [name]: payload[name],
})
