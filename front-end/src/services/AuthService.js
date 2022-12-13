import axios from "axios";
import {back_url} from "../App";

export default class AuthService {

    static async login(email, password) {
        console.log(email)
        console.log(password)
        const response = await axios.get(back_url + "/login?email=" + email + "&password=" + password)
        return response
    }

    static async register(name,surname,patronymic,email,password) {
        console.log(name)
        console.log(surname)
        console.log(patronymic)
        console.log(email)
        console.log(password)
        return axios.post(back_url + "/register", {
            "surname": surname,
            "name": name,
            "patronymic": patronymic,
            "email": email,
            "password": password,
            "course": "1",
            "department": "пми",
        })
    }
}