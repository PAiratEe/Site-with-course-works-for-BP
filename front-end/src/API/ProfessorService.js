import axios from "axios";

import {back_url} from "../App";

export default class ProfessorService {
    static async getAll() {
        const response = await axios.get(back_url + "/getProfessorsList")
        return response.data
    }

    static async getProfessorByName(name) {
        const response = await axios.get(back_url + "/getProfessorsList?=" + name)
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(back_url + "/getInfoAboutCourseWork?id=" + id)
        return response.data
    }

    static async getAllFromDepartment(id){
        const response = await axios.get(back_url + "/getAllFromDepartment?id=" + id)
        return response.data
    }
}