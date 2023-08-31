import {Col, Row, Button, Layout, Content} from "antd";

export default function Auth(){
return(
    <Layout>
        <Button type="primary">
            Custom Style Button
        </Button>
        <Row gutter={[8, 48]}>
            <Col span={12}>qwerty</Col>
            <Col span={12}>qwerty</Col>
        </Row>
    </Layout>
)
}