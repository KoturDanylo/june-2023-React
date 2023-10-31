import {axiosService} from "./axiosService";
import {urls} from "../constanta/urls";

const usersService = {
    getAll:()=> axiosService.get(urls.users.base),
    getById:(id)=> axiosService.get(urls.users.byId(id))

}

export {
    usersService
}