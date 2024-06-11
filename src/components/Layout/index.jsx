
import {Col, Row} from "antd";
import './LayoutComponent.css'

const LayoutComponent = ({leftColSize, rightColSize, leftContent, rightContent}) => {
    // console.log('LeftColSize:', leftColSize);
    return (
        <div className="Layout-container">
            <Row>
                <Col xs={leftColSize.xs} sm={leftColSize.sm} md={leftColSize.md} lg={leftColSize.lg}>
                    <div className="content-left">
                        {leftContent}
                    </div>
                </Col>
                <Col xs={rightColSize.xs} sm={rightColSize.sm} md={rightColSize.md} lg={rightColSize.lg}>
                    <div className="content-right">
                        {rightContent}
                    </div>
                </Col>
            </Row>
        </div>

    )
}
export default LayoutComponent;