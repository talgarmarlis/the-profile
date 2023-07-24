import {BookmarkBlock} from '../interface/block';
import {Card, Typography} from "antd";


const Bookmark: React.FC<{ block: BookmarkBlock | any }> = ({ block }) => {
    return (
        <>
            {/*{block.paragraph.rich_text.map((rt: RichText, index:number) => (*/}
            {/*    <RichText rt={rt} key={`block-paragraph-${block.id}-rt-${index}`}/>*/}
            {/*))}*/}
            <Typography.Link href={block.bookmark.url} target="_blank">
                <Card hoverable >
                    <Card.Meta
                        title={new URL(block.bookmark.url).hostname}
                        description={block.bookmark.url}
                    />
                </Card>
            </Typography.Link>
        </>
    );
};

export default Bookmark