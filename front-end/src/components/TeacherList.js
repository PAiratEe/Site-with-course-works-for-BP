import React from 'react';
import PostItem from "./PostItem";
import {useState} from "react";
import {useDepartments, usePosts, useProfessor} from "./hooks/usePosts";
import PostFilter from "./PostFilter";
import ProfessorItem from "./ProfessorItem";

const TeacherList = ({posts, title}) => {

    const [filter, setFilter] = useState({sort: '', query: ''})
    const sortedAndSearchedPosts = useProfessor(posts, filter.sort, filter.query)

    if (!sortedAndSearchedPosts.length) {
        return (
            <div className={"post"}>
                <h1>{title}</h1>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <h2>Учителя не найдены!</h2>
            </div>

        )
    }

    return (
        <div className={"post"}>
            <h1 style={{marginLeft:"0", marginBottom:"100px", marginTop:"100px"}} className={"title"}>{title}</h1>
            {sortedAndSearchedPosts.map((post, index) =>
                <ProfessorItem number={index + 1} post={post} key={post.id} />)}
        </div>
    );
};

export default TeacherList;