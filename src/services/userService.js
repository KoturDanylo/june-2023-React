import {axiosService} from "./axiosService";
import {get} from "axios";
import {urls} from "../constants/urls";

const userService={
    getAll:()=>axiosService.get(urls.users),
    create:(data)=>axiosService.post(urls.users,data)
}

export {
    userService
}