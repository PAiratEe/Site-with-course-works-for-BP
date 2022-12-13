import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const ProfessorItem = (props) => {
    const router = useNavigate()
    return (
        <Button
            className={"minipost"}
            onClick={() => router(`/posts/${props.post.id}`)}
        >
            <div>
                <h2 className={"title"} style={{textTransform:"capitalize"}}>{props.post.professorSecondName +
                " " + props.post.professorName + " " + props.post.professorPatronymic}</h2>
            </div>
        </Button>
    );
};

export default ProfessorItem;