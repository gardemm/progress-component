import { TOGGLE_TASK } from '../constants/actions/tasksActionsNames'
import { createAction } from '../helpers/actionsHelper'

export const toggleTaskAction = (task) => (dispatch) => {
    console.log('click', task)
    dispatch(createAction(TOGGLE_TASK)({
        task,
    }))
}
