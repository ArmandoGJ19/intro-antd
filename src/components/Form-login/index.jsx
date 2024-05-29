
import {Form, Input, Button, Card} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './FormLogin.css'
const Login = () => {
    const onFinish= (values)=>{
        console.log('Success:', values);
    }
    return(

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
                        remember:true,
                    }}

                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su usuario'
                        }
                        ]}
                    >
                        <Input prefix = {<UserOutlined/>} placeholder='Usuario'/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{
                            required: true,
                            message: 'Por favor ingrese su contraseña'
                        }
                        ]}
                    >
                        <Input.Password prefix = {<LockOutlined/>} placeholder='Password'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' className='login-form-buttton'>
                            Iniciar Sesión
                        </Button>
                    </Form.Item>
                    ¿Aún no tienes cuenta? <a href=''>Registrate</a>
                </Form>

            </Card>
        </>
    )
}

export default Login