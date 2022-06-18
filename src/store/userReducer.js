const defaultState = {
    userName: "secret user",
}


export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "changeUser":
            return {...state, userName: action.payload}
        default:
            return state
    }

}