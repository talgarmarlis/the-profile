import {Typography } from "antd";
import {BlockType, Heading1Block, Heading2Block, Heading3Block} from '../interface/block';
import RichText from "./richText";

const { Title } = Typography;


const Heading: React.FC<{ block: Heading1Block | Heading2Block | Heading3Block | any }> = ({ block }) => {
    return (
        <Title level={block.type === BlockType.Heading1 ? 2 : block.type === BlockType.Heading2 ? 3 : block.type === BlockType.Heading3 ? 4 : 5}>
            {block[block.type].rich_text.map((rt: RichText, index:number) => (
                <RichText rt={rt} key={`block-heading-${block.id}-rt-${index}`}/>
            ))}
        </Title>
    );
};

export default Heading