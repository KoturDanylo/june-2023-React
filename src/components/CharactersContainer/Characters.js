import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {Character} from "./Character";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux";

const Characters = () => {
    const {ids} = useParams();
    const dispatch = useDispatch()

    const {characters}=useSelector(state => state.characters)

    useEffect(() => {
        dispatch(characterActions.getByIds({ids}))
    }, [ids])


    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};