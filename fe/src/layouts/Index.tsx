import { useState } from "react";
import { SideBarMenu } from "./SiderBarMenu";

interface LayoutProps {
  children: React.ReactNode;
  hideHeader?: boolean;
}

export default function Layout (props: LayoutProps) {
  const { hideHeader } = props;
  const [ sideBarVisibility, setSideBarVisibility ] = useState(false);
  
  return (
    <>
      <div className="app-layout">
        {/* Header */}
        {
          hideHeader !== true &&
          <div className="app-header">
            <span>FF14 PARTY HELPER</span>
            <SideBarMenu onClick={() => setSideBarVisibility(true)} />
          </div>
        }
        {/* Content */}
        <div className="app-content">
          {props.children}
        </div>
        {/* Footer */}
        <div className="app-footer">
          ⓒ Randel, All Rights Reserved
        </div>
        {/* SideBar */}
        <div className={`app-sidebar ${sideBarVisibility ? "" : "closed"}`}>
          <div className="app-sidebar-header">
            <div 
              className="app-sidebar-close-btn"
              onClick={() => setSideBarVisibility(false)}>
                &#10005;
            </div>
          </div>
          <div className="app-sidebar-menus">
            <ul>
              <li>Menu1</li>
              <li>Menu2</li>
              <li>Menu3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}