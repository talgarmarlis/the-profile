import {Col, Row} from "antd";
import {BlockTypeObject, ColumnListBlock} from '../interface/block';
import {useEffect, useState} from "react";
import {notionService} from "../../../services/notion";
import Children from "../page/children";


const ColumnList: React.FC<{ block: ColumnListBlock | any, toc: BlockTypeObject[] }> = ({ block, toc }) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        notionService.getBlocks(block.id).then(response => {
            // @ts-ignore
            setRows(response.data.results)
        })
    }, []);


    // @ts-ignore
    // function generateRows(list) {
    //     let rows = [];
    //     while (list.length > 4) {
    //         let cols = [];
    //         if( list.length == 5 ) {
    //             for (let i = 0; i < 3; i ++) cols.push(list.shift())
    //         }
    //         else for (let i = 0; i < 4; i ++) cols.push(list.shift())
    //         rows.push(cols);
    //     }
    //
    //     let cols = [];
    //     let ll = list.length
    //     for (let i = 0; i < ll; i ++) cols.push(list.shift())
    //     rows.push(cols);
    //
    //     return rows;
    // }


    return (
        <>
            <Row key={`col-row-${block.id}`}>
                {rows.map((col: any, index: number) => (
                    <Col xs={{ span: 24}} sm={{ span: Math.max(24/rows.length, 12)}} md={{span: Math.max(24/rows.length, 8)}} lg={{span: Math.max(24/rows.length, 6)}} key={`row-${block.id}-${index}`} style={{padding: 5}}>
                        <Children parentId={col.id} toc={toc}/>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default ColumnList