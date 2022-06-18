import React, {useState} from 'react';
import '../styles/app.css'
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import Waves from "../components/Waves";
import useToast from "../hooks/useToast";
import Toasts from "../components/Toasts";

const Home = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    const toast = useToast()

    const [name, setName] = useState('');

    const moveToTasks = () => {
        if (name.trim().length > 3 && name.trim().length < 15) {
            dispatch({type: "changeUser", payload: name})
            history.push('/tasks')
            dispatch({type: "changePage", payload: ''})
        }
        else {
            toast("Error", "Name is incorrect", 3000)
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            moveToTasks();
            e.target.blur();
        }
    }

    return (
        <div className="header">
            <div className="inner-header flex">
                <div className="div-center">
                    <div className="content-form">
                        <h2>Welcome, stranger</h2>
                        <p>To start making notes provide us with your name</p>
                        <input className="name-input" type="text"
                               onChange={(e) => {setName(e.target.value)}}
                               placeholder="Gerald"
                               onKeyPress={handleKeyPress}
                        />
                        <button
                            onClick={moveToTasks}
                        >Continue</button>
                        <img className="btn-after"
                             src={ require('../assets/right-arrow.png')}
                             alt="arrow"
                        />
                    </div>
                </div>
            </div>
            <Waves/>
            <Toasts/>
        </div>
    );
};

export default Home;