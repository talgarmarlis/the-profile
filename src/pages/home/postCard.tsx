import {Avatar, Button, Card, Col, Row, Space, Tag, Typography} from 'antd';
import moment from "moment";

const { Meta } = Card;

// @ts-ignore
function getCoverUrl(page){
    if(page.cover)
        return page.cover[page.cover.type].url
    return null;
}

// @ts-ignore
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

// @ts-ignore
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

// @ts-ignore
export default function PostCard({postPage}) {

    // @ts-ignore
    // @ts-ignore
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
                    <Col span={18}>
                        <Typography.Title style={{margin: 0}} level={5}>
                            {getProperty(postPage, "Name") && getProperty(postPage, "Name").map((item:any) => (item.plain_text))}
                        </Typography.Title>
                        <Typography.Text disabled>{moment(postPage.created_time).fromNow()}</Typography.Text>
                    </Col>
                    <Col span={6}>{getIcon(postPage)}</Col>
                </Row>
                <div style={{maxWidth:400}}>
                    <Space size={[0, 'small']} wrap>
                        {getProperty(postPage, "Tags") && getProperty(postPage, "Tags").map((tag:any) => (
                            <Tag bordered={false} style={{borderRadius: 8}} color="rgba(46, 77, 66, 0.6)">
                                {tag.name}
                            </Tag>
                        ))}
                    </Space>
                    {getProperty(postPage, "Subtitle") && getProperty(postPage, "Subtitle").map((item:any) => (
                        <p style={{marginTop: 10}}>{item.plain_text}</p>
                    ))}
                </div>
            </Card>
        </div>
    );
}