import {useContext} from "react";
import {Context} from "../hoc";

const useName=()=>{
    const [name, setName]=useContext(Context)

    return{
       name,
       setName
    }
}

export {
    useName
}