import axios from "axios";
import {back_url} from "../App";

export default class AuthService {

  static async login(email, password) {
    const response = await axios.get(
        back_url + "/login?email=" + email + "&password=" + password)
    return response
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
    })
  }

  static async registerTeacher(name, surname, patronymic, email, password, postt) {
    return axios.post(back_url + "/register", {
      "surname": surname,
      "name": name,
      "patronymic": patronymic,
      "email": email,
      "password": password,
      "post": postt
    })
  }
}