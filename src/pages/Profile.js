import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import Task from "../components/Task";
import {FormControl, FormControlLabel, Grid, Pagination, Radio, RadioGroup} from "@mui/material";
import Waves from "../components/Waves";
import Toasts from "../components/Toasts";
import useToast from "../hooks/useToast";
import useTask from "../hooks/useTask";

const Profile = () => {

    const user = useSelector(state => state.userName)

    const data = useSelector(state => state.tasks.tasks)

    const toast = useToast()
    const createTask = useTask()

    const [taskName, setTaskName] = useState('')
    const [status, setStatus] = useState('all')
    const [tasks, setTasks] = useState(data)

    const [searchWord, setSearchWord] = useState('')

    const statuses = [{name: "All",value: "all"},{name: "Done",value: "true"},{name: "Not done",value: "false"}]

    const [reworkedTasks, setReworkedTasks] = useState(tasks)
    const [filteredTasks, setFilteredTasks] = useState(reworkedTasks)

    const tasksOnPage = 5
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(Math.ceil(filteredTasks.length / tasksOnPage))

    useEffect(() => {
        setTasks(data);
        setReworkedTasks(data)
        setFilteredTasks(data)
    }, [data])

    useEffect(() => {
        setFilteredTasks(reworkedTasks)
    }, [reworkedTasks])

    useEffect(() => {
        setSearchWord('');
        switch (status) {
            case 'false':
                setReworkedTasks(tasks.filter(task => task.isDone === false))
                break;
            case 'true':
                setReworkedTasks(tasks.filter(task => task.isDone === true))
                break;
            case 'all':
                setReworkedTasks(tasks)
                break;
            default:
                setReworkedTasks(tasks)
                break;
        }
    }, [status, tasks])

    useEffect(() => {
        let searched = reworkedTasks.filter(task => task.name.toLowerCase().includes(searchWord.toLowerCase()))
        setFilteredTasks(searched)
    }, [searchWord])

    useEffect(() => {
        setPageQty(Math.ceil(filteredTasks.length / tasksOnPage))
    }, [filteredTasks])

    const addTask = (name) => {
        if (taskName.trim().length > 3 && taskName.trim().length < 25) {
            createTask(name)
            setTaskName("")
            toast("Success", "You successfully created new task!", 3000)
        }
        else {
            toast("Error", "Task name is incorrect", 3000)
            setTaskName("")
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            addTask(taskName)
            e.target.blur();
        }
    }

    const handleRadio = (e) => setStatus(e.target.value)
    const handleSearch = (e) => setSearchWord(e.target.value)

    return (
        <div className="header">
            <div className="inner-header flex">
                <div className="div-center">
                    <div className="content-form">
                        <h2>{user.userName}'s todos</h2>
                        <div className="flex task-input-box">
                            <input className="task-input" type="text"
                                   onKeyPress={handleKeyPress}
                                   value={taskName || ''}
                                   placeholder="Your cool task"
                                   onChange={(e) => {setTaskName(e.target.value)}}
                            />
                            <button
                                className="add-btn"
                                onClick={() => addTask(taskName)}>
                                <img className="add-img"
                                     src={require('../assets/add.png')}
                                     alt={"add"}
                                />
                            </button>
                        </div>
                        <div className="search-radio">
                            <div style={{display: "flex"}}>
                                <label htmlFor="search"><p style={{paddingTop: 10}}>Search:&nbsp;</p></label>
                                <input className="search-input"
                                       placeholder="by name..." id="search"
                                       type="text"
                                       value={searchWord || ''}
                                       onChange={handleSearch}
                                />
                            </div>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                >
                                    <>
                                    {statuses.map(item  =>
                                        <FormControlLabel
                                            key={item.name}
                                            onChange={handleRadio}
                                            checked={status === `${item.value}`}
                                            value={item.value || ''} control={<Radio  />}
                                            label={item.name} />
                                    )}
                                    </>
                                </RadioGroup>
                            </FormControl>
                        </div>
                        {filteredTasks.length > 0?
                            <div>
                                {filteredTasks.slice(((page * tasksOnPage) - tasksOnPage), (page * tasksOnPage)).map((task,index) =>
                                    <Task
                                        setTaskName={setTaskName}
                                        task={task}
                                        key={index}/>
                                )}
                            </div>
                            :
                            <p>Nothing to show yet...</p>
                        }
                    </div>
                    {filteredTasks.length > 0?
                        <Grid container
                                style={{marginTop: 20}}
                                justify={"center"}
                                alignItems={"center"}
                                direction={"column"}
                        >
                            <Pagination
                                count={pageQty}
                                page={page}
                                onChange={(_, num) => setPage(num)}
                                color={"primary"}
                            />
                        </Grid>
                        :
                        null
                    }
                </div>
            </div>
            <Waves/>
            <Toasts/>
        </div>
    );
};

export default Profile;