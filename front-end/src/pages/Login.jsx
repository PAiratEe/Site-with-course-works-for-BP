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
            <h1>Вход</h1>
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