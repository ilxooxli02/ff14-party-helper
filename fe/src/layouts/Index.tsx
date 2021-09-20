import { useState } from "react";
import { SideBarMenu } from "./SiderBarMenu";

export default function Layout () {
  const [ sideBarVisibility, setSideBarVisibility ] = useState(false);
  
  return (
    <>
      <div className="app-layout">
        {/* Header */}
        <div className="app-header">
          <span>FF14 PARTY HELPER</span>
          <SideBarMenu onClick={() => setSideBarVisibility(true)} />
        </div>
        {/* Content */}
        <div className="app-content">

        </div>
        {/* Footer */}
        <div className="app-footer">

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