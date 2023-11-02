import {Outlet, useNavigate} from "react-router-dom";
import {Header} from "../components";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};