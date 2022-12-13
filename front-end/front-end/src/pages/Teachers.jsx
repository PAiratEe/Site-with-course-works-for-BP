import React from 'react';
import {useEffect, useState} from "react";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import PostList from "../components/PostList";

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [fetchTeachers, isTeachersLoading] = useFetching(async () => {
        const teachers = await PostService.getAll()
        setTeachers(teachers)
    })

    useEffect(() => {
        fetchTeachers();
    }, [])

    return (
        <div className="App">
            {isTeachersLoading
                ? <h2>Загружаю...</h2>
                : <PostList posts={teachers} title={'Список преподавателей'}/>
            }
        </div>
    );
};

export default Teachers;