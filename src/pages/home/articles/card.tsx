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
export default function ArticleCard({articlePage}) {

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            style={{
                borderRadius: 10,
                background: 'no-repeat center',
                backgroundSize: 'cover',
                backgroundImage: `radial-gradient(rgba(230, 242, 238, 0.2), rgba(230, 242, 238, 0.9)), url(${getCoverUrl(articlePage)})`,
            }}
        >
            <Card
                bordered={false}
                hoverable
                style={{
                    paddingBottom: 20,
                    boxShadow: 'none',
                    backgroundColor: getCoverUrl(articlePage) ? 'rgb(230, 242, 238, 0.1)' : 'rgb(230, 242, 238)'
                }}
            >
                <Typography.Link href={`/articles/${articlePage.id}`}>
                <Row style={{marginBottom:15}}>
                    <Col span={18}>

                            <Typography.Title style={{margin: 0}} level={5}>
                                {getProperty(articlePage, "Name") && getProperty(articlePage, "Name").map((item:any) => (item.plain_text))}
                            </Typography.Title>
                            <Typography.Text disabled>{moment(articlePage.created_time).fromNow()}</Typography.Text>
                    </Col>
                    <Col span={6} style={{textAlign: 'right'}}>{getIcon(articlePage)}</Col>
                </Row>
                </Typography.Link>
                <div style={{maxWidth:400}}>
                    <Space size={[0, 'small']} wrap>
                        {getProperty(articlePage, "Tags") && getProperty(articlePage, "Tags").map((tag:any, index: any) => (
                            <Tag bordered={false} style={{borderRadius: 8}} color="rgba(46, 77, 66, 0.6)" key={`article-card-${articlePage.id}-tag-${index}`}>
                                {tag.name}
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