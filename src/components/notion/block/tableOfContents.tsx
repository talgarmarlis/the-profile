import {BlockType, BlockTypeObject, Heading1Block, Heading2Block, Heading3Block} from '../interface/block';
import { Tree, TreeDataNode } from 'antd';


function getTreeData(toc: BlockTypeObject[]) {
    let treeData: TreeDataNode[] = []
    if(toc.length == 0) return treeData;
    let first: Heading1Block | Heading2Block | Heading3Block | any = toc[0];
    let cur: TreeDataNode = {
        title: first[first.type].rich_text.map((rt: RichText) => rt.plain_text).join(" "),
        key: 0
    }

    for(let i = 1; i < toc.length; i++) {
        let block: Heading1Block | Heading2Block | Heading3Block | any = toc[i];
        let curBlock: Heading1Block | Heading2Block | Heading3Block | any = toc[parseInt("" + cur.key)];

        if(block.type === BlockType.Heading1 || curBlock.type === BlockType.Heading3) {
            treeData.push(cur);
            cur = {
                title: block[block.type].rich_text.map((rt: RichText) => rt.plain_text).join(" "),
                key: i
            }
        }
        else if(block.type === BlockType.Heading2) {
            let curBlock: Heading1Block | Heading2Block | Heading3Block | any = toc[parseInt("" + cur.key)];
            if(curBlock.type === BlockType.Heading2) {
                treeData.push(cur);
                cur = {
                    title: block[block.type].rich_text.map((rt: RichText) => rt.plain_text).join(" "),
                    key: i
                }
            }
            else {
                let node: TreeDataNode = {
                    title: block[block.type].rich_text.map((rt: RichText) => rt.plain_text).join(" "),
                    key: i
                }
                if(!cur.children) cur.children = []
                cur.children.push(node);
            }
        }
        else if(block.type === BlockType.Heading3) {
            let curBlock: Heading1Block | Heading2Block | Heading3Block | any = toc[parseInt("" + cur.key)];
            let node: TreeDataNode = {
                title: block[block.type].rich_text.map((rt: RichText) => rt.plain_text).join(" "),
                key: i
            }
            if(curBlock.type === BlockType.Heading2) {
                if(!cur.children) cur.children = []
                cur.children.push(node);
            }
            else {
                if(!cur.children) {
                    cur.children = []
                    cur.children.push(node);
                }
                else {
                    let lastChild = cur.children[cur.children.length - 1];
                    let lastBlock: Heading1Block | Heading2Block | Heading3Block | any = toc[parseInt("" + lastChild.key)];

                    if(lastBlock.type === BlockType.Heading3) cur.children.push(node);
                    else {
                        if(!lastChild.children) lastChild.children = [];
                        lastChild.children.push(node);
                    }
                }
            }
        }
    }

    treeData.push(cur);
    return treeData;
}


const TableOfContents: React.FC<{ toc: BlockTypeObject[] }> = ({ toc }) => {


    return (
        <>
        <Tree
            selectable={false}
            defaultExpandAll
            treeData={getTreeData(toc)}
        />
        </>
        // <>
        // <Space direction="vertical" size="small">
        //     {toc.map((item: Heading1Block | Heading2Block | Heading3Block | any) => (
        //         <Text style={{fontSize:12}}>
        //             {item[item.type].rich_text.map((rt: RichText, index:number) => (
        //                 rt.plain_text
        //             ))}
        //         </Text>
        //     ))}
        // </Space>
        // </>
    );
};

export default TableOfContents