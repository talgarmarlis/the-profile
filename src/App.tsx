import {HashRouter, Route, Routes} from "react-router-dom";
import {ConfigProvider, Typography} from "antd";
import './App.css';
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/home";
import Article from "./pages/article";
import CleanLayout from "./components/layout/cleanLayout";
import Resume from "./pages/resume";
import Compendium from "./pages/compendium";

export default function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontSize: 16,
                    fontFamily: "Lato, Tahoma, Verdana, sans-serif"
                },
            }}
        >
            <HashRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="/resume" element={<MainLayout />}>
                        <Route index element={<Resume />} />
                    </Route>
                    <Route path="/compendium" element={<MainLayout />}>
                        <Route index element={<Compendium />} />
                    </Route>
                    <Route path="articles" element={<CleanLayout />}>
                        <Route path=":pageId" element={<Article />} />
                    </Route>

                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </HashRouter>
        </ConfigProvider>
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