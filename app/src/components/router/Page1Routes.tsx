import React from "react";
import { Page1 } from "../pages/Page1";
import { Page1DetailA } from "../pages/Page1DetailA";
import { Page1DetailB } from "../pages/Page1DetailB";
import { Page404 } from "../pages/Page404";

export const Page1Routes = [
    {
        path: "/",
        exact: true,
        children: <Page1 />,
    },
    {
        path: "/DetailA",
        exact: false,
        children: <Page1DetailA />,
    },
    {
        path: "/DetailB",
        exact: false,
        children: <Page1DetailB />,
    },
    {
        path: "*",
        exact: false,
        children: <Page404 />,
    },
];
