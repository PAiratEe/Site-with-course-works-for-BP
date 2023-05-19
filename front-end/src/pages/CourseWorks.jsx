import React from 'react';
import {useState} from "react";
import {useFetching} from "../components/hooks/useFetching";
import CourseWorkService from "../API/CourseWorkService";
import {useEffect} from "react";
import WorkList from "../components/WorkList";

const CourseWorks = () => {
    const [works, setWorks] = useState([])
    const [fetchWorks, isWorksLoading] = useFetching(async () => {
        const works = await CourseWorkService.getAll()
        setWorks(works)
    })

    useEffect(() => {
        fetchWorks();
    }, [])

    return (
        <div className="App">
            {isWorksLoading
                ? <h2>Загружаю...</h2>
                : <WorkList posts={works} title={'Список курсовых работ'}/>
            }
        </div>
    );
};

export default CourseWorks;