import {DatePicker} from "antd";
import {ConfigProvider} from "antd";
import './App.css'
function App() {


    return (

        <ConfigProvider theme={{token: {colorPrimary: '#7AB3E1'}}}>

            <DatePicker/>
        </ConfigProvider>
    )
}

export default App
