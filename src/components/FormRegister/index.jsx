import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './register.css';
import axios from "axios";
import { notification } from 'antd';

// import routes from '/src/components/routes.js';

const FormRegister = () => {

    const [registerError, setRegisterError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true);
    };
    const openNotification = () => {
        notification.success({
            message: 'Registro exitoso',
            description: 'El usuario ha sido registrado correctamente.',
            placement: 'topRight',
        });
    };
    const registerUser = (values) => {
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3MzllMWM2MTc0MjcyZDY1NDUwYSIsIm5hbWUiOiJBbmEgU29sIiwibGFzdG5hbWUiOiJBcnRlYWdhIFJpdmVyYSIsImlhdCI6MTcxNzA4NTEzOSwiZXhwIjoxNzE3MTcxNTM5fQ.je8xRRuMcWZ5_uK-9phob8HwkR7IAryg2fRZR1tyKFY'
        axios.post('https://evaluacion-2.vercel.app/api/users/', {
            name: values.name,
            password: values.password,
            email: values.email,
            lastname: values.lastname,
            roles: ['servicios_escolares']
        }, {
            headers: {
                'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3NDMzMWM2MTc0MjcyZDY1NDUwZiIsIm5hbWUiOiJrYXJsYSBlcmlrYSIsImxhc3RuYW1lIjoicm9ibGVzIHZhcmdhcyIsImlhdCI6MTcxNzA4ODU3NCwiZXhwIjoxNzE3MTc0OTc0fQ.akzuDK4u3Kc-FZO1uMmQmzmk5a1MxMZWq6BbbVDLa3o'
            }
        })
            .then((response) => {
                console.log(response);
                openNotification();
                setIsLoading(false);
                setTimeout(
                    () => {
                        navigate('/Login');
                    },
                    2000
                )
                // navigate('/Login');
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(true);
                setIsLoading(false);
            });
    }
    // Función para validar el usuario y contraseña
    const onFinish = (values) => {
        console.log('Success:', values);
        setIsLoading(true);
        registerUser(values);
    };

    const validatePassword = ({ getFieldValue }) => ({
        validator(_, value) {
            if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Las contraseñas no coinciden.'));
        },
    });

    return (
        <Card
            title="Registrate para iniciar sesión"
            bordered={false}
            className="responsive-card"
        >
            <Form
                name="normal_login"
                className="login_form"
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su usuario."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Usuario" />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su correo."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="lastname"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su apellido."
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="lastname" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Por favor ingrese su contraseña."
                        }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Contraseña"
                    />
                </Form.Item>

                <Form.Item
                    name="password-repeat"
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: "Por favor confirme su contraseña.",
                        },
                        validatePassword
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Confirmar contraseña"
                    />
                </Form.Item>

                {registerError && <p className="error-message">Error al registrar el usuario. Inténtalo de nuevo.</p>}

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={isLoading}>
                        Registrarse
                    </Button>
                </Form.Item>
                Ya tienes tu cuenta <a href="/Login">Inicia sesión</a>
            </Form>
        </Card>
    );
};

export default FormRegister;
