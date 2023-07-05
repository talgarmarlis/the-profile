import Bottom from "./bottom";
import {Layout, theme} from "antd";
import TopBar from "./topbar";
const { Content } = Layout;

export default function MainLayout({ children }) {
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
                {/*<div*/}
                {/*    style={{*/}
                {/*        padding: 24,*/}
                {/*        minHeight: 380,*/}
                {/*        background: colorBgContainer,*/}
                {/*    }}*/}
                {/*>*/}
                    {children}
                {/*</div>*/}
            </Content>
            <Bottom/>
        </Layout>
    );
}