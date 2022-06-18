const defaultState = {
    tasks: []
}


export const taskReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "addTask":
            return {...state, tasks: [...state.tasks, action.payload]}
        case "removeTask":
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        case "changeStatus":
            return {...state, tasks: state.tasks.map(task =>
                    task.id === action.payload[0] ? {...task, isDone: action.payload[1]} : task
                )}
        case "changeName":
            return {...state, tasks: state.tasks.map(task =>
                    task.id === action.payload[0] ? {...task, name: action.payload[1]} : task
                )}
        case "changeDesc":
            return {...state, tasks: state.tasks.map(task =>
                    task.id === action.payload[0] ? {...task, description: action.payload[1]} : task
                )}
        case "expandDesc":
            if (action.payload[1] === false) {
                return {...state, tasks: state.tasks.map(task =>
                        task.id === action.payload[0] ? {...task, isExpanded: action.payload[1]} : task
                    )}
            } else {
                return {...state, tasks: state.tasks.map(task =>
                        task.id === action.payload[0] ? {...task, isExpanded: action.payload[1]} : {...task, isExpanded: false}
                    )}
            }
        default:
            return state
    }
}