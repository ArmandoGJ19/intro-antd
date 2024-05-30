import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './register.css';
import axios from "axios";
// import routes from '/src/components/routes.js';

const FormRegister = () => {

    const [registerError, setRegisterError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Función para mostrar los errores en el formulario
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setRegisterError(true);
    };

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

    const registerUser = (values) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTk3NDMzMWM2MTc0MjcyZDY1NDUwZiIsIm5hbWUiOiJrYXJsYSBlcmlrYSIsImxhc3RuYW1lIjoicm9ibGVzIHZhcmdhcyIsImlhdCI6MTcxNzAzOTc3OCwiZXhwIjoxNzE3MTI2MTc4fQ.0aUZvLOZPBDi_S2rKIfZADl2AcisWr1nn0r9KrU_CVI'
        axios.post('https://evaluacion-2.vercel.app/api/users/', {
            name: values.name,
            password: values.password,
            email: values.email,
            lastname: values.lastname
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                console.log(response);
                setIsLoading(false);
                // Aquí puedes añadir cualquier acción adicional en caso de éxito,
                // como redirigir al usuario a la página de inicio de sesión.
            })
            .catch((error) => {
                console.log(error);
                setRegisterError(true);
                setIsLoading(false);
            });
    }

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
