import React from 'react';
import PostItem from "./PostItem";
import {useState} from "react";
import {usePosts} from "./hooks/usePosts";
import PostFilter from "./PostFilter";

const PostList = ({posts, title}) => {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    if (!sortedAndSearchedPosts.length) {
        return (
            <div>
                <h1>{title}</h1>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <h2>Посты не найдены!</h2>
                <h3>Пошел нахуй! еблан иди займись чем нибудь полезным </h3>
            </div>

        )
    }

    return (
        <div>
            <h1>{title}</h1>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;