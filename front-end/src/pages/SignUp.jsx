import React from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {Form, useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import AuthService from "../services/AuthService";
import {Button, TextField} from "@mui/material";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const signup = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'Jon Snow')
        navigate(-1)
    }

    return (
        <div>
            <h1>Страница для регистрации</h1>
            <form onSubmit={signup}>
                <MyInput
                    type="email"
                    pattern=".+@student\.spbu\.ru"
                    placeholder="st******@student.spbu.ru"
                    required
                />
                <MyInput
                    id="Password"
                    type="password"
                    placeholder="Введите пароль"
                    required
                />
                <MyInput
                    id="PasswordConfirm"
                    type="password"
                    placeholder="Повторите пароль"
                    required                />
                <MyInput
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    placeholder="Имя"
                    onChange = {onChangeName}
                    />
                <Button type="submit">Зарегистрироваться</Button>
            </form>
        </div>
    );
};

export default SignUp;
