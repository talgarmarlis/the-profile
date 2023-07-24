import {Layout} from "antd";
import React from "react";
const { Content } = Layout;

const Section: React.FC<{children?: any}> = ({children}) => {
    return (
        <Content
            className="site-layout"
            style={{padding: '30px 0'}}
        >
            {children}
        </Content>
    );
}

export default Section;