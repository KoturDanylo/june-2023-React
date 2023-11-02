import {Characters} from "../components";
import {useNavigate} from "react-router-dom";
import {useName} from "../hooks/useName";

const CharactersPage = () => {
    const navigate=useNavigate()

    const {setName}=useName()
    const back =()=>{
        setName(null)
        navigate(-1)
    }
    return (
        <div>
            <button onClick={back}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};