
import {useRoutes} from "react-router-dom";
import Login from "../pages/Login/Login.jsx";
import Home from "../pages/Home/index.jsx";
import Register from "../pages/Register/index.jsx";
import {useAuth} from "../hooks/useAuth.js";
// import Register from "../pages/Register/index.jsx";

const AppRoutes = ()=>{
    const {user} = useAuth();
    let routes = useRoutes([
        {path:"/", element: user ? <Home/> : <Login/>},
        {path:"/login", element: <Login/>},
        {path:"/register", element: <Register/>},
    ]
   );
    return routes;
}
export default AppRoutes