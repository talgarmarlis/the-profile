import {NumberedListItemBlock} from '../interface/block';
import RichText from "./richText";
import Children from "../page/children";


const NumberedList: React.FC<{ list: any }> = ({ list }) => {
    return (
        <ol>
            {list.items.map((item: NumberedListItemBlock) => (
                <li key={`nl-li-${item.id}`}>
                    {item.numbered_list_item.rich_text.map((rt: RichText, index:number) => (
                        <RichText rt={rt} key={`block-nl-${item.id}-rt-${index}`}/>
                    ))}
                    {item.has_children && <Children parentId={item.id} />}
                </li>
            ))}
        </ol>
    );
};

export default NumberedList