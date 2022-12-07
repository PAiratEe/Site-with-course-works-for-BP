import React from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useHref, useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import AuthService from "../services/AuthService";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const {errorMessage,setErrorMessage} = useContext(AuthContext)
    const {email,setEmail} = useContext(AuthContext)
    const {password,setPasword} = useContext(AuthContext)


    const navigate = useNavigate()

    function onChangeEmail(e){
        setEmail(e.target.email)
    }

    function onChangePassword(e){
        setPasword(e.target.password)
    }


    function signup(e){
        e.preventDefault();
        AuthService.
        register(e.email,e.password).
        then(response=>{
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
                    type="email"
                    pattern=".+@student\.spbu\.ru"
                    placeholder="st******@student.spbu.ru"
                    required
                    name="email"
                    value = {email}
                    onChange ={onChangeEmail}
                />
                <MyInput
                    id="Password"
                    type="password"
                    placeholder="Введите пароль"
                    required
                    name="password"
                    value = {password}
                    onChange = {onChangePassword}
                />
                <MyInput
                    id="PasswordConfirm"
                    type="password"
                    placeholder="Повторите пароль"
                    required
                    name="passwordConfirmation"

                />
                <MyButton>Зарегистрироваться</MyButton>
            </form>
        </div>
    );
};

export default SignUp;
