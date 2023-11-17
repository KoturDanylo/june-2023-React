import {useEffect} from "react";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../../redux";


const Episodes = ({page}) => {

    const {episodes}= useSelector(state=>state.episodes)
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(episodeActions.getAll({page}))
    }, [page]);

    return (
        <div className={css.Episodes}>
            {episodes.map(episode=><Episode key={episode.id} episode={episode}/>)}

        </div>
    );
};

export {Episodes};