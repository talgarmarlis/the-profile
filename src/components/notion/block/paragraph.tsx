import {Typography } from "antd";
import { ParagraphBlock} from '../interface/block';
import RichText from "./richText";

const { Paragraph } = Typography;


const NParagraph: React.FC<{ block: ParagraphBlock | any }> = ({ block }) => {
    return (
        <Paragraph>
            {block.paragraph.rich_text.map((rt: RichText, index:number) => (
                <RichText rt={rt} key={`block-paragraph-${block.id}-rt-${index}`}/>
            ))}
        </Paragraph>
    );
};

export default NParagraph