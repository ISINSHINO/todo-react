import {useDispatch} from "react-redux";

const UseTask = () => {

    const dispatch = useDispatch()

    const options = {month: 'long', day: 'numeric'};
    const today = new Date();

    return (name) => {
        const id = Date.now()
        const created = today.toLocaleDateString("en-US", options)
        dispatch({type: "addTask", payload:
                {name, id, isDone: false, created, description: '', isExpanded: false}})
    }
};

export default UseTask;


