import { userApi } from "@lib/states/apis/user";
import { sessionSlice, SessionState } from "@lib/states/reducers/session";
import { useDispatch } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { FxGuard } from "@coralblack/flax";

interface AuthRouteProps extends RouteProps {
  session: SessionState | null;
  authorizedOnly?: boolean;
  denyRedirectTo?: string;
}

export function AuthRoute(props: AuthRouteProps) {
  const { session, authorizedOnly, denyRedirectTo, render, component: Component, ...rest } = props;
  const Comp: any = Component;
  
  const dispatch = useDispatch();
  
  const available =
    (authorizedOnly === true && session && session.token) ||
    (authorizedOnly === false && (!session || !session.token)) ||
    (authorizedOnly === undefined && session && session.token)
      ? true
      : false;
  
  console.log("available :", available);
  console.log("render :", render); 
  
  return (
    <>
      <Route
        {...rest}
        render={props => 
          available ? (
            render ? (
              render(props)
            ) : (
              <>
                {session && session.token && (
                  <FxGuard
                    key="static"
                    api={{ ...userApi.getUserInfo }}
                    loading={() => <div className="app-spinner" />}
                    error={(err) => {
                      if (err?.code === "CREDENTIAL-INVALID") {
                        dispatch(sessionSlice.actions.signOut());
                        return <>&nbsp;</>;
                      }

                      return (
                        <>
                          [{err?.code || "UNKNOWN"}] {err?.message || "An error has occurred."}
                        </>
                      );
                    }}
                    render={resp =>  {
                      console.log(resp);

                      return <Comp />
                    }
                    }
                  />
                )}
                {(!session || !session.token) && <Comp />}
              </>
            )
          ) : (
            <Redirect to={{ pathname: denyRedirectTo, state: { from: props.location }}} />
          )
        }
      />
    </>
  );
}