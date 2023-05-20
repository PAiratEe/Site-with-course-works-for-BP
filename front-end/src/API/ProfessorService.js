import axios from "axios";

import {back_url} from "../App";

export default class ProfessorService {
    static async getAllProfessors() {
        const response = await axios.get(back_url + "/getProfessorsList")
        return response.data
    }

    static async getProfessorByName(name) {
        const response = await axios.get(back_url + "/getProfessorsList?=" + name)
        return response.data
    }

    static async getCourseWorksById(id) {
        const response = await axios.get(back_url + "/getInfoAboutCourseWork?id=" + id)
        return response.data
    }

    static async getAllProfessorsFromDepartment(id){
        const response = await axios.get(back_url + "/getAllFromDepartment?id=" + id)
        return response.data
    }

    static async getProfessorInfoById(id){
        const response = await axios.get(back_url + "/infoAboutProf?id=" + id)
        return response.data
    }
}