import React from "react";
import { Link } from "react-router-dom";

export const Page2 = () => (
    <div>
        page2
        <br />
        <Link to="/page2/url1">URL パラメーターへのリンク</Link>
        <br />
        <Link to="/page2/url2">URL パラメーターへのリンク</Link>
        <br />
        <Link to="/page2/300?name=hogehoge">URL パラメーターへのリンク</Link>
    </div>
);
