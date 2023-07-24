import {Collapse} from "antd";
import {ToggleBlock} from '../interface/block';
import RichText from "./richText";
import Children from "../page/children";


const Toggle: React.FC<{ block: ToggleBlock | any }> = ({ block }) => {
    return (
        <Collapse ghost
                  items={[
                        {
                            label: (<>
                                {block.toggle.rich_text.map((rt: RichText, index:number) => (
                                    <RichText rt={rt} key={`block-toggle-${block.id}-rt-${index}`}/>
                                ))}
                            </>),
                            children: block.has_children? <Children parentId={block.id} /> : null
                        },
                    ]}
        />

    );
};

export default Toggle