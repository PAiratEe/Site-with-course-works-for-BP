import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button} from "@mui/material";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <Button
            sx={{
                display: "flex",
                border: "3px solid lightgray",
                borderRadius: "5px",
                margin: "15px 0px",
                justifyContent: "space-between",
                width: "100%",
                height: "100%",
                textAlign: "left",
                color: "gray",
                textShadow: "0px 0px 3px white",
                backgroundColor: "rgba(97, 98, 112, 0.22)",
                textTransform: "capitalize",
            }}
            className="post"
            onClick={() => router(`/posts/${props.post.id}`)}
        >
            <div>
                <h2 style={{textAlign: "left", color: "white", textShadow: "0px 0px 3px gray"}}>{props.post.departmentName}</h2>
            </div>
        </Button>
    );
};

export default PostItem;