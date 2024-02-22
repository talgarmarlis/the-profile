import {Typography } from "antd";
import {QuoteBlock} from '../interface/block';
import RichText from "./richText";

const { Paragraph } = Typography;


const Code: React.FC<{ block: QuoteBlock | any }> = ({ block }) => {
    return (
        <Paragraph>
            <pre style={{padding: 15, borderRadius: 5, overflow:"auto"}}>
                {block.code.rich_text.map((rt: RichText, index: number) => (
                    <RichText rt={rt} key={`block-callout-${block.id}-rt-${index}`}/>
                ))}
            </pre>
        </Paragraph>
    );
};

export default Code