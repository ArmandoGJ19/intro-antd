import React, { useState } from 'react';
import { Button, Form, Input, Card } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { notification } from 'antd';
import authService from "../../services/auth.js";
import { validatePassword } from "../../utils/validations.js";

const FormRegister = () => {

    const [registerError, setRegisterError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

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

    const registerUser = async (values) => {
        try {
            const response = await authService.register(values.name, values.password, values.email, values.lastname);
            if (response && response.data) {
                console.log(response);
                openNotification();
                setIsLoading(false);
                setTimeout(
                    () => {
                        navigate('/Login');
                    },
                    2000
                );
            } else {
                console.error("Error en el registro, respuesta inesperada");
                setRegisterError(true);
            }
        } catch (error) {
            console.error('Error during login:', error);
            console.log(error);
            setRegisterError(true);
            setIsLoading(false);
        }
    }

    const onFinish = (values) => {
        console.log('Success:', values);
        setIsLoading(true);
        registerUser(values);
    };

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
