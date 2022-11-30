import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className="post" onClick={() => router(`/posts/${props.post.id}`)}>
            <div className="post__content">
                <strong>{props.post.title}</strong>
                {/*<div>*/}
                {/*    <pre>{props.post.body}</pre>*/}
                {/*</div>*/}
            </div>
            {/*<div className="post__buttons">*/}
            {/*    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>*/}
            {/*</div>*/}
        </div>
    );
};

export default PostItem;