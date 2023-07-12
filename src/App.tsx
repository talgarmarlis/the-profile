import {Route, Routes} from "react-router-dom";
import {Typography} from "antd";
import './App.css';
import MainLayout from "./components/layout";
import Home from "./pages/home";
import Article from "./pages/article";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="articles" element={<MainLayout />}>
                    <Route path=":pageId" element={<Article />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Typography.Link href="/">Go to the home page</Typography.Link>
            </p>
        </div>
    );
}