import {axiosService} from "./axiosService";
import {urls} from "../constants";

const characterService={
    getById:(ids)=>axiosService.get(urls.characters.byIds(ids))
}

export {
    characterService
}