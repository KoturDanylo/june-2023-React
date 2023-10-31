
import {PostDetails} from "../components/PostsContainer/PostDetails";
import {useLoaderData} from "react-router-dom";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostDetails post={data}/>
        </div>
    );
};


export {PostDetailsPage};