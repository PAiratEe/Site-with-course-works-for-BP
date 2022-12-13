import axios from "axios";

import {back_url} from "../App";

export default class CourseWorkService {
    static async getAll() {
        const response = await axios.get(back_url + '/main?page=' + 1)
        return response.data
    }

    static async getById(id) {
        const response = await axios.get(back_url + "/getInfoAboutCourseWork?id=" + id)
        return response.data
    }

    static async getAllCourseWorksByProfessorId(id){
        const response = await axios.get(back_url + "/getAllCourseWorksByUserId" + id)
        return response.data
    }

    static async sendNewCourseWork(title, shortDescription, longDescription, requirements) {
        console.log(title,shortDescription,longDescription,requirements)
        return axios
            .post(
                back_url + "/createNewCourseWork",
                {
                    "title":title,
                    "shortDescription" : shortDescription,
                    "longDescription": longDescription,
                    "requirements": requirements
                }
            )
    }
}