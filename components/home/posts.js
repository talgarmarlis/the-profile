import PostCard from "./postCard";
import {Space} from "antd";




export default function Posts({postList}) {
    return (
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            {postList.map((postPage, index) => (
                <PostCard postPage={postPage} key={`post_card_key_${index} `}/>
            ))}
        </Space>
    );
}