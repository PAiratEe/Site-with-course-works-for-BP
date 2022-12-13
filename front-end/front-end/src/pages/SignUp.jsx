import React,{useState} from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import MySelect from "../components/UI/MySelect/MySelect"
import AuthService from "../services/AuthService";
import {Button, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
const SignUp = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [passwordRepeat, setPasswordConfirm] = useState("")
    const [surname, setSurname] = useState("")
    const [name, setName] = useState("")
    const [patronymic, setPatronymic] = useState("")
    const [department, setDepartment] = useState("")

    const [checked1, setChecked1] = useState(true);
    const [checked2, setChecked2] = useState(false);

    function handleChange1(e) {
        setChecked1(e.target.checked)
        setChecked2(!e.target.checked)
    }

    function handleChange2(e) {
        setChecked1(!e.target.checked)
        setChecked2(e.target.checked)
    }

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

    function onChangeDepartment(e) {
        setDepartment(e.target.value)
    }


    function signup(e) {
        e.preventDefault()
        AuthService.register(name, email).then(response => {
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
                    id="surname"
                    name="surname"
                    type="surname"
                    value={surname}
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
                    id="patronymic"
                    name="patronymic"
                    type="patronymic"
                    value={patronymic}
                    placeholder="Отчество"
                    onChange={onChangePatronymic}
                />
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
                    required
                    id="passwordRepeat"
                    placeholder="Повторите пароль"
                    name="passwordRepeat"
                    type="passwordRepeat"
                    value={passwordRepeat}
                    onChange={onChangeConfirmationPassword}
                />
                <MyInput
                    required
                    id="department"
                    type="text"
                    placeholder="Направление"
                    value={department}
                    onChange={onChangeDepartment}
                />
                <MySelect/>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox/>}
                        checked={checked1}
                        onChange={handleChange1}
                        label="Студент"
                        sx={{
                            width: "40vw",
                            marginTop: "5px",
                            fontSize: "medium",
                            color: "gray",
                            height: "20px",
                        }}
                    />
                    <FormControlLabel
                        control={<Checkbox/>}
                        checked={checked2}
                        onChange={handleChange2}
                        label="Преподаватель"
                        sx={{
                            width: "40vw",
                            marginTop: "5px",
                            fontSize: "medium",
                            color: "gray",
                            height: "20px",
                        }}
                    />
                </FormGroup>
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
