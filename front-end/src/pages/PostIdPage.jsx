import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import TeacherList from "../components/TeacherList";
import ProfessorService from "../API/ProfessorService";

const PostIdPage = () => {
    const params = useParams()
    const [teachers, setTeachers] = useState({})
    const [fetchPostById, isLoading] = useFetching(async () => {
        const response = await ProfessorService.getAllFromDepartment(params.id)
        console.log(response)
        setTeachers(response)
    })

    useEffect(() => {
        fetchPostById();
    }, [])

    return (
        <div>
            {isLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                    <TeacherList posts={teachers} title={"Преподаватели с кафедры"}/>
                </div>
            }
        </div>
    )
};

export default PostIdPage;