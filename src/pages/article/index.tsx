import React from 'react';
import {useParams} from "react-router-dom";
import Page from "../../components/notion/page";



const Article: React.FC = () => {
    const { pageId } = useParams();

    return (
        <Page pageId={`${pageId}`} />
    );
};

export default Article