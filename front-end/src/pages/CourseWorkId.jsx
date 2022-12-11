import React from 'react';
import '../styles/App.css'
import {Button} from "@mui/material";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";

const CourseWorkIdPAge = () => {
    const params = useParams()
    const [work, setWork] = useState({})
    const [fetchWorkById, isLoading] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setWork(response.data)
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
                    {/*<h1 style={{textAlign: "left"}}>{post.id}. {post.title}</h1>*/}
                    {/*<div>{post.body}</div>*/}
                    <table>
                        <tbody>
                        <tr>
                            <td className="nav">
                                <div className="nav_div">
                                    <ul style={{marginTop: "20px"}}>
                                        <li><a href="theme">
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
                                    <h1 id="theme">{work.title}</h1>
                                    <pre style={{marginLeft: "10px"}}>{work.body}</pre>
                                    <h2 id="knowledge">Необходимые знания</h2>
                                    <h2 id="links">Полезные ссылки</h2>
                                    <h2 id="contact_us">Контакты</h2>
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