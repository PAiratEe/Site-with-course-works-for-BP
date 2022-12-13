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
            <div style={{width: "40vw"}}>
                <h1>{title}</h1>
                <PostFilter filter={filter} setFilter={setFilter}/>
                <h2>Учителя не найдены!</h2>
            </div>

        )
    }

    return (
        <div style={{width: "40vw"}}>
            <h1>{title}</h1>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {sortedAndSearchedPosts.map((post, index) =>
                <ProfessorItem number={index + 1} post={post} key={post.id}/>)}
        </div>
    );
};

export default TeacherList;