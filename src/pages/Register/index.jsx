import React from 'react';
import LayoutComponent from "../../components/Layout/index.jsx";
import Imagen from "../../components/Form-login/Imagen.jsx";
import FormRegister from "../../components/FormRegister/index.jsx";
// import FormLogin from "../../components/Form-login/index.jsx";
// import FormLogin from "../../components/Form-login/index.jsx";

const Register = () => {
    // console.log(Imagen);
    return (
        <LayoutComponent
            leftColSize={{xs:24, sm:12, md:16, lg:18}}
            rightColSize={{xs:24, sm:12, md:8, lg: 6}}
            leftContent={<Imagen />}
            rightContent={<FormRegister />}

        />
        // <p>aqui va algo</p>
    );
};

export default Register;