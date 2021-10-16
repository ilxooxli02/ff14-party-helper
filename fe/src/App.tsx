import { AuthRoute } from "@routes/AuthRoute";
import { lazy, Suspense } from "react";
import { RootState } from "ff14-party-helper-lib/dist/states"
import { useStore } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ErrorLayout } from "@pages/system/layout/Error";


const AuthLayout = lazy(() => import("@pages/auth/layout/Auth"));
const HomeLayout = lazy(() => import("@layouts/Home"));

function App() {
  const session = useStore<RootState>().getState().session;

  console.log("session :", session);

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
          }>
          <Switch>
            <Route exact={true} path="/404" component={ErrorLayout} />
            <AuthRoute session={session} authorizedOnly={false} path="/auth" component={AuthLayout} />
            <AuthRoute session={session} authorizedOnly={false} denyRedirectTo="/auth" path="/" component={HomeLayout} />
            <Redirect from="*" to="/404" />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;