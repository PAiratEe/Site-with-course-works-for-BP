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

    register(surname, name, patronymic, email, password, department)
    {
        return axios.post(back_URL + "/register", {
            "surname": surname,
            "name": name,
            "patronymic": patronymic,
            "email": email,
            "password": password,
            "course": "1",
            "department": department
        })
    }
}

export default new AuthService();