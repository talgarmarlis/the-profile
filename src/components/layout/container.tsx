import {Layout} from "antd";
import React from "react";
const { Content } = Layout;

const Container: React.FC<{children?: any}> = ({children}) => {
    return (
        <Content
            className="site-layout"
            style={{
                padding: '0 20px',
                maxWidth: 1050,
                margin: 'auto',
            }}
        >
            {children}
        </Content>
    );
}

export default Container;