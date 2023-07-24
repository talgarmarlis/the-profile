import {Typography } from "antd";
import {QuoteBlock} from '../interface/block';
import RichText from "./richText";

const { Paragraph } = Typography;


const Quote: React.FC<{ block: QuoteBlock | any }> = ({ block }) => {
    return (
        <Paragraph>
            <blockquote style={{padding: 15, borderRadius: 5}}>
                {block.quote.rich_text.map((rt: RichText, index: number) => (
                    <RichText rt={rt} key={`block-callout-${block.id}-rt-${index}`}/>
                ))}
            </blockquote>
        </Paragraph>
    );
};

export default Quote