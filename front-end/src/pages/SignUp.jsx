import React,{useState} from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useHref, useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import AuthService from "../services/AuthService";
import {Button, TextField} from "@mui/material";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat, setPasswordConfirm] = useState("")
    const [name,setName] = useState("")

    const navigate = useNavigate()

    function onChangeEmail(e){
        setEmail(e.target.value)
    }

    function onChangePassword(e){
        setPassword(e.target.value)
    }

    function onChangeConfirmationPassword(e){
        setPasswordConfirm(e.target.value)
    }

    function onChangeName(e){
        setName(e.target.value)
    }


    function signup(e){
        e.preventDefault()
        AuthService.register(email,password).then(response=>{
            setIsAuth(true)
            localStorage.setItem('auth','Airat')
            navigate(-1)
        }
        )
    }

    return (
        <div>
            <h1>Страница для входа</h1>
            <form onSubmit={signup} method="post">
                <MyInput
                    required
                    type="email"
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
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    value = {password}
                    onChange = {onChangePassword}
                />
                <MyInput
                    id="passwordRepeat"
                    placeholder="Повторите пароль"
                    name="passwordRepeat"
                    type="passwordRepeat"
                    value={passwordRepeat}
                    onChange = {onChangeConfirmationPassword}
                />
                <MyInput
                    required
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    placeholder="Имя"
                    onChange = {onChangeName}
                    />
                <MyButton type="submit">Зарегистрироваться</MyButton>
            </form>
        </div>
    );
};

export default SignUp;
