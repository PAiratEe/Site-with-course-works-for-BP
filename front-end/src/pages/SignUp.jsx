import React,{useState} from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useHref, useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import AuthService from "../services/AuthService";
import {Button, Select} from "@mui/material";

const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat, setPasswordConfirm] = useState("")
    const [surname, setSurname] = useState("")
    const [name, setName] = useState("")
    const [patronymic, setPatronymic] = useState("")

    const options = ['1', '2', '3', '4', '5']

    const [selectedOption, setSelectedOption] = useState("");

    const navigate = useNavigate()

    function onChangeEmail(e) {
        setEmail(e.target.value)
    }

    function onChangePassword(e) {
        setPassword(e.target.value)
    }

    function onChangeConfirmationPassword(e) {
        setPasswordConfirm(e.target.value)
    }

    function onChangeSurname(e) {
        setSurname(e.target.value)
    }

    function onChangeName(e) {
        setName(e.target.value)
    }

    function onChangePatronymic(e) {
        setPatronymic(e.target.value)
    }


    function signup(e) {
        e.preventDefault()
        AuthService.register(email,password).then(response => {
                setIsAuth(true)
                localStorage.setItem('auth','Airat')
                navigate(-1)
            }
        )
    }

    return (
        <div>
            <h1>Регистрация</h1>
            <form onSubmit={signup} method="post">
                <MyInput
                    required
                    type="email"
                    pattern=".+@student\.spbu\.ru"
                    placeholder="st******@student.spbu.ru"
                    name="email"
                    id = "email"
                    value = {email}
                    onChange={onChangeEmail}
                />
                <MyInput
                    required
                    id="password"
                    type="password"
                    placeholder="Введите пароль"
                    name="password"
                    value = {password}
                    onChange={onChangePassword}
                />
                <MyInput
                    id="passwordRepeat"
                    placeholder="Повторите пароль"
                    name="passwordRepeat"
                    type="passwordRepeat"
                    value={passwordRepeat}
                    onChange={onChangeConfirmationPassword}
                />
                <MyInput
                    required
                    id="name"
                    name="surname"
                    type="surname"
                    value={name}
                    placeholder="Фамилия"
                    onChange={onChangeSurname}
                />
                <MyInput
                    required
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    placeholder="Имя"
                    onChange={onChangeName}
                />
                <MyInput
                    required
                    id="name"
                    name="patronymic"
                    type="patronymic"
                    value={name}
                    placeholder="Отчество"
                    onChange={onChangePatronymic}
                />
                <Select
                    options={options}
                    value={selectedOption}
                    onChange={e => setSelectedOption(e.target.value)}
                />
                <MyInput
                    id="department"
                    type="text"
                    placeholder="Направление"
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
                    Зарегистрироваться
                </Button>
            </form>
        </div>
    );
};

export default SignUp;
