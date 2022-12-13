import axios from "axios";

const back_url = "http://localhost:7998"

export default class DepartmentService{
    static async getAll(){
        const response = await axios.get(back_url + "/departments")
        return response;
    }



}