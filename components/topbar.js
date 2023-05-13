import { HomeTwoTone, ProfileTwoTone } from '@ant-design/icons';
import {Menu, Layout, theme, Space} from 'antd';
import { useState } from 'react';
import Link from "next/link";
const { Header, Content} = Layout;
const items = [
    {
        label: (
            <Link href="/">
                HOME
            </Link>
        ),
        key: 'home',
        icon: <HomeTwoTone />,
    },
    {
        label: (
            <Link href="/resume">
                RESUME
            </Link>
        ),
        key: 'resume',
        icon: <ProfileTwoTone />
    }
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
        <Header
            style={{
                position: 'sticky',
                padding: '0',
                top: 0,
                zIndex: 1,
                width: '100%',
                background: colorBgContainer
            }}
        >
            <Menu style={{maxWidth:1300, margin: 'auto', padding: '0 50px',}} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </Header>
    );
}