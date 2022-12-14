import axios from "axios";

import {back_url} from "../App";

export default class ProfessorService {
  static async getStudentByName(name) {
    const response = await axios.get(back_url + "/getStudentList?=" + name)
    return response.data
  }
}