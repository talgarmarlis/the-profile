import {Avatar, Card, Col, Row, Space} from "antd";
import {
    EditOutlined,
    EllipsisOutlined,
    GithubFilled,
    InstagramFilled,
    LinkedinFilled,
    SettingOutlined
} from "@ant-design/icons";

const { Meta } = Card;
export default function Bio() {
    return (
        <Row gutter={{
            sm: 16,
            md: 24,
            lg: 32,
        }}>
            <Col md={12} span={24}>
                <Card
                    bordered={false}
                    style={{ marginBottom: 10, boxShadow: 'none' }}
                >
                    <Meta
                        avatar={<Avatar size={150} src="/images/beach.jpg" />}
                        title="Talgar MARLIS UULU"
                        description="Software Development Engineer"
                    />
                    <div style={{textAlign: 'center', margin: 20}}>
                        <Space size={50}>
                            <InstagramFilled key="setting" />
                            <GithubFilled key="edit" />
                            <LinkedinFilled key="ellipsis" />
                        </Space>
                    </div>
                </Card>
            </Col>
            <Col md={12} span={24}>
                <Card title="Card title" bordered={false}>
                    Card content
                </Card>
            </Col>
        </Row>
    );
}