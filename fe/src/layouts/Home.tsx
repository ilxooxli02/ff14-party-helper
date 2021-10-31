import { Redirect, Route, Switch } from "react-router";
import PartyFindList from "@pages/party/PartyFindList";
import { PartyFindRegister } from "@pages/party/PartyFindRegister";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

export default function HomeLayout (props: LayoutProps) {
  const { hideHeader } = props;
  
  return (
    <>
      <div className="app-home-layout">
        {/* Header */}
        {
          hideHeader !== true &&
          <div className="app-home-header">
            <span>ff14 Party Helper</span>
          </div>
        }
        {/* Content */}
        <div className="app-home-content">
          <Switch>
            <Route exact={true} path="/parties" component={() => <PartyFindList />} />
            <Route exact={true} path="/parties/register" component={() => <PartyFindRegister />} />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
        {/* Footer */}
        <div className="app-home-footer">
          ⓒ Randel, All Rights Reserved
        </div>
      </div>
    </>
  );
}