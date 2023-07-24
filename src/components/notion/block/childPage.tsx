import {Typography } from "antd";
import {CalloutBlock} from '../interface/block';

const { Link } = Typography;


const ChildPage: React.FC<{ block: CalloutBlock | any }> = ({ block }) => {
    return (
        <Link href={`/articles/${block.id}`} target="_blank">
            {block.child_page.title}
        </Link>
    );
};

export default ChildPage