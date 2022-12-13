import axios from "axios";

const back_URL = "http://localhost:8080"

class AuthService {

    login(email, password) {
        return axios
            .post(back_URL + "/login", {
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
        return axios.post(back_URL + "/register", {
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