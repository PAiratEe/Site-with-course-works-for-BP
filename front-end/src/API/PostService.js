import axios from "axios";

const back_url = "http://localhost:8080"

export default class PostService {
    static async getAll() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(back_url + "/getInfoAboutCourseWork?id=" + id)
        return response.data
    }

    static async getByProfessor() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    }
}