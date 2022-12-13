import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const WorkItem = (props) => {
    const router = useNavigate()
    return (
        <button
            className={"post"}
            onClick={() => router(`/courseworks/${props.coursework.courseWorkId}`)}
        >
            <div>
                <h2 className={"title"}>{props.coursework.title}</h2>
                <pre>{props.coursework.body}</pre>
            </div>
        </button>
    );
};

export default WorkItem;