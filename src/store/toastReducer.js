const defaultState = {
    toasts: []
}

export const toastReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "addToast":
            return {...state, toasts: [...state.toasts, action.payload]}
        case "removeToast":
            return {...state, toasts: state.toasts.filter(toast => toast.id !== action.payload)}
        case "changePage":
            const emptyToasts = []
            return {...state, toasts: emptyToasts}
        default:
            return state
    }
}