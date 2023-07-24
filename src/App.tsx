import {HashRouter, Route, Routes} from "react-router-dom";
import {Typography} from "antd";
import './App.css';
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import Article from "./pages/article";
import CleanLayout from "./components/layout/cleanLayout";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="articles" element={<CleanLayout />}>
                    <Route path=":pageId" element={<Article />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </HashRouter>
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