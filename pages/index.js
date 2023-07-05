import {Card, Col, Divider, Row, Space, Typography} from "antd";
import Bio from "../components/home/bio";
import Posts from "../components/home/posts";
import Newsletter from "../components/home/newsletter";
import {getPostList} from "../lib/notion";

export async function getServerSideProps() {
    console.log("starting")
    const data = await getPostList()
    console.log(data)
    return {
        props: {
            postList: data.results,
        },
    };
}

export default function Home({postList}) {
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
                    <Posts postList={postList}/>
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