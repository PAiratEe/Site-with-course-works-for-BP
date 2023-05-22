import axios from "axios";

import {back_url} from "../App";

export default class StudentService {
  static async getStudentByEmail(email) {
    const response = await axios.get(back_url + "/getStudentList?=" + email)
    return response.data
  }

  static async getStudentById(id) {
    const response = await axios.get(back_url + "/infoAboutStud?=" + id)
    return response.data
  }
}