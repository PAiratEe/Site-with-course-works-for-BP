import axios from "axios";
import {back_url} from "../App";

export default class AuthService {

  static async login(email, password) {
    return await axios.post(
        back_url + "/login",
        {
          "email": email,
          "password": password
        })
  }

  static async registerStudent(name, surname, patronymic, email, password, department, course) {
    return axios.post(back_url + "/register", {
      "surname": surname,
      "name": name,
      "patronymic": patronymic,
      "email": email,
      "password": password,
      "course": course,
      "department": department,
      "isProfessor": false
    })
  }

  static async registerTeacher(name, surname, patronymic, email, password, postt) {
    return axios.post(back_url + "/register", {
      "surname": surname,
      "name": name,
      "patronymic": patronymic,
      "email": email,
      "password": password,
      "post": postt,
      "isProfessor": true
    })
  }
}