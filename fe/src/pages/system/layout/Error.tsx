import React from "react";
import { Link, RouteProps } from "react-router-dom";

interface ErrorLayoutProps extends RouteProps {}

export function ErrorLayout(props: ErrorLayoutProps) {
  return (
    <>
      <div className="app-layout">
        <div className="app-fullpage">
          <div className="app-content message">
            <i>sick</i>
            <p>Page Not Found</p>
            <Link to="/">Go Home</Link>
          </div>
        </div>
      </div>
    </>
  );
}
