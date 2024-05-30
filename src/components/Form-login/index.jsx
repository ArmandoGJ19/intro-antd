
import {Form, Input, Button, Card} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import './FormLogin.css'
import {useState} from "react";
const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const navigate = useNavigate();

    const user = {
        username: 'admin',
        password: 'admin'
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoginError(true);
    };

    const onFinish = (values) => {
        const { username, password } = values;
        if (username === user.username && password === user.password) {
            setLoginError(false);
            navigate('/');
        } else {
            setLoginError(true);
        }
    };

    return (
        <>
            <Card
                title="Bienvenido de nuevo"
                bordered={false}
                className='responsive-card'
            >
                <Form
                    name="normal-login"
                    className='login-form'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Usuario' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }]}
                    >
                        <Input.Password prefix={<LockOutlined />} placeholder='Contraseña' />
                    </Form.Item>

                    {loginError && <div className="login-error">Usuario o contraseña incorrectos</div>}

                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='login-form-button'>
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <a href='/register'>Regístrate</a>
                </Form>
            </Card>
        </>
    );
};

export default Login;