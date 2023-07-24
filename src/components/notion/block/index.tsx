import React from "react";
import {Typography} from "antd";
import {BlockType, BlockTypeObject} from '../interface/block';
import NParagraph from "./paragraph";
import Callout from "./callout";
import Heading from "./heading";
import NImage from "./image";
import ChildPage from "./childPage";
import TodoList from "./todoList";
import NTable from "./table";
import NDivider from "./divider";
import ColumnList from "./columnList";
import BulletList from "./bulletList";
import NumberedList from "./numberedList";
import Quote from "./quote";
import Code from "./code";
import Toggle from "./toggle";
import Bookmark from "./bookmark";
import File from "./file";
import PDF from "./pdf";


const Block: React.FC<{ block: BlockTypeObject }> = ({ block }) => {
    if (block.type === BlockType.Paragraph) {
        return <NParagraph block={block} />
    }

    if (block.type === BlockType.Callout) {
        return <Callout block={block} />
    }

    if (block.type === BlockType.Heading1 || block.type === BlockType.Heading2 || block.type === BlockType.Heading3) {
        return <Heading block={block} />
    }

    if (block.type === BlockType.Image) {
        return <NImage block={block} />
    }

    if (block.type === BlockType.BulletedListItem) {
        return <BulletList list={block} />
    }

    if (block.type === BlockType.NumberedListItem) {
        return <NumberedList list={block} />
    }

    if (block.type === BlockType.ChildPage) {
        return <ChildPage block={block} />
    }

    if (block.type === BlockType.ToDo) {
        return <TodoList list={block} />
    }

    if (block.type === BlockType.Table) {
        return <NTable block={block} />
    }

    if (block.type === BlockType.Divider) {
        return <NDivider block={block} />
    }

    if (block.type === BlockType.ColumnList) {
        return <ColumnList block={block} />
    }

    if (block.type === BlockType.Quote) {
        return <Quote block={block} />
    }

    if (block.type === BlockType.Code) {
        return <Code block={block} />
    }

    if (block.type === BlockType.Toggle) {
        return <Toggle block={block} />
    }

    if (block.type === BlockType.Bookmark) {
        return <Bookmark block={block} />
    }

    if (block.type === BlockType.File) {
        return <File block={block} />
    }

    if (block.type === BlockType.PDF) {
        return <PDF block={block} />
    }


    // console.log(block)

    // @ts-ignore
    return <Typography.Paragraph><b>{block.type}</b> {JSON.stringify(block)}</Typography.Paragraph>
};

export default Block