import {Col, Divider, Row, Space, notification} from "antd";
import {useEffect, useState} from "react";

import Bio from "./bio";
import Articles from "./articles";
import {notionService} from "../../services/notion";
import LatestCompendium from "./latest";

export default function Home() {

    const [articles, setArticles] = useState([]);
    const [compendiumArticles, setCompendiumArticles] = useState([]);

    const [api, contextHolder] = notification.useNotification();
    // @ts-ignore
    const openNotification = (data) => {
        api.open({
            message: 'Loaded',
            description: data,
        });
    };

    useEffect(() => {
        notionService.getArticleList().then(result => {
           setArticles(result.data.results)
       }).catch(err => {
           console.log(err)
       })


       notionService.getLatestCompendiumPages().then(result => {
        setCompendiumArticles(result.data.results)
        }).catch(err => {
            console.log(err)
        })
        
    }, []);

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            {contextHolder}
            <Bio/>
            <Row gutter={{
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col md={15} span={24}>
                    <Divider orientation="left">Latest Posts</Divider>
                    <Articles articles={articles}/>
                </Col>
                <Col md={9} span={24}>
                   <Divider orientation="left">Latest from compendium</Divider>
                   <LatestCompendium articles={compendiumArticles}/>
                </Col>
            </Row>
        </Space>
    );
}