import {useSelector} from "react-redux";
import css from "./Episodes/Episodes.module.css";
import {useSearchParams} from "react-router-dom";

const EpisodePagination = () => {

    const {prevPage,nextPage}=useSelector(state=>state.episodes);
   const [,setQuery] =useSearchParams();

   const prev=()=>{
       setQuery(prev1 => {
           prev1.set('page', (+prev.get('page')-1).toString())
           return prev1
       })
   }

    const next=()=>{
        setQuery(prev1 => {
            prev1.set('page', (+prev.get('page')+1).toString())
            return prev1
        })    }
    return (
        <div className={css.buttons}>
            <button disabled={!prevPage} onClick={prev}>prev</button>
            <button disabled={!nextPage} onClick={next}>next</button>

        </div>
    );
};

export {EpisodePagination};