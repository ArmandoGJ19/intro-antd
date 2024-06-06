
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/index.jsx';
import {ConfigProvider} from "antd";
import {AuthProvider} from "./context/AuthContext.jsx";

function App() {
    return (
        <AuthProvider>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#7A83E1'
                    }
                }}
            >
                <BrowserRouter>
                    <AppRoutes></AppRoutes>
                </BrowserRouter>

            </ConfigProvider>
        </AuthProvider>
    )
}
export default App
