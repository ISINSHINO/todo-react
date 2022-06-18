import {useDispatch} from "react-redux";

const UseToast = () => {
    const dispatch = useDispatch()

    return (type, message, delay) => {
        const id = Date.now()
        dispatch({type: "addToast", payload: {type, message, id}})
        setTimeout(() => {
            dispatch({type: "removeToast", payload: id})
        }, delay)
    }
};

export default UseToast;