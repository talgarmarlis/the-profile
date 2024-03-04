import {Avatar, Card, Row, Space, Tag, Typography} from 'antd';

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
export default function CPageCard({articlePage, color}) {

    // @ts-ignore
    // @ts-ignore
    return (
        <Card 
                hoverable
            >
                <Typography.Link href={`/#/articles/${articlePage.id}?color=${color}`}>
                <Row style={{marginBottom:5}}>
                {getIcon(articlePage)}
                <Typography.Paragraph style={{margin: 0, fontSize:18, paddingLeft: 5}} >
                            {getProperty(articlePage, "Name") && getProperty(articlePage, "Name").map((item:any) => (item.plain_text))}
                            {getProperty(articlePage, "Page") && getProperty(articlePage, "Page").map((item:any) => (item.plain_text))}
                        </Typography.Paragraph>
                </Row>
                </Typography.Link>
                <div style={{maxWidth:400}}>
                    <Space size={[0, 'small']} wrap>
                        {getProperty(articlePage, "Tags") && getProperty(articlePage, "Tags").map((tag:any, index: any) => (
                            <Tag bordered={false} style={{borderRadius: 8, fontSize:8, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)'}} color={`rgba(${color}, 1)`} key={`article-card-${articlePage.id}-tag-${index}`}>
                                <span>{tag.name.toUpperCase()}</span>
                            </Tag>
                        ))}
                    </Space>
                </div>
            </Card>
    );
}