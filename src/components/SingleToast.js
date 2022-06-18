import React from 'react';
import {Alert} from "@mui/material";
import {useDispatch} from "react-redux";

const SingleToast = ({id, type, message}) => {

    const dispatch = useDispatch()

    return (
        <Alert className="toast" severity={`${type.toLowerCase()}`}
               onClose={() => {dispatch({type: "removeToast", payload: id})}}
        >
            {message}
        </Alert>
    );
};

export default SingleToast;