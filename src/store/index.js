import {combineReducers, createStore} from "redux";
import {userReducer} from "./userReducer";
import {taskReducer} from "./taskReducer";
import {toastReducer} from "./toastReducer";

const rootReducer = combineReducers({
    userName: userReducer,
    tasks: taskReducer,
    toasts: toastReducer
})

export const store = createStore(rootReducer)