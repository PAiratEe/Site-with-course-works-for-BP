import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <Button
            sx={{
                textTransform: "capitalize",
            }}
            className={"minipost"}
            onClick={() => router(`/posts/${props.post.id}`)}
        >
            <div>
                <h2 className={"title"}>{props.post.departmentName}</h2>
            </div>
        </Button>
    );
};

export default PostItem;