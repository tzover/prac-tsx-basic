import React from "react";
import { Page2 } from "../pages/Page2";
import { UrlParameters } from "../pages/UrlParameters";

export const Page2Routes = [
    {
        path: "/",
        exact: true,
        childen: <Page2 />,
    },
    {
        path: "/:id",
        exact: false,
        childen: <UrlParameters />,
    },
];
