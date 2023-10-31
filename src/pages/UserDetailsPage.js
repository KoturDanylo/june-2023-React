import {UserDetails} from "../components/UsersContainer/UserDetails";
import {Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {usersService} from "../services/usersService";

const UserDetailsPage = () => {

    const {userId}= useParams();

    const [user,setUser]= useState(null)

    useEffect(()=>{
        usersService.getById(userId).then(({data})=>setUser(data))
    },[userId])
    return (
        <div>
            {user && <UserDetails user={user}/>}
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};