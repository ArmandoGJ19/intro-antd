import {Button} from "antd";
import {useAuth} from "../../hooks/useAuth";
const Home = () => {
    const {user,logout} = useAuth();
    return (
        <div>
            <h1>Hola {user?.username}</h1>
            <Button  type="primary" size="large" onClick={() => logout()}>Primary Button</Button>
        </div>
    );
}

export default Home;