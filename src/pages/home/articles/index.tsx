import {Space} from "antd";
import ArticleCard from "./card";




// @ts-ignore
export default function Articles({articles}) {
    return (
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            {articles.map((articlePage:any, index:any) => (
                <ArticleCard articlePage={articlePage} key={`article-card-key-${index}`}/>
            ))}
        </Space>
    );
}