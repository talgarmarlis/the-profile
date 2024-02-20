import {PAGE} from "../interface/page";
import {Avatar, Row, Tag, Typography} from 'antd';
import moment from "moment/moment";
import RichText from "../block/richText";
import Topbar from "../../topbar";
import Container from "../../layout/container";
import Section from "../../layout/section";

// @ts-ignore
export function getIcon(page){
    const {icon} = page
    // console.log(page)
    if(icon) {
        if(icon[icon.type].url)
            return <Avatar src={icon[icon.type].url} size="small" />
        return <Avatar size="small">{icon[icon.type]}</Avatar>
    }
    return null;
}

const PageCover: React.FC<{ page: PAGE | any, color?: string }> = ({ page, color ='230, 242, 238' }) => {

    const coverUrl = page.cover ? page.cover[page.cover.type].url : null;
    return <div
        style={{
            background: 'no-repeat center',
            backgroundSize: 'cover',
            backgroundImage: `url(${coverUrl})`,
        }}
    >
        <div
            style={{
                paddingBottom: 20,
                boxShadow: 'none',
                backgroundColor: coverUrl ? `rgb(${color}, 0.6)` : `rgb(${color})`
            }}
        >
            <Topbar />
            <Container>
                <Section>
                    <Row style={{marginBottom:15, textAlign: 'center'}}>
                        <Typography.Title style={{margin: 0}} level={1}>
                            { page.properties.Name &&
                                page.properties.Name.title.map((rt: RichText, index:number) => (
                                    <RichText rt={rt} key={`page-title-${page.id}-rt-${index}`}/>
                                ))
                            }
                            { page.properties.Page &&
                                page.properties.Page.title.map((rt: RichText, index:number) => (
                                    <RichText rt={rt} key={`page-title-${page.id}-rt-${index}`}/>
                                ))
                            }
                        </Typography.Title>
                    </Row>
                    <Row style={{marginBottom:15, textAlign: 'center'}}>
                        <Typography.Title style={{margin: 0}} level={1}>
                            { page.properties.title &&
                                page.properties.title.title.map((rt: RichText, index:number) => (
                                    <RichText rt={rt} key={`page-title-${page.id}-rt-${index}`}/>
                                ))
                            }
                        </Typography.Title>
                    </Row>

                    <Row style={{marginBottom:15, textAlign: 'center'}}>
                        <Typography.Text disabled>{moment(page.created_time).fromNow()}</Typography.Text>
                    </Row>

                    <Row style={{marginBottom:10, textAlign: 'center'}}>
                        {page.properties.Tags && page.properties.Tags.multi_select.map((tag:any, index: any) => (
                            <Tag bordered={false} style={{borderRadius: 8, fontSize:12, backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)'}} color={`rgba(${color}, 0.3)`} key={`page-detail-${page.id}-tag-${index}`}>
                                <span>{tag.name.toUpperCase()}</span>
                            </Tag>
                        ))}
                    </Row>

                    <Row style={{marginBottom:10, textAlign: 'center'}}>

                        <Typography.Text>
                            {page.properties.Subtitle && page.properties.Subtitle.rich_text.map((rt:any, index:any) => (
                                <RichText rt={rt} key={`page-title-${page.id}-rt-${index}`}/>
                            ))}
                        </Typography.Text>
                    </Row>
                </Section>
            </Container>
        </div>
    </div>
};

export default PageCover