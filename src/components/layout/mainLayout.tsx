import {Layout, theme} from "antd";
import {Outlet} from "react-router-dom";
import Bottom from "../bottom";
import TopBar from "../topbar";
import Container from "./container";
import Section from "./section";

export default function MainLayout() {
    const {
        token: { colorBgContainer = 'fff' },
    } = theme.useToken();

    return (
        <Layout style={{background: colorBgContainer}}>
            <TopBar divider/>
            <Container>
                <Section>
                    <Outlet />
                </Section>
            </Container>
            <Bottom/>
        </Layout>
    );
}