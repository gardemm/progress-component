const tasks = (state = [
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
], action) => {
    switch (action.type) {
    case 'TOGGLE_TASK':
        return state.map(task => ((task.id === action.id)
            ? { ...task, complete: !task.complete }
            : task))
    default:
        return state
    }
}

export default tasks
