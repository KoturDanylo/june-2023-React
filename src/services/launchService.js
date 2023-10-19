import {urls} from "../constants/urls";
import {spaceXService} from "./spaceXService";

const LaunchService = {
    getAll:() => spaceXService.get(urls.launches)
}

export {LaunchService};