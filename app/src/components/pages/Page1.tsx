import React from "react";
import { Link } from "react-router-dom";

export const Page1 = () => (
    <div>
        Page1
        <br />
        <Link to="/page1/DetailA">Page1DetailA</Link>
        <br />
        <Link to="/page1/DetailB">Page1DetailB</Link>
    </div>
);
