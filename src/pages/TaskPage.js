import React, {useState} from 'react';
import Waves from "../components/Waves";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import Toasts from "../components/Toasts";
import useEditTask from "../hooks/useEditTask";

const TaskPage = () => {

    const allTasks = useSelector(state => state.tasks.tasks)

    const editTask = useEditTask()

    const {id} = useParams();

    const [exactTask, ] = useState(allTasks.filter(task => task.id === parseInt(id))[0] || {})

    const [exactTaskName, setExactTaskName] = useState(exactTask.name || "")
    const [exactTaskDesc, setExactTaskDesc] = useState(exactTask.description || "")

    const handleEditName = (e) => setExactTaskName(e.target.value)
    const handleEditDesc = (e) => setExactTaskDesc(e.target.value)

    return (
        <div className="header">
            {exactTask.id?
                <div className="inner-header flex">
                    <div className="div-center">
                        <div className="content-form">
                            <h2>Task details</h2>
                            <p>Here you can change name or description of your task</p>
                            <input className="name-input" type="text"
                                   placeholder="Task name..."
                                   value={exactTaskName}
                                   onChange={handleEditName}
                            />
                            <input className="name-input" type="text"
                                   placeholder="Task description..."
                                   value={exactTaskDesc}
                                   onChange={handleEditDesc}
                            />
                            <div className="btn-container">
                                <button
                                    className="task-page-btn"
                                ><Link style={{color: "white", textDecoration: "none"}} to='/tasks'>Back to tasks</Link>
                                </button>
                                {(exactTaskName !== exactTask.name || exactTaskDesc !== exactTask.description)?
                                    <button
                                        disabled={exactTaskDesc.length > 53}
                                        onClick={() => {editTask(exactTaskName, exactTask, exactTaskDesc)}}
                                        className="task-page-btn"
                                    >Continue
                                    </button>
                                    :
                                    null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="inner-header flex">
                    <div className="div-center">
                        <div className="content-form">
                            <h2>Something went wrong</h2>
                            <p>Unfortunately, we didn't find task with such id</p>
                            <h1>404</h1>
                                <button
                                    className="task-page-btn"
                                ><Link style={{color: "white", textDecoration: "none"}} to='/tasks'>Back to tasks</Link>
                                </button>

                        </div>
                    </div>
                </div>
            }
            <Waves/>
            <Toasts/>
        </div>
    );
};

export default TaskPage;