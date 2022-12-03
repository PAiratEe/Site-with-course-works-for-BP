import React from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()

    const signup = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'Airat')
        navigate(-1)
    }

    return (
        <div>
            <h1>Страница для входа</h1>
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
                    required
                />
                <MyButton>Зарегистрироваться</MyButton>
            </form>
        </div>
    );
};

export default SignUp;
