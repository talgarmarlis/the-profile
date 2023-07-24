import {FileBlock} from '../interface/block';
import {Card, Typography} from "antd";


const File: React.FC<{ block: FileBlock | any }> = ({ block }) => {
    const file = block.file;
    return (
        <>

                <Card >
                    <Card.Meta
                        title={(new URL(file[file.type].url).pathname).split("/").pop()}
                        description={<Typography.Link href={file[file.type].url} target="_blank">Dwonload</Typography.Link>}
                    />
                </Card>
        </>
    );
};

export default File