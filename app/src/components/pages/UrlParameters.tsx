import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const UrlParameters = () => {
    const params = useParams();
    const { search } = useLocation();
    const location = useLocation();
    const query = new URLSearchParams(search);
    console.log(params);
    console.log(location);
    console.log(query.get("name"));
    return <p>aaaaa</p>;
};
