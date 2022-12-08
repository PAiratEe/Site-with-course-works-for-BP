import axios from "axios";

const back_URL = "http://localhost:7999"

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

    register(email, password)
    {
        return axios.post(back_URL + "/register", {
            "email": email,
            "password": password,
            "surname": "Korolyov",
            "name": "Artyom",
            "patronymic": "Sergeevich",
            "course": "1",
            "department": "ПМИ"
        })

    }
}

export default new AuthService();