import {Image, Col, Row, Space, Typography, List, Tooltip, Button} from "antd";
import {
    ProfileTwoTone,
    CodeTwoTone,
    AppstoreTwoTone,
    SafetyCertificateTwoTone,
    CrownTwoTone,
} from "@ant-design/icons";
import {FaEnvelope, FaGithub, FaInstagram, FaLinkedinIn, FaRegEnvelope, FaTelegramPlane} from "react-icons/fa";

const { Title, Paragraph } = Typography

const data = [
    {
        title: 'Resume Review Specialist',
        description: 'Get valuable insights on your resume and enhance your chances of securing desirable positions.',
        icon: <SafetyCertificateTwoTone />
    },
    {
        title: 'Tech Career Coach',
        description: 'Get insights on interview preparation, skill development, and strategies for a successful job search to obtain technical positions in top-tier companies.',
        icon: <CrownTwoTone/>
    },
    {
        title: 'Code Review Expert and Peer Mentor',
        description: 'Promote your code quality with constructive feedback and adherence to best practices.',
        icon: <CodeTwoTone/>
    },
    {
        title: 'Technical Advisor for Service and Language Decisions',
        description: 'Optimize your tech stack with strong architecture design, technology selection, and recommended best practices.',
        icon: <AppstoreTwoTone/>
    },
    {
        title: 'Professional Resume Template Provider',
        description: 'Present your skills and experiences in an aesthetically pleasing and effective manner with professionally designed resume templates.',
        icon: <ProfileTwoTone/>
    },
];

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';


export default function Bio() {
    return (
        <Row gutter={{
            sm: 16,
            md: 24,
            lg: 32,
        }}>
            <Col md={12} span={24}>
                <Image style={{borderRadius: 10}} width={250} preview={false} src="/images/avatar.png" alt="talgar-profile-photo" />
                <Title level={3}>Hey there!</Title>
                <Paragraph>
                    Welcome to personal website of Talgar, a software geek working at Amazon. I'll be sharing cool tech posts and offering my advice on job hunts and software engineering choices. Join me on this digital adventure, and let's rock the tech world!
                </Paragraph>
                <Space size={20} wrap >
                    <Tooltip title="talgarmarlis@gmail.com">
                        <Button shape="circle" style={{display: 'flex'}} icon={<FaRegEnvelope  style={{margin: 'auto'}} size={18} />} href="mailto:talgarmarlis@gmail.com" />
                    </Tooltip>
                    <Tooltip title="linkedin.com/in/talgarmarlis/">
                        <Button  shape="circle" style={{display: 'flex'}} icon={<FaLinkedinIn style={{margin: 'auto'}} size={18} />} href="https://www.linkedin.com/in/talgarmarlis" />
                    </Tooltip>
                    <Tooltip title="@talgarmarlis">
                        <Button  shape="circle" style={{display: 'flex'}} icon={<FaGithub style={{margin: 'auto'}} size={18} />} href="https://instagram.com/talgarmarlis" />
                    </Tooltip>
                    <Tooltip title="github.com/talgarmarlis">
                        <Button  shape="circle" style={{display: 'flex'}} icon={<FaInstagram style={{margin: 'auto'}} size={18} />} href="https://github.com/talgarmarlis" />
                    </Tooltip>
                    <Tooltip title="t.me/talgarmarlis">
                        <Button  shape="circle" style={{display: 'flex'}} icon={<FaTelegramPlane style={{margin: 'auto'}} size={18} />} href="https://t.me/talgarmarlis" />
                    </Tooltip>
                </Space>
            </Col>
            <Col md={12} span={24}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item style={{border: 'none'}}>
                            <List.Item.Meta
                                // avatar={<Avatar style={{ backgroundColor: '#fff' }} size="large" icon={item.icon} />}
                                title={item.title}
                                description={<p style={{fontSize: 12}}>{item.description}</p>}
                            />
                        </List.Item>
                    )}
                />
            </Col>
        </Row>
    );
}