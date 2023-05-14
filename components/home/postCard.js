import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

function getTitle(post){
    return getPropertyContent(post.properties.Name)
}

function getSubtitle(post){
    return getPropertyContent(post.properties.Subtitle)
}

function getPropertyContent(property){
    const type1 = property.type
    return getRTOContent(property[type1][0])
}

function getRTOContent(rto){
    const rtoType = rto.type
    return rto[rtoType].content
}

function getCoverUrl(cover){
    return cover[cover.type].url
}

export default function PostCard({post}) {
    return (
        <Card
            style={{ marginBottom: 10 }}
            cover={
                <img
                    alt="example"
                    src={getCoverUrl(post.cover)}
                />
            }
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title={getTitle(post)}
                description={getSubtitle(post)}
            />
        </Card>
    );
}