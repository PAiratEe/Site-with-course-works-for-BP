import React from 'react';
import PostItem from "./PostItem";
import {useState} from "react";
import {useDepartments, usePosts} from "./hooks/usePosts";
import PostFilter from "./PostFilter";

const PostList = ({posts, title}) => {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = useDepartments(posts, filter.sort, filter.query)


    return (
        <div style={{width: "40vw"}}>
            <h1 style={{marginLeft:"0", marginBottom:"100px", marginTop:"100px"}}>{title}</h1>
            {sortedAndSearchedPosts.map((post, index) =>
                <PostItem number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default PostList;