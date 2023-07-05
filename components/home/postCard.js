import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import {Avatar, Button, Card, Col, Descriptions, Row, Space, Tag, Typography} from 'antd';
import {FaInstagram} from "react-icons/fa";
import moment from "moment";

const { Meta } = Card;

function getTitle(post){
    return getPropertyContent(post.properties.Name)
}

function getSubtitle(post){
    return getPropertyContent(post.properties.Subtitle)
}

function getPropertyContent(property){
    const type1 = property.type
    return getRTOContent(property[type1][0])
}

function getCoverUrl(page){
    if(page.cover)
        return page.cover[page.cover.type].url
    return null;
}

function getIcon(page){
    const {icon} = page
    console.log(page)
    if(icon) {
        if(icon[icon.type].url)
            return <Avatar src={icon[icon.type].url} />
        return <Avatar>{icon[icon.type]}</Avatar>
    }
    return null;
}

function getProperty(page, propName) {
    const {properties} = page;
    if(properties) {
        const property = properties[propName]
        if(property) {
            return property[property.type]
        }
    }
    return null;
}

export default function PostCard({postPage}) {

    return (
        <div style={{
            borderRadius: 10,
            background: 'no-repeat center',
            backgroundSize: 'cover',
            backgroundImage: `radial-gradient(rgba(230, 242, 238, 0.2), rgba(230, 242, 238, 0.9)), url(${getCoverUrl(postPage)})`,
        }}>
            <Card
                bordered={false}
                hoverable
                style={{
                    paddingBottom: 20,
                    boxShadow: 'none',
                    backgroundColor: getCoverUrl(postPage) ? 'rgb(230, 242, 238, 0.1)' : 'rgb(230, 242, 238)'
                }}
            >
                <Row style={{marginBottom:15}}>
                    <Col span={18} align="left">
                        <Typography.Title style={{margin: 0}} level={5}>
                            {getProperty(postPage, "Name") && getProperty(postPage, "Name").map((item, index) => (item.plain_text))}
                        </Typography.Title>
                        <Typography.Text disabled>{moment(postPage.created_time).fromNow()}</Typography.Text>
                    </Col>
                    <Col span={6} align="right">{getIcon(postPage)}</Col>
                </Row>
                <div style={{maxWidth:400}}>
                    <Space size={[0, 'small']} wrap>
                        {getProperty(postPage, "Tags") && getProperty(postPage, "Tags").map((tag, index) => (
                            <Tag bordered={false} style={{borderRadius: 8}} color="rgba(46, 77, 66, 0.6)">
                                {tag.name}
                            </Tag>
                        ))}
                    </Space>
                    {getProperty(postPage, "Subtitle") && getProperty(postPage, "Subtitle").map((item, index) => (
                        <p style={{marginTop: 10}}>{item.plain_text}</p>
                    ))}
                </div>
            </Card>
        </div>
    );
}