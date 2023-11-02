import css from './Header.module.css'
import {useName} from "../../hooks/useName";


const Header = () => {

    const {name}= useName()
    return (
        <div className={css.Header}>
            {
                name?
                    <h1>{name}</h1>
                    :
                    <h1>Rick & Morty</h1>

            }

        </div>
    );
};

export {Header};