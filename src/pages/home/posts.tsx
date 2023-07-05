import PostCard from "./postCard";
import {Space} from "antd";




// @ts-ignore
export default function Posts({articles}) {
    return (
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            {articles.map((articlePage:any, index:any) => (
                <PostCard postPage={articlePage} key={`post_card_key_${index} `}/>
            ))}
        </Space>
    );
}