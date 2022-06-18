import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Task = ({task}) => {

    const dispatch = useDispatch();
    const history = useHistory()

    const [expanded, setExpanded] = useState(task.isExpanded);

    const tasksCheck = useSelector(state => state.tasks.tasks)

    const checkStatus = (id) => {
        let exactTask = tasksCheck.filter(task => task.id === id)
        return exactTask[0]?.isDone
    }

    const checkExpanded = () => {
        tasksCheck.map(taskItem => taskItem.id === task.id? setExpanded(taskItem.isExpanded) : null)
    }

    useEffect(() => {
        checkExpanded()
    }, [tasksCheck])

    const handleComplete = () => {
        dispatch({type: "changeStatus", payload: [task.id, !checkStatus(task.id)]})
    }

    const deleteTask = (task) => {
        dispatch({type: "removeTask", payload: task.id})
    }

    const goToEditing = () => {
        history.push(`/task/${task.id}`)
        dispatch({type: "changePage", payload: ''})
    }

    const expand = () => {
        dispatch({type: "expandDesc", payload: [task.id, !expanded]})
        setExpanded(!expanded)
    }

    return (
        <>
            <div className={`task ${expanded? "expanded-task" : ""}`}>
                <div className="checkbox-name">
                    <input type="checkbox" checked={checkStatus(task.id)}  value="complete" onChange={handleComplete}/>
                    <p
                        onClick={handleComplete}
                        style={checkStatus(task.id)? {textDecoration: "line-through"} : {textDecoration: "none"}}>{task.name}</p>
                </div>
                <div className="edit-delete">
                    <img className={` ${expanded? "expanded-button" : "exp"}`} onClick={expand} src={require('../assets/expand-button.png')} alt="edit"/>
                    <img className="edit" onClick={goToEditing}  src={require('../assets/pencil-gray.png')} alt="edit"/>
                    <img className="delete" onClick={() => deleteTask(task)} src={require('../assets/close-gray.png')} alt="del"/>
                </div>
            </div>
            <div className={`task-description ${expanded? "" : "description-hidden"}`}>
                {task.description.length > 0?
                    <p>{task.description}</p>
                    :
                    <p>You provided no description</p>
                }
            </div>
        </>
    );
};

export default Task;