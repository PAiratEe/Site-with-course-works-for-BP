import axios from "axios";

import {back_url} from "../App";
export default class DepartmentService{
    static async getAll(){
        const response = await axios.get(back_url + "/departments")
        return response.data;
    }



}