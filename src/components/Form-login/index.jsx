import { Form, Input, Button, Card, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './FormLogin.css';
import authService from '/src/services/auth';
import { useAuth } from '/src/hooks/useAuth';

const Login = () => {
    const [loginError, setLoginError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const useAuthData = useAuth();
    const { login } = useAuthData;

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoginError(true);
    };

    const onFinish = async (values) => {
        setIsLoading(true);
        try {
            const response = await authService.loginF(values.email, values.password);
            if (response && response.data) {
                console.log('Login successful:', response.data);
                setIsLoading(false);
                setLoginError(false);
                // Almacena el token en el localStorage o en el contexto de la aplicación
                localStorage.setItem('token', response.data.token);
                login(response.data.token);
                notification.success({
                    message: 'Inicio de sesión exitoso',
                    description: 'Bienvenido de nuevo.',
                    placement: 'topRight',
                });

                navigate('/'); // Redirige a la página de inicio
            } else {
                console.error("Error en el inicio de sesión, respuesta inesperada");
                setLoginError(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
            setIsLoading(false);
            setLoginError(true);
        } finally {
            setIsLoading(false);
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
                        name="email"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su email'
                        }]}
                    >
                        <Input prefix={<UserOutlined />} placeholder='Email' />
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
                        <Button type='primary' htmlType='submit' className='login-form-button' loading={isLoading}>
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
