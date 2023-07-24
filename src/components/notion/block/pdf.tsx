import {PDFBlock} from '../interface/block';
import {Card, Typography} from "antd";


const PDF: React.FC<{ block: PDFBlock | any }> = ({ block }) => {
    const file = block.pdf;
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

export default PDF