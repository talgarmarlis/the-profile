import {Menu, Layout, theme, Typography, Divider} from 'antd';
import { useState } from 'react';
import Link from "next/link";
const { Header, Content} = Layout;
const items = [
    // {
    //     label: (
    //         <Link href="/">
    //             HOME
    //         </Link>
    //     ),
    //     key: 'home'
    // },
    // {
    //     label: (
    //         <Link href="/resume">
    //             RESUME
    //         </Link>
    //     ),
    //     key: 'resume'
    // }
];

export default function TopBar() {

    const [current, setCurrent] = useState('home');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <Header
                style={{
                    position: 'sticky',
                    display: 'flex',
                    justifyContent: 'space-between',
                    top: 0,
                    zIndex: 1,
                    maxWidth:1300,
                    margin: 'auto',
                    background: colorBgContainer,
                    alignItems: 'right'
                }}
            >
                <Typography.Title level={5}>Talgar Marlis</Typography.Title>
                <Menu style={{borderBottom: 'none', display: 'table-cell', float: 'right', textAlign: 'right'}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            </Header>
            <Divider style={{margin: 0}} />
        </div>
    );
}