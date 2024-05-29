
import {Col, Row} from "antd";
import './LayoutComponent.css'
import Imagen from "../Form-login/Imagen.jsx";
import FormLogin from "../Form-login/index.jsx";
const LayoutComponent = () => {
    return (
        <div className="Layout-container">
            <Row>
                <Col xs={0} sd={0} md={14} lg={6}>
                    <div className="content-left">
                        <Imagen/>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={20} lg={18}>
                    <div className="content-right">
                        <FormLogin/>
                    </div>
                </Col>
            </Row>
        </div>

    )
}
export default LayoutComponent;