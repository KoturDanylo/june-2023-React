import {baseUrlSpaceX} from "../constants/urls";

import axios from "axios";

const spaceXService=axios.create({baseURL:baseUrlSpaceX});

export {
    spaceXService
}