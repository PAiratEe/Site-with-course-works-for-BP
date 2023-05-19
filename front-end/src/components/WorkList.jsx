import React from 'react';
import {useState} from "react";
import {usePosts} from "./hooks/usePosts";
import PostFilter from "./PostFilter";
import WorkItem from "./WorkItem";

const WorkList = ({posts, title}) => {

  const [filter, setFilter] = useState({sort: '', query: ''})
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  if (!sortedAndSearchedPosts.length) {
    return (
        <div style={{width: "40vw"}}>
          <h1 style={{
            marginLeft: "0",
            marginBottom: "100px",
            marginTop: "100px"
          }}>{title}</h1>
          <PostFilter filter={filter} setFilter={setFilter}/>
          <h2>Посты не найдены!</h2>
        </div>

    )
  }

  return (
      <div style={{width: "40vw"}}>
        <h1 style={{
          marginLeft: "0",
          marginBottom: "100px",
          marginTop: "100px"
        }}>{title}</h1>
        <PostFilter filter={filter} setFilter={setFilter}/>
        {sortedAndSearchedPosts.map((coursework, index) =>
            <WorkItem number={index + 1} coursework={coursework}
                      key={coursework.courseWorkId}/>)}
      </div>
  );
};

export default WorkList;