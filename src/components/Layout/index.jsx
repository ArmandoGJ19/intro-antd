
import {Col, Row} from "antd";
import './LayoutComponent.css'

const LayoutComponent = () => {
    return (
        <div className="Layout-container">
            <Row>
                <Col xs={0} sd={0} md={14} lg={6}>
                    <div className="content-left">
                        <h1 className="title"> Contenido de la Izquierda</h1>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={20} lg={18}>
                    <div className="content-right">
                        <h1 className="title"> Contenido de la Derecha</h1>
                    </div>
                </Col>
            </Row>
        </div>

    )
}
export default LayoutComponent;