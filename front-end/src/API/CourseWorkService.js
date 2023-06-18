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
        const headers = {
            'Authorization': 'bearer ' + localStorage.getItem('jwt')
        }
        const response = await axios.get(back_url + "/getAllCourseWorksByUserId?id=" + id, {headers})
        return response.data
    }

    static sendNewCourseWork(title, shortDescription, longDescription, requirements, department, professorId) {
        console.log(title, shortDescription, longDescription, requirements, department, professorId)
        return axios
            .post(
                back_url + "/createNewCourseWork",
                {
                    "title": title,
                    "shortDescription" : shortDescription,
                    "longDescription": longDescription,
                    "requirements": requirements,
                    // "professorSurname": professorSurname,
                    // "professorName": professorName,
                    // "professorPatronymic": professorPatronymic,
                    "department": department,
                    "professorId": professorId
                }
            )
    }

  // static async editCourseWork(title, shortDescription, longDescription, requirements, professorSurname, professorName, professorPatronymic, department) {
  //   console.log(title, shortDescription, longDescription, requirements)
  //   return axios
  //   .post(
  //       back_url + "/createNewCourseWork",
  //       {
  //         "title":title,
  //         "shortDescription" : shortDescription,
  //         "longDescription": longDescription,
  //         "requirements": requirements,
  //         "professorSurname": professorSurname,
  //         "professorName": professorName,
  //         "professorPatronymic": professorPatronymic,
  //         "department": department
  //       }
  //   )
  // }
}