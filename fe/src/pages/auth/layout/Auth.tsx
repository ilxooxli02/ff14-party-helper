import { userApi } from "ff14-party-helper-lib/dist/states/apis/user";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { FxGuard } from "@coralblack/flax";
import Layout from "@layouts/Index";
import { useRoute } from "@hooks/useRoute";


const CLIENT_ID = "878887191353384991";

export default function AuthLayout() {
  console.log("### AuthLayout ###");
  const match = useRouteMatch();
  const { query } = useRoute();
  console.log("match.url :", match.url);

  const oauthDiscord = () => {
    window.location.href = `https://discord.com/api/oauth2/authorize?client_id=${CLIENT_ID}&scope=identify&redirect_uri=http%3A%2F%2Flocalhost%3A55000%2Fauth%2Fsign-in&state=ff14-party-helper-1629624950025&prompt=consent&response_type=code`;
  }

  return (
    <>
      <Layout hideHeader={true}>
        <Switch>
          <Route
            path={match.url}
            exact={true}
            component={() =>
              <div className="app-sign-in">
                <div className="main-door">
                  <div>Final Fantasy XIV</div>
                  <div>PARTY HELPER</div>
                </div>
                <button
                  className="sign-in-with-discord"
                  onClick={() => oauthDiscord()}>
                    디스코드로 로그인하기
                </button>
              </div>
            }
          />
          <Route
            path={`${match.url}/sign-in`}
            exact={true}
            component={() =>
              <FxGuard
                api={{ 
                  ...userApi.getUserInfo, 
                  query: { code: String(query.code) }
                }}
                loading={() => <div className="app-spinner" />}
                render={resp => 
                  <div>
                    hi..
                  </div>
                }
              />
            }
          />
        </Switch>
      </Layout>
    </>
  );
}