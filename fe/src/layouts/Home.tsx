import { useState } from "react";

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
          <div className="app-header">
            <span>ff14 Party Helper</span>
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
      </div>
    </>
  );
}