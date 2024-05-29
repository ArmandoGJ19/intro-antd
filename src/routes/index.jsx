
import {useRoutes} from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/index.jsx";

const AppRoutes = ()=>{
    let routes = useRoutes([
        {path:"/", element: <Home/>},
        {path:"/login", element: <Login/>},
    ]
   );
    return routes;
}
export default AppRoutes