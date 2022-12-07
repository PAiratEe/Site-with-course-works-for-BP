import React,{useState} from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useHref, useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import AuthService from "../services/AuthService";
import {Button} from "@mui/material";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirm] = useState("")

    const navigate = useNavigate()

    function onChangeEmail(e){
        setEmail(e.target.email)
    }

    function onChangePassword(e){
        setPassword(e.target.password)
    }


    function signup(e){
        e.preventDefault();
        AuthService.register(e.email,e.password).then(response=>{
            setIsAuth(true)
            localStorage.setItem('auth','Airat')
            navigate(-1)
        }
        )
    }

    /*const signup = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'Airat')
        navigate(-1)
    }*/

    return (
        <div>
            <h1>Страница для входа</h1>
            <form onSubmit={signup} method="post">
                <MyInput
                    required
                    pattern=".+@student\.spbu\.ru"
                    placeholder="st******@student.spbu.ru"
                    name="email"
                    id = "email"
                    value = {email}
                    onChange ={onChangeEmail}
                />
                <MyInput
                    required
                    id="password"
                    placeholder="Введите пароль"
                    name="password"
                    value = {password}
                    onChange = {onChangePassword}
                />
                <MyInput
                    id="PasswordConfirm"
                    type="password"
                    placeholder="Повторите пароль"
                    name="PasswordConfirm"
                />
                <MyButton>Зарегистрироваться</MyButton>
            </form>
        </div>
    );
};

export default SignUp;
