import {Card, Col, Divider, Row, Space, Typography} from "antd";
import Bio from "./bio";
import Posts from "./posts";
import Newsletter from "./newsletter";
import {getPostList} from "../../lib/notion";
import {useEffect, useState} from "react";

export default function Home() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
       getPostList().then(result => {
           console.log(result)
           // @ts-ignore
           setArticles(result)
       })
    }, []);

    return (
        <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
            <Bio/>
            <Row gutter={{
                sm: 16,
                md: 24,
                lg: 32,
            }}>
                <Col md={15} span={24}>
                    <Divider orientation="left">Latest Posts</Divider>
                    <Posts articles={articles}/>
                </Col>
                {/*<Col md={9} span={24}>*/}
                {/*    <Divider orientation="left">Newsletter</Divider>*/}
                {/*    <Newsletter/>*/}
                {/*    <Newsletter/>*/}
                {/*    <Newsletter/>*/}
                {/*    <Newsletter/>*/}
                {/*</Col>*/}
            </Row>
        </Space>
    );
}