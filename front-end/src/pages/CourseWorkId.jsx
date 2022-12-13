import React from 'react';
import '../styles/App.css'
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../components/hooks/useFetching";
import CourseWorkService from "../API/CourseWorkService";

const CourseWorkIdPAge = () => {
    const params = useParams()
    const [work, setWork] = useState({})
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [requirements, setRequirements] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [patronymic, setPatronymic] = useState("")
    const [email, setEmail] = useState("")
    const [state, setState] = useState("")


    const [fetchWorkById, isLoading] = useFetching(async () => {
        const response = await CourseWorkService.getById(params.id)
        setTitle(response.title)
        setDescription(response.description)
        setRequirements(response.requirements)
        setName(response.professor.professorName)
        setSurname(response.professor.professorSecondName)
        setPatronymic(response.professor.professorPatronymic)
        setState(response.professor.professorPost)
        setEmail(response.professor.professorEmail)
    })

    useEffect(() => {
        fetchWorkById(params.id)
    }, [])

    return (
        <div>
            {isLoading
                ?
                <h1>Загружаю...</h1>
                :
                <div>
                    <table>
                        <tbody>
                        <tr>
                            <td className="nav">
                                <div className="nav_div">
                                    <ul style={{marginTop: "20px"}}>
                                        <li><a href="#theme">
                                            <Button
                                                id="basic-button"
                                                sx={{
                                                    color: "#44597e",
                                                    fontSize: "18px",
                                                    fontFamily: "Microsoft Sans Serif",
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Тема
                                            </Button>
                                        </a></li>
                                        <li><a href="#knowledge">
                                            <Button
                                                id="basic-button"
                                                sx={{
                                                    color: "#44597e",
                                                    fontSize: "18px",
                                                    fontFamily: "Microsoft Sans Serif",
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Необходимые знания
                                            </Button>
                                        </a></li>
                                        <li><a href="#links">
                                            <Button
                                                id="basic-button"
                                                sx={{
                                                    color: "#44597e",
                                                    fontSize: "18px",
                                                    fontFamily: "Microsoft Sans Serif",
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Полезные ссылки
                                            </Button>
                                        </a></li>
                                        <li><a href="#contact_us">
                                            <Button
                                                id="basic-button"
                                                sx={{
                                                    color: "#44597e",
                                                    fontSize: "18px",
                                                    fontFamily: "Microsoft Sans Serif",
                                                    textTransform: "capitalize",
                                                }}
                                            >
                                                Контакты
                                            </Button>
                                        </a></li>
                                    </ul>
                                </div>
                            </td>
                            <td className="body">
                                <div>
                                    <h1 id="theme">{title}</h1>
                                    <pre style={{marginLeft: "10px"}}>{description}</pre>
                                    <h2 id="links">Полезные ссылки</h2>
                                    <h2 id="knowledge">Необходимые знания</h2>
                                    <pre style={{marginLeft: "10px"}}>{requirements}</pre>
                                    <h2 id="contact_us">Контакты</h2>
                                    <pre style={{marginLeft: "10px"}}>
                                        Преподаватель: {surname + " " + name + " " + patronymic} <br/>
                                        Звание: {state} <br/>
                                        Почта: {email} <br/>
                                    </pre>
                                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
};

export default CourseWorkIdPAge;