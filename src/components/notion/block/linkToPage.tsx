import React, {useEffect, useState} from 'react';
import {notionService} from "../../../services/notion";
import { Card, Typography } from "antd";
import {LinkToPageBlock} from '../interface/block';
import {PAGE} from "../interface/page";
import { getIcon } from '../page/cover';
import RichText from './richText';

const { Link } = Typography;


const LinkToPage: React.FC<{ block: LinkToPageBlock | any }> = ({ block }) => {

    const [page, setPage] = useState<PAGE | null>(null);

    useEffect(() => {
        const page_id = block.link_to_page.page_id
        notionService.getPage(page_id)
            .then(resp => {
                setPage(resp.data)
            })
    }, []);

    return (
        <Link href={`/#/articles/${block.id}`} target="_blank">
                <Card hoverable style={{marginBottom:10, padding:5}} size='small'>
                    <Card.Meta
                        avatar={page && getIcon(page)}
                        title={<span style={{fontSize:15, marginBottom:3}}>
                            { page && page.properties.Page &&
                                page.properties.Page.title.map((rt: RichText, index:number) => (
                                    <RichText rt={rt} key={`page-title-${page.id}-rt-${index}`}/>
                                ))
                            }
                        </span>}
                    />
                </Card>
            </Link>
    );
};

export default LinkToPage