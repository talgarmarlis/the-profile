import React, {useEffect, useState} from 'react';
import {notionService} from "../../../services/notion";
import Block from "../block";
import {BLOCK, BlockType, BlockTypeObject} from "../interface/block";


const Children: React.FC<{parentId: string, toc?: BlockTypeObject[]}> = ({parentId, toc}) => {
    const [blocks, setBlocks] = useState<BLOCK[]>([]);
    const [table, setTable] = useState<BlockTypeObject[]>([]);

    useEffect(() => {
        notionService.getBlocks(parentId)
            .then(response => {
            // @ts-ignore
            let groupedResult =  groupLists(response.data.results)
            let tC = toc ?? getTableOfContents(response.data.results);
            setTable(tC);
            // @ts-ignore
            setBlocks(groupedResult);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    function groupLists (blocks : BLOCK[]) {
        let groupedBlocks = [];
        let numberList, bulletList, todoList;
        let prev = "prev";

        for (let i = 0; i < blocks.length; i++) {
            const block =  blocks[i];

            if(block.type === BlockType.NumberedListItem) {
                if(prev !== BlockType.NumberedListItem) numberList = { type: BlockType.NumberedListItem, items: []}
                // @ts-ignore
                numberList.items.push(block);
                if(i === blocks.length - 1) groupedBlocks.push(numberList);
            }
            else if(block.type === BlockType.BulletedListItem) {
                if(prev !== BlockType.BulletedListItem) bulletList = { type: BlockType.BulletedListItem, items: []}
                // @ts-ignore
                bulletList.items.push(block);
                if(i === blocks.length - 1) groupedBlocks.push(bulletList);
            }
            else if(block.type === BlockType.ToDo) {
                if(prev !== BlockType.ToDo) todoList = { type: BlockType.ToDo, items: []}
                // @ts-ignore
                todoList.items.push(block);
                if(i === blocks.length - 1) groupedBlocks.push(todoList);
            }
            else {
                if(prev === BlockType.NumberedListItem) groupedBlocks.push(numberList);
                if(prev === BlockType.BulletedListItem) groupedBlocks.push(bulletList);
                if(prev === BlockType.ToDo) groupedBlocks.push(todoList);

                groupedBlocks.push(block);
            }

            prev = block.type;
        }

        return groupedBlocks;
    }

    function getTableOfContents (blocks : BlockTypeObject[]) {
        let table = [];
        for (let i = 0; i < blocks.length; i++) {
            if(blocks[i].type === BlockType.Heading1 || blocks[i].type === BlockType.Heading2 || blocks[i].type === BlockType.Heading3) {
                table.push(blocks[i]);
            }
        }
        return table;
    }

    return (
        <>
            {
                blocks.map((block: BlockTypeObject, index:any) => (
                    <Block key={`block_key_${index}`} block={block} toc={table}/>
                ))
            }
        </>
    )
};

export default Children