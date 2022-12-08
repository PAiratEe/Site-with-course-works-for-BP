import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'Jon Snow')
        navigate(-1)
    }

    return (
        <div>
            <h1>Страница для входа</h1>
            <form onSubmit={login}>
                <MyInput
                    type="email"
                    placeholder="Введите логин st"
                    pattern=".+@student\.spbu\.ru"
                    required
                />
                <MyInput
                    type="password"
                    placeholder="Введите пароль"
                    required
                />
                <Button>Войти</Button>
            </form>
        </div>
    );
};

export default Login;