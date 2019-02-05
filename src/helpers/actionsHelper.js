export const createAction = (type, fn = e => e) => payload => ({ type, payload: fn(payload) })
