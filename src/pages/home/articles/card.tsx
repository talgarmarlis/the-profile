import {Avatar, Card, Col, Row, Space, Tag, Typography} from 'antd';
import moment from "moment";

// @ts-ignore
function getCoverUrl(page){
    if(page.cover)
        return page.cover[page.cover.type].url
    return null;
}

// @ts-ignore
function getIcon(page){
    const {icon} = page
    // console.log(page)
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
export default function ArticleCard({articlePage, color}) {

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            style={{
                borderRadius: 10,
                background: 'no-repeat center',
                backgroundSize: 'cover',
                backgroundImage: `radial-gradient(rgba(${color}, 0.2), rgba(${color}, 0.9)), url(${getCoverUrl(articlePage)})`,
            }}
        >
            <Card
                bordered={false}
                hoverable
                style={{
                    boxShadow: 'none',
                    backgroundColor: getCoverUrl(articlePage) ? `rgb(${color}, 0.4)` : `rgb(${color})`
                }}
            >
                <Typography.Link href={`/#/articles/${articlePage.id}?color=${color}`}>
                <Row style={{marginBottom:30}}>
                    <Col span={18}>
                        <Typography.Title style={{margin: 0}} level={5}>
                            {getProperty(articlePage, "Name") && getProperty(articlePage, "Name").map((item:any) => (item.plain_text))}
                            {getProperty(articlePage, "Page") && getProperty(articlePage, "Page").map((item:any) => (item.plain_text))}
                        </Typography.Title>
                    </Col>
                    <Col span={6} style={{textAlign: 'right'}}><Typography.Text disabled>{moment(articlePage.created_time).fromNow()}</Typography.Text></Col>
                </Row>
                </Typography.Link>
                <div style={{maxWidth:400}}>
                    <Space size={[0, 'small']} wrap>
                        {getProperty(articlePage, "Tags") && getProperty(articlePage, "Tags").map((tag:any, index: any) => (
                            <Tag bordered={false} style={{borderRadius: 8, fontSize:12, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)'}} color={`rgba(${color}, 0.5)`} key={`article-card-${articlePage.id}-tag-${index}`}>
                                <span>{tag.name.toUpperCase()}</span>
                            </Tag>
                        ))}
                    </Space>
                    {getProperty(articlePage, "Subtitle") && getProperty(articlePage, "Subtitle").map((item:any, index:any) => (
                        <p style={{marginTop: 10}} key={`article-card-${articlePage.id}-subtitle-${index}`} >{item.plain_text}</p>
                    ))}
                </div>
            </Card>
        </div>
    );
}