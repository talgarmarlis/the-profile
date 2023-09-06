import {Menu, Layout, Typography, Divider} from 'antd';
import Container from "./layout/container";
import Link from "antd/es/typography/Link";
const { Header} = Layout;
const items : any[] = [
    {
        label: (
            <Link href="/">
                HOME
            </Link>
        ),
        key: 'home'
    },
    {
        label: (
            <Link href="/#/resume">
                RESUME
            </Link>
        ),
        key: 'resume'
    }
];

const Topbar: React.FC<{divider?: boolean | null}> = ({divider}) => {

    return (
        <div>
            <Container>
                <Header
                    style={{
                        position: 'sticky',
                        display: 'flex',
                        justifyContent: 'space-between',
                        top: 0,
                        zIndex: 1,
                        padding: 0,
                        background: 'none',
                        alignItems: 'right'
                    }}
                >
                    <Typography.Link href="/"><Typography.Title level={5}>TALGAR MARLIS</Typography.Title></Typography.Link>
                    <Menu disabledOverflow={true} style={{background: 'none', borderBottom: 'none', display: 'table-cell', float: 'right', textAlign: 'right'}} mode="horizontal" items={items} />
                </Header>
            </Container>
            {divider && <Divider style={{margin: 0}} />}
        </div>
    );
}

export default Topbar;