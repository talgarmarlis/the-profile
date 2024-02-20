import React, {useEffect, useState} from 'react';
import {notionService} from "../../../services/notion";
import {Card, Typography } from "antd";
import {CalloutBlock} from '../interface/block';
import {PAGE} from "../interface/page";
import { getIcon } from '../page/cover';

const { Link } = Typography;


const ChildPage: React.FC<{ block: CalloutBlock | any }> = ({ block }) => {

    const [page, setPage] = useState<PAGE | null>(null);

    useEffect(() => {
        notionService.getPage(block.id)
            .then(resp => {
                setPage(resp.data)
            })
    }, []);

    return (
        <Link href={`/#/articles/${block.id}`} target="_blank">
                <Card hoverable style={{marginBottom:10, padding:5}} size='small'>
                    <Card.Meta
                        avatar={page && getIcon(page)}
                        title={<span style={{fontSize:15, marginBottom:3}}>{block.child_page.title}</span>}
                    />
                </Card>
            </Link>
    );
};

export default ChildPage