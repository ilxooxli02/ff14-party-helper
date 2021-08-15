import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ErrorLayout } from "@pages/system/layout/Error";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Suspense
                    fallback={
                        <div className="suspense-loading">
                            <div className="loading">
                                <div className="loader" />
                            </div>
                        </div>
                    }
                >
                    <Switch>
                        <Route exact={true} path="/404" component={ErrorLayout} />
                        <Redirect from="*" to="/404" />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    );
}

export default App;