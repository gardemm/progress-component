import { TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
import { createAction } from '../helpers/actionsHelper'

export const toggleTask = (task) => (dispatch) => {
    dispatch(createAction(TOGGLE_TASK)({
        task,
    }))
}
