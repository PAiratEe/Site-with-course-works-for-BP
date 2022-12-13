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
        AuthService.login(email, password).then(response => {
                setIsAuth(true)
                localStorage.setItem('auth', response.data.studentSurname + " " + response.data.studentName)
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
                    placeholder="Введите логин st"
                    pattern=".+@student\.spbu\.ru"
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