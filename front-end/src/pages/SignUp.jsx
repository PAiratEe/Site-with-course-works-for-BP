import React, {useEffect, useState} from 'react';
import {useContext} from "react";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";
import MyInput from "../components/UI/input/MyInput";
import AuthService from "../services/AuthService";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup, InputLabel, Select
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useFetching} from "../components/hooks/useFetching";
import DepartmentService from "../API/DepartmentService";
import ProfessorService from "../API/ProfessorService";

const SignUp = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordRepeat, setPasswordConfirm] = useState("")
  const [surname, setSurname] = useState("")
  const [name, setName] = useState("")
  const [patronymic, setPatronymic] = useState("")
  const [department, setDepartment] = useState("")
  const [course, setCourse] = useState("")
  const [postt, setPostt] = useState("")

  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);

  const [options1, setOptions1] = useState([])
  const [fetchOptions1, isFetchLoading1] = useFetching(async () => {
    const options1 = await DepartmentService.getAll()
    setOptions1(options1)
  })

  useEffect(() => {
    fetchOptions1();
  }, [])

  const options2 = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
  ]

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

  function onChangeCourse(e) {
    setCourse(e.target.value)
  }

  function onChangePostt(e) {
    setPostt(e.target.value)
  }

  function signup(e) {
    e.preventDefault()
    if (checked1) {
      AuthService.registerStudent(name, surname, patronymic, email, password,
          department, course).then(
          response => {
            setIsAuth(true)
            // let student = ProfessorService.getProfessorByName(name);
            // localStorage.setItem(student.studentId, surname + " " + name)
            localStorage.setItem('auth', surname + " " + name)
            navigate(-1)
          }
      )
    } else {
      AuthService.registerTeacher(name, surname, patronymic, email, password,
          postt).then(
          response => {
            setIsAuth(true)
            // let professor = ProfessorService.getProfessorByName(name);
            // localStorage.setItem(professor.professorId, surname + " " + name)
            localStorage.setItem('auth', surname + " " + name)
            navigate(-1)
          }
      )
    }
  }

  return (
      checked1
          ?
          <div>
            <h1>Регистрация</h1>
            <form onSubmit={signup} method="post">
              <MyInput
                  required
                  id="surname"
                  name="surname"
                  type="surname"
                  placeholder="Фамилия"
                  onChange={onChangeSurname}
              />
              <MyInput
                  required
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Имя"
                  onChange={onChangeName}
              />
              <MyInput
                  required
                  id="patronymic"
                  name="patronymic"
                  type="patronymic"
                  placeholder="Отчество"
                  onChange={onChangePatronymic}
              />
              <MyInput
                  required
                  type="email"
                  pattern=".+@student\.spbu\.ru"
                  placeholder="st******@student.spbu.ru"
                  name="email"
                  id="email"
                  onChange={onChangeEmail}
              />
              <MyInput
                  required
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  name="password"
                  onChange={onChangePassword}
              />
              <MyInput
                  required
                  id="passwordRepeat"
                  placeholder="Повторите пароль"
                  name="passwordRepeat"
                  type="password"
                  onChange={onChangeConfirmationPassword}
              />
              <br/>
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
              <br/>

              <FormControl
                  size="small"
                  fullWidth
                  sx={{
                    width: "40vw",
                    marginTop: "5px",
                    fontSize: "medium",
                    color: "gray",
                    height: "30px",
                  }}
              >
                <InputLabel>Направление</InputLabel>
                <Select
                    onChange={onChangeDepartment}
                    id="department"
                >
                  {options1.map((option, number) =>
                      <MenuItem value={option.id}
                                key={number}> {option.departmentName}</MenuItem>)}
                </Select>
              </FormControl>

              {/*<MySelectDepartment id="department"/>*/}
              {/*<MySelectCourse id="course"/>*/}

              <FormControl
                  size="small"
                  fullWidth
                  sx={{
                    width: "40vw",
                    marginTop: "5px",
                    fontSize: "medium",
                    color: "gray",
                    height: "30px",
                  }}
              >
                <InputLabel>Курс</InputLabel>
                <Select
                    onChange={onChangeCourse}
                    id="course"
                >
                  {options2.map((option, number) =>
                      <MenuItem value={option.value}
                                key={number}> {option.label}</MenuItem>)}
                </Select>
              </FormControl>

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
          :
          <div>
            <h1>Регистрация</h1>
            <form onSubmit={signup} method="post">
              <MyInput
                  required
                  id="surname"
                  name="surname"
                  type="surname"
                  placeholder="Фамилия"
                  onChange={onChangeSurname}
              />
              <MyInput
                  required
                  id="name"
                  name="name"
                  type="name"
                  placeholder="Имя"
                  onChange={onChangeName}
              />
              <MyInput
                  required
                  id="patronymic"
                  name="patronymic"
                  type="patronymic"
                  placeholder="Отчество"
                  onChange={onChangePatronymic}
              />
              <MyInput
                  required
                  type="email"
                  pattern=".+@student\.spbu\.ru"
                  placeholder="st******@student.spbu.ru"
                  name="email"
                  id="email"
                  onChange={onChangeEmail}
              />
              <MyInput
                  required
                  id="password"
                  type="password"
                  placeholder="Введите пароль"
                  name="password"
                  onChange={onChangePassword}
              />
              <MyInput
                  required
                  id="passwordRepeat"
                  placeholder="Повторите пароль"
                  name="passwordRepeat"
                  type="password"
                  onChange={onChangeConfirmationPassword}
              />
              <br/>
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
              <br/>
              <MyInput
                  required
                  id="postt"
                  placeholder="Должность"
                  name="postt"
                  type="postt"
                  onChange={onChangePostt}
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
