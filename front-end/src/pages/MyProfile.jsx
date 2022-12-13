import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import {useEffect, useState} from "react";
import CourseWorkForm from "./CourseWorkForm";
import CourseWorkService from "../API/CourseWorkService";


const MyProfile = () => {
    const name = localStorage.getItem('auth')
    const router = useNavigate()
    const [works, setWorks] = useState([])
    const [fetchWorks, isWorksLoading] = useFetching(async () => {
        const works = await CourseWorkService.getAllCourseWorksByProfessorId(1)
        setWorks(works)
    })

    useEffect(() => {
        fetchWorks();
    }, [])

    const createWork = (newCourseWork) => {
        setWorks([...works, newCourseWork])
    }

    return (
        <div>
            <h1>
                You know nothing, {name}
            </h1>
            <Button
                onClick={() => router(`/createcoursework`)}
            >
                Создать новый пост
            </Button>
            {/*<CourseWorkForm create={createWork}/>*/}
        </div>
    );
};

export default MyProfile;
