import {createBrowserRouter, Navigate} from "react-router-dom";
import {Mainlayout} from "./layouts";
import {CarsPage} from "./pages";

 const router=createBrowserRouter([
    {path:'', element:<Mainlayout/>, children:[
            {index:true, element:<Navigate to={'cars'}/>},
            {path: 'cars', element:<CarsPage/>}
        ]}
]);

 export {
     router
 }