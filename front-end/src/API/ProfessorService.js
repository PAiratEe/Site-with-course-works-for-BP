import axios from "axios";

const back_url = "http://localhost:7998"

export default class ProfessorService {
    static async getAll() {
        const response = await axios.get(back_url + '/getProfessorsList')
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(back_url + "/getInfoAboutCourseWork?id=" + id)
        return response.data
    }
}