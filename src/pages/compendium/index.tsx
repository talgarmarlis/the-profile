import React from 'react';
import Container from "../../components/layout/container";
import Children from "../../components/notion/page/children";
import Section from "../../components/layout/section";
import { Row, Typography} from 'antd';

const Compendium: React.FC<{color?: string, cover?: boolean}> = ({color, cover = true}) => {

    return (
        <div style={{background: "#fff", fontSize: 14}} >
            <Container>
                <Section>
                     <Row style={{marginBottom:15, textAlign: 'center', display: 'flow'}}>
                        <Typography.Title style={{margin: 0}} level={1}>
                            Software Development Compendium
                        </Typography.Title>
                        
                    </Row>
                    <Row style={{marginBottom:15, textAlign: 'right', display: 'flow'}}>
                    <Typography.Title level={3}>[ 🚧 Under Construction...]</Typography.Title>
                    </Row>
                </Section>
            </Container>
            <Container>
                <Section>
                    <Children parentId={"44e0a82fca2444f384bcc83d6e17e760"} />
                </Section>
            </Container>
        </div>
    );
};

export default Compendium