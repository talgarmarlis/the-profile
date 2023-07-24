import {Col, Row} from "antd";
import {ColumnListBlock} from '../interface/block';
import {useEffect, useState} from "react";
import {notionService} from "../../../services/notion";
import Children from "../page/children";


const ColumnList: React.FC<{ block: ColumnListBlock | any }> = ({ block }) => {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        notionService.getBlocks(block.id).then(response => {
            const data = response.data.results
            // @ts-ignore
            setRows(generateRows(data))
        })
    }, []);


    // @ts-ignore
    function generateRows(list) {
        let rows = [];
        while (list.length > 4) {
            let cols = [];
            if( list.length == 5 ) {
                for (let i = 0; i < 3; i ++) cols.push(list.shift())
            }
            else for (let i = 0; i < 4; i ++) cols.push(list.shift())
            rows.push(cols);
        }

        let cols = [];
        let ll = list.length
        for (let i = 0; i < ll; i ++) cols.push(list.shift())
        rows.push(cols);

        return rows;
    }


    return (
        <>
            {rows.map((cols: any[], index: number) => (
                <Row key={`row-${block.id}-${index}`}>
                    {cols.map((col, index2: number) => (
                        <Col key={`row-${block.id}-${index}-${index2}`} span={24/cols.length} style={{padding: 5}}>
                            <Children parentId={col.id} />
                        </Col>
                    ))}
                </Row>
            ))}
        </>
    );
};

export default ColumnList