import React, {useEffect, useState} from 'react';
import {notionService} from "../../../services/notion";
import {useNavigate} from "react-router-dom";
import {PAGE} from "../interface/page";
import PageCover from "./cover";
import Container from "../../layout/container";
import Children from "./children";
import Section from "../../layout/section";


const Page: React.FC<{pageId: string, color?: string, cover?: boolean}> = ({pageId, color, cover = true}) => {
    const navigate = useNavigate();
    const [page, setPage] = useState<PAGE | null>(null);

    useEffect(() => {
        notionService.getPage(pageId)
            .then(resp => {
                setPage(resp.data)
            })
            .catch(e => {navigate("404"); })
    }, []);

    if (!page) {
        return <div>Loading...</div>;
    }


    return (
        <div style={{background: "#fff", fontSize: 14}} >
            {cover && <PageCover page={page} color={color}/>}
            <Container>
                <Section>
                    <Children parentId={page.id} />
                </Section>
            </Container>
        </div>
    );
};

export default Page