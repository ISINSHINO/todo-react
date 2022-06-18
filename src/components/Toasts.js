import React from 'react';
import SingleToast from "./SingleToast";
import {useSelector} from "react-redux";

const Toasts = () => {

    const toasts = useSelector((state => state.toasts.toasts))

    return (
        <div  className="toast-container">
            <div>
                {toasts && toasts.map(toast => (
                    <SingleToast
                           id={toast.id}
                           key={toast.id}
                           type={toast.type}
                           message={toast.message}/>
                ))}

            </div>
        </div>
    );
};

export default Toasts;