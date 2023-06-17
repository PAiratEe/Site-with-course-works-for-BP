import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import AuthService from "../services/AuthService";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function login(event) {
        event.preventDefault()
        var response = AuthService.login(email, password).then(response => {
                setIsAuth(true)
                localStorage.setItem('id',response.data.id)
                //localStorage.setItem('jwt',response.data.jwt)
                if(response.data.professorEmail !== undefined){
                    localStorage.setItem('email', response.data.professorEmail)
                    localStorage.setItem('name', response.data.professorName)
                    localStorage.setItem('surname',response.data.professorSecondName)
                    localStorage.setItem('patronymic',response.data.professorPatronymic)
                    localStorage.setItem('state',response.data.professorPost)
                    localStorage.setItem('isStud','false')
                }
                else {
                    localStorage.setItem('email', response.data.studentEmail)
                    localStorage.setItem('name', response.data.studentName)
                    localStorage.setItem('surname',response.data.studentSurname)
                    localStorage.setItem('state',response.data.studentCourseNumber + " курс " + response.data.studentCourseName)
                    localStorage.setItem('isStud','true')
                }
                navigate(-1)
            }
        )
    }

    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={login} method="get">
                <MyInput
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Введите email"
                    required
                    onChange={onChangeEmail}
                />
                <MyInput
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    required
                    onChange={onChangePassword}
                />
                <Button
                    type="submit"
                    sx={{
                        color: "#87AADF",
                        fontSize: "18px",
                        fontFamily: "Microsoft Sans Serif",
                        textTransform: "capitalize",
                    }}
                >
                    Войти
                </Button>
            </form>
        </div>
    );
};

export default Login;