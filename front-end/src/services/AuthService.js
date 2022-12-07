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

    register(email,password){
        console.log(email)
        console.log(password)
        return axios.post(back_URL +"/register",{
            email,
            password
        })
    }
}

export default new AuthService();