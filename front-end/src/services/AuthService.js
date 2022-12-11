import axios from "axios";

<<<<<<< HEAD
const back_URL = "http://localhost:8080"
=======
const back_URL = "http://localhost:7999"
>>>>>>> origin/front-end

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

<<<<<<< HEAD
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
=======
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
>>>>>>> origin/front-end
        })
    }
}

export default new AuthService();