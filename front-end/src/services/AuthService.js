import axios from "axios";
import {back_url} from "../App";

class AuthService {

    login(email, password) {
        return axios
            .post(back_url + "/login", {
                email,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
            });
    }

    register(name, email) {
        return axios.post(back_url + "/register", {
            "surname": "Safin",
            "name": name,
            "patronymic": "Fanisovich",
            "email": email,
            "password": "483289432",
            "course": "1",
            "department": "пми",
        })
    }
}

export default new AuthService();