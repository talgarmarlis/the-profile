import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Typography} from "antd";
import './App.css';
import MainLayout from "./components/layout";
import Home from "./pages/home";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          {/*<Route path="about" element={<About />} />*/}
          {/*<Route path="dashboard" element={<Dashboard />} />*/}

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
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