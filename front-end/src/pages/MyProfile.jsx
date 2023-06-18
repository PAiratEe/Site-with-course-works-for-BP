import React from 'react';
import {Button} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useFetching} from "../components/hooks/useFetching";
import {useEffect, useState} from "react";
import CourseWorkService from "../API/CourseWorkService";
import '../styles/App.css'
import WorkItemCrud from "../components/WorkItemCRUD";
import WorkItem from "../components/WorkItem";


const MyProfile = () => {
    const id = localStorage.getItem('id')
    const name = localStorage.getItem('name')
    const surname = localStorage.getItem('surname')
    const email = localStorage.getItem('email')
    const patronymic = localStorage.getItem('patronymic')
    const state = localStorage.getItem('state')
    const isStud = !localStorage.getItem('isProfessor')
    const router = useNavigate()
    const [works, setWorks] = useState([])
    const [fetchWorks, isWorksLoading] = useFetching(async () => {
        const works = await CourseWorkService.getAllCourseWorksByProfessorId(id)
        setWorks(works)
    })
    const [inf,setInf]= useState([])



    useEffect(() => {
        fetchWorks();
    }, [])

    return (
        <div>
            {isWorksLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                {isStud==='true'
                    ?
                    <div>
                        <table>
                            <tbody>
                            <tr>
                                <td className="nav">
                                    <div className="nav_div">
                                        <ul style={{marginTop: "20px"}}>
                                            <li><a href="#about">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Личная информация
                                                </Button>
                                            </a></li>
                                            <li><a href="#courseworks">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Мои курсовые работы
                                                </Button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="body">
                                    <div>
                                        <h2 id="about">Личная информация</h2>
                                        <div style={{marginLeft: "10px"}}>
                                            {/*{info.map((index) => <div>{index}</div>)} <br/>*/}
                                            {surname + " " + name + " " + patronymic}
                                            Звание: {state}<br/>
                                            Почта: {email} <br/>
                                        </div>
                                        <h2 id="courseworks"></h2>
                                        <div style={{
                                            marginLeft: "10px",
                                            width: "40%"
                                        }}>
                                            {works === "У вас еще нет работ!" ? "У вас пока нет работ" : works.map((coursework, index) =>
                                                <WorkItem number={index + 1} coursework={coursework} key={coursework.courseWorkId}/>)}
                                        </div>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    :
                    <div >
                        <table>
                            <tbody>
                            <tr>
                                <td className="nav">
                                    <div className="nav_div">
                                        <ul style={{marginTop: "20px"}}>
                                            <li><a href="#about">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Личная информация
                                                </Button>
                                            </a></li>
                                            <li><a href="#courseworks">
                                                <Button
                                                    id="basic-button"
                                                    sx={{
                                                        color: "#44597e",
                                                        fontSize: "18px",
                                                        fontFamily: "Microsoft Sans Serif",
                                                        textTransform: "capitalize",
                                                    }}
                                                >
                                                    Мои курсовые работы
                                                </Button>
                                            </a></li>
                                        </ul>
                                    </div>
                                </td>
                                <td className="body">
                                    <div>
                                        <h2 id="about">Личная информация</h2>
                                        <div style={{marginLeft: "10px"}}>
                                            {surname + " " + name + " " + patronymic}<br/>
                                            Звание: {state} <br/>
                                            Почта: {email} <br/>
                                        </div>
                                        <h2 id="courseworks"></h2>
                                        <div style={{
                                            marginLeft: "10px",
                                            width: "40%"
                                        }}>
                                            {works.map((coursework, index) =>
                                                <WorkItemCrud number={index + 1} coursework={coursework} key={coursework.courseWorkId}/>)}
                                        </div>
                                        <br/><br/>
                                        <Button
                                            onClick={() => router(`/createcoursework`)}
                                            sx={{
                                                marginLeft: "10px",
                                                fontSize: "18px",
                                            }}
                                        >
                                            Создать новый пост
                                        </Button>
                                    </div>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                }
                </div>
            }
        </div>
    );
};

export default MyProfile;
