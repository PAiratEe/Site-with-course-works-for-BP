import React from 'react';
import {useEffect, useState} from "react";
import {useFetching} from "../components/hooks/useFetching";
import CourseWorkService from "../API/CourseWorkService";
import PostList from "../components/PostList";
import ProfessorService from "../API/ProfessorService";
import TeacherList from "../components/TeacherList";

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [fetchTeachers, isTeachersLoading] = useFetching(async () => {
        const teachers = await ProfessorService.getAllProfessors()
        setTeachers(teachers)
    })

    useEffect(() => {
        fetchTeachers();
    }, [])

    return (
        <div className="App">
            {isTeachersLoading
                ? <h2>Загружаю...</h2>
                : <TeacherList posts={teachers} title={'Список преподавателей'}/>
            }
        </div>
    );
};

export default Teachers;