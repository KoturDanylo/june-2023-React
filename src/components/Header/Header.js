import css from './Header.module.css'
import {useSelector} from "react-redux";


const Header = () => {
    const  {currentEpisode}=useSelector(state => state.episodes);

    return (
        <div className={css.Header}>
            {

                    currentEpisode ?
                        <h1>{currentEpisode}</h1>
                        :
                        <h1>Rick & Morty</h1>

            }

        </div>
    );
};

export {Header};