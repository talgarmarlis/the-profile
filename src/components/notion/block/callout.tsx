import {Typography } from "antd";
import {CalloutBlock} from '../interface/block';
import RichText from "./richText";
import NIcon from "./icon";

const { Paragraph } = Typography;


const Callout: React.FC<{ block: CalloutBlock | any }> = ({ block }) => {
    return (
        <Paragraph>
            <pre style={{padding: 15, borderRadius: 5}}>
                <NIcon icon={block.callout.icon} />
                {block.callout.rich_text.map((rt: RichText, index: number) => (
                    <RichText rt={rt} key={`block-callout-${block.id}-rt-${index}`}/>
                ))}
            </pre>
        </Paragraph>
    );
};

export default Callout