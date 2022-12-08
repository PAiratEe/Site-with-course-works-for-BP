import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <Button
            sx={{
                display: "flex",
                border: "3px solid #87AADF",
                borderRadius: "3px",
                margin: "15px 0px",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                textAlign: "left",
                color: "black",
                textTransform: "capitalize",
            }}
            className="post"
            onClick={() => router(`/posts/${props.post.id}`)}
        >
            <div>
                <h2 style={{textAlign: "left"}}>{props.post.title}</h2>
                <pre>{props.post.body}</pre>
            </div>
        </Button>
    );
};

export default PostItem;