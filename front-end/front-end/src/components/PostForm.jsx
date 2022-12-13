import React from 'react';
import MyInput from "./UI/input/MyInput";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    return (
        <form>
            <MyInput
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Название поста"
            />

            <MyInput
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Описание поста"
            />
            {/*<Button onClick={addNewPost}>Создать пост</Button>*/}
        </form>
    );
};

export default PostForm;