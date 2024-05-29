
import './App.css'
import LayoutComponent from "./components/Layout/index.jsx";
import Login from "./components/Form-login/index.jsx";
import Imagen from "./components/Form-login/Imagen.jsx";
function App() {


    return (
    <LayoutComponent
    leftColSize={{xs:24,sm:12,md:8,lg:6}}
    rightColSize={{xs:24,sm:12,md:16,lg:18}}
    leftContent={<Imagen />}
    rightContent={<Login />}
    />
    )
}

export default App
