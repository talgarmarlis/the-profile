import {Checkbox} from "antd";
import {ToDoBlock} from '../interface/block';
import RichText from "./richText";
import Children from "../page/children";


const TodoList: React.FC<{ list: any }> = ({ list }) => {
    return (
        <ul style={{listStyleType:"none"}}>
            {list.items.map((item: ToDoBlock) => (
                <li key={`td-li-${item.id}`}>
                    <Checkbox checked={item.to_do.checked} style={{marginRight: 10}}/>
                    {item.to_do.rich_text.map((rt: RichText, index:number) => (
                        <RichText rt={rt} key={`block-td-${item.id}-rt-${index}`}/>
                    ))}
                    {item.has_children && <Children parentId={item.id} />}
                </li>
            ))}
        </ul>

    );
};

export default TodoList