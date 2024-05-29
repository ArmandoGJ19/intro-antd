import LayoutComponent from "../../components/Layout/index.jsx";
import Imagen from "../../components/Form-login/Imagen.jsx";
import FormLogin from "../../components/Form-login/index.jsx";


const Login = () => {
    return (
        <LayoutComponent
            leftColSize={{xs:0, sm:0, md:8, lg:6}}
            rightColSize={{xs:0, sm:24, md:16, lg: 18}}
            leftContent={<Imagen />}
            rightContent={<FormLogin />}

        />
    );
}

export default Login;