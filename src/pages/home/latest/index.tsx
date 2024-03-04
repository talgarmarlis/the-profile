import {Space} from "antd";
import CPageCard from "./card";


const colors = ['230, 242, 238', '230, 236, 242', '242, 230, 230', '242, 230, 230', '242, 230, 230', '242, 238, 230', '242, 232, 230']
// @ts-ignore
export default function LatestCompendium({articles}) {
    return (
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            {articles.map((articlePage:any, index:any) => (
                <CPageCard articlePage={articlePage} key={`article-card-key-${index}`} color={colors[index % colors.length]} />
            ))}
        </Space>
    );
}