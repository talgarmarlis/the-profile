import {Table, Typography} from "antd";
import {ParagraphBlock, TableRowBlock} from '../interface/block';
import {useEffect, useState} from "react";
import {notionService} from "../../../services/notion";
import RichText from "./richText";


const NTable: React.FC<{ block: ParagraphBlock | any }> = ({ block }) => {

    const [columns, setColumns] = useState<any[]>([])
    const [dataSource, setDataSource] = useState<any[]>([])

    useEffect(() => {
        notionService.getBlocks(block.id).then(response => {
            const rows = response.data.results
            setColumns(getColumns(rows));
            setDataSource(getDataSource(rows));
        })
    }, []);

    function getColumns(rows : TableRowBlock[]) {
        if(block.table.has_column_header && rows.length >= 1) {
            const row = rows[0];
            let columns = []
            for(let i = 0; i < row.table_row.cells.length; i++) {
                const cell = row.table_row.cells[i]
                const title = <Typography.Text key={`block-table-header-text-${block.id}-col${i}}`}>
                    {cell.map((rt: RichText, index:number) => (
                        <RichText rt={rt} key={`block-table-header-${block.id}-col${i}-rt-${index}`}/>
                    ))}
                    </Typography.Text>
                const dataIndex = `table_${block.id}_cell_${i}`
                const key = dataIndex;

                if(block.table.has_row_header && i == 0) columns.push({title, dataIndex, rowScope: 'row', key})
                else columns.push({title, dataIndex, key})
            }

            return columns;
        }
        else if(!block.table.has_column_header && rows.length >= 1) {
            const row = rows[0];
            let columns = []
            for(let i = 0; i < row.table_row.cells.length; i++) {
                const dataIndex = `table_${block.id}_cell_${i}`
                const key = dataIndex;
                const title = dataIndex;

                if(block.table.has_row_header && i == 0) columns.push({title, dataIndex, rowScope: 'row', key})
                else columns.push({title, dataIndex, key})
            }
            return columns;
        }

        return []
    }

    function getDataSource(rows : TableRowBlock[]) {
        let s = 0;
        if (block.table.has_column_header) s = 1;
        let columns = []

        for(let i = s; i < rows.length; i++) {
            const row = rows[i];
            let item = {key: i}
            for(let j = 0; j < row.table_row.cells.length; j++) {
                const cell = row.table_row.cells[j]
                const value = <Typography.Text key={`block-table-text-${block.id}-row${i}-col${j}}`} >
                    {cell.map((rt: RichText, index:number) => (
                        <RichText rt={rt} key={`block-table-${block.id}-row${i}-col${j}-rt-${index}`}/>
                    ))}
                </Typography.Text>
                const key = `table_${block.id}_cell_${j}`
                // @ts-ignore
                item[key] = value;
            }
            columns.push(item);
        }

        return columns;
    }

    return (
        <Table bordered pagination={false} showHeader={block.table.has_column_header} dataSource={dataSource} columns={columns} />
    );
};

export default NTable