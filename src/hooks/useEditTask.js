import {useDispatch} from "react-redux";
import useToast from "./useToast";
import {useHistory} from "react-router-dom";

const UseEditTask = () => {

    const dispatch = useDispatch()
    const toast = useToast()
    const history = useHistory()

    return (inputName, previousTask, inputDescription) => {

        if (inputName !== previousTask.name && inputDescription !== previousTask.description) {
            dispatch({type: "changeName", payload: [previousTask.id, inputName]})
            dispatch({type: "changeDesc", payload: [previousTask.id, inputDescription]})
            history.push('/tasks')
            toast("Success", "Task edited successfully", 3000)
        }
        if (inputName !== previousTask.name && inputDescription === previousTask.description) {
            dispatch({type: "changeName", payload: [previousTask.id, inputName]})
            history.push('/tasks')
            toast("Success", "Name for task edited successfully", 3000)
        }
        if (inputName === previousTask.name && inputDescription !== previousTask.description) {
            dispatch({type: "changeDesc", payload: [previousTask.id, inputDescription]})
            history.push('/tasks')
            toast("Success", "Description for task edited successfully", 3000)
        }
    }
};

export default UseEditTask;






