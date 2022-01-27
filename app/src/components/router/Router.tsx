import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Page3 } from "../pages/Page3";
import { Page404 } from "../pages/Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => (
    <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
            path="/page1"
            render={({ match: { url } }) => (
                <Switch>
                    {Page1Routes.map((route) => (
                        <Route
                            key={route.path}
                            path={`${url}${route.path}`}
                            exact={route.exact}
                            render={() => route.children}
                        />
                    ))}
                </Switch>
            )}
        />
        <Route
            path="/page2"
            render={({ match: { url } }) => (
                <Switch>
                    {Page2Routes.map((route) => (
                        <Route
                            key={route.path}
                            path={`${url}${route.path}`}
                            exact={route.exact}
                            render={() => route.childen}
                        />
                    ))}
                </Switch>
            )}
        />
        <Route path="/page3" render={() => <Page3 />} />
        <Route path="*" render={() => <Page404 />} />
    </Switch>
);
