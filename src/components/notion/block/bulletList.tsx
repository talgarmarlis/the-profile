import {BulletedListItemBlock} from '../interface/block';
import RichText from "./richText";
import Children from "../page/children";


const BulletList: React.FC<{ list: any }> = ({ list }) => {
    return (
        <ul>
            {list.items.map((item: BulletedListItemBlock) => (
                <li key={`bl-li-${item.id}`}>
                    {item.bulleted_list_item.rich_text.map((rt: RichText, index:number) => (
                        <RichText rt={rt} key={`block-bl-${item.id}-rt-${index}`}/>
                    ))}
                    {item.has_children && <Children parentId={item.id} />}
                </li>
            ))}
        </ul>
    );
};

export default BulletList