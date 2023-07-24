import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import Page from "../../components/notion/page";



const Article: React.FC = () => {
    const { pageId } = useParams();
    const [searchParams] =useSearchParams();

    return (
        <Page pageId={`${pageId}`} color={searchParams.get("color") ?? '230, 242, 238'} />
    );
};

export default Article