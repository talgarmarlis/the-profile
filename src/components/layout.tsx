import {Layout, theme} from "antd";
import {Outlet} from "react-router-dom";
import Bottom from "./bottom";
import TopBar from "./topbar";
const { Content } = Layout;

export default function MainLayout() {
    const {
        token: { colorBgContainer = 'fff' },
    } = theme.useToken();

    return (
        <Layout style={{background: colorBgContainer}}>
            <TopBar/>
            <Content
                className="site-layout"
                style={{
                    padding: '50px',
                    maxWidth: 1300,
                    margin: 'auto',
                    minHeight: 300
                }}
            >
                <Outlet />
            </Content>
            <Bottom/>
        </Layout>
    );
}