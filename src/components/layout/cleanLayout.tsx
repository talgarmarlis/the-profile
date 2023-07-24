import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import Bottom from "../bottom";

export default function CleanLayout() {

    return (
        <Layout>
            <Outlet />
            <Bottom/>
        </Layout>
    );
}