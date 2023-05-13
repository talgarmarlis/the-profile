import Bottom from "./bottom";
import {Layout, theme} from "antd";
import TopBar from "./topbar";
const { Content } = Layout;

export default function MainLayout({ children }) {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout>
            <TopBar/>
            <div>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        maxWidth: 1300,
                        margin: 'auto'
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 380,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
            </div>
            <Bottom/>
        </Layout>
    );
}